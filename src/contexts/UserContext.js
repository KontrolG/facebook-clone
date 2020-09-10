import React, { createContext, useState, useContext, useEffect } from "react";
import firebase from "../firebase-utils/init";
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

const createFirebaseUser = async (
  firebase,
  { email, password, displayName, photoURL }
) => {
  const authenticator = firebase.auth();
  await authenticator.createUserWithEmailAndPassword(email, password);
  const newUser = authenticator.currentUser;
  await newUser.updateProfile({ displayName, photoURL });
  await authenticator.updateCurrentUser(newUser);
};

const UserContext = createContext(defaultState);

const UserProvider = ({ children }) => {
  const firebaseUser = useAuthenticationState(firebase);
  const [user, setUser] = useState(null);

  const login = async ({ email, password }) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signup = async user => {
    try {
      await createFirebaseUser(firebase, user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginWithGoogle = async () => {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(GoogleProvider);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const logout = async () => {
    await firebase.auth().signOut();
    // localStorage.removeItem("user");
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
