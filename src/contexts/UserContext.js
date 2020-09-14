import React, { createContext, useState, useContext, useEffect } from "react";
import firebase from "../firebase-utils/init";
import Storage from "../firebase-utils/storageModel";
import getFileExtension from "../utils/getFileExtension";
import PropTypes from "prop-types";
import useAuthenticationState from "../hooks/useAuthenticationState";

const defaultUser = {
  uid: null,
  email: null,
  name: { first: null, last: null },
  photo: null
};

const defaultState = {
  loading: false,
  user: defaultUser,
  signup: async () => {},
  login: async () => {},
  loginWithGoogle: async () => {},
  logout: async () => {}
};

const defaultProfilePictureURL =
  "https://firebasestorage.googleapis.com/v0/b/fb-post-creator.appspot.com/o/profiles-pictures%2Fdefault-profile-picture.jpg?alt=media&token=f82f4d92-2d6e-4720-97d7-3e584dc527db";

const getProfilePhotoURL = async (userId, photoImage) => {
  if (!photoImage) {
    return defaultProfilePictureURL;
  }
  const photoImageExtension = getFileExtension(photoImage.name);
  const { url } = await Storage.saveFile(
    `profile-photos/${userId}.${photoImageExtension}`,
    photoImage
  );
  return url;
};

const createFirebaseUser = async (
  firebase,
  { email, password, displayName, photoImage }
) => {
  const authenticator = firebase.auth();
  await authenticator.createUserWithEmailAndPassword(email, password);
  const newUser = authenticator.currentUser;
  const photoURL = await getProfilePhotoURL(newUser.uid, photoImage);
  await newUser.updateProfile({ displayName, photoURL });
  await authenticator.updateCurrentUser(newUser);
};

const UserContext = createContext(defaultState);

const UserProvider = ({ children }) => {
  const firebaseUser = useAuthenticationState(firebase);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    setUser(localUser);
  }, []);

  const login = async ({ email, password }) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };

  const signup = async user => {
    try {
      await createFirebaseUser(firebase, user);
    } catch (error) {
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(GoogleProvider);
    } catch (error) {
      alert(error);
    }
  };

  const logout = async () => {
    await firebase.auth().signOut();
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    if (!firebaseUser) return;

    const [first, last] = firebaseUser.displayName.split(" ");

    const signedUser = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: { first, last },
      photo: firebaseUser.photoURL
    };

    localStorage.setItem("user", JSON.stringify(signedUser));
    setUser(signedUser);
  }, [firebaseUser]);

  const providerValue = { user, signup, login, loginWithGoogle, logout };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

UserContext.propTypes = {
  children: PropTypes.node.isRequired
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext can only be used within a UserProvider");
  }
  return context;
};

export default UserContext;

export { useUserContext, UserProvider };
