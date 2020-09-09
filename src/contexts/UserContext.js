import React, { createContext, useState, useContext, useEffect } from "react";
import firebase from "../firebase-utils/init";
import PropTypes from "prop-types";
import useAuthenticationState from "../hooks/useAuthenticationState";

const defaultUser = {
  uid: null,
  email: null,
  name: { first: "Georgelyz", last: "Martinez" },
  photo: "img/test.jpg"
};

const defaultState = {
  loading: false,
  user: defaultUser,
  login: async () => {},
  loginWithGoogle: async () => {},
  logout: async () => {}
};

const UserContext = createContext(defaultState);

const UserProvider = ({ children }) => {
  const firebaseUser = useAuthenticationState(firebase);
  const [user, setUser] = useState(null);

  const login = ({ email, password }) => {
    // auth with firebase, then set user to firebase user.
    setUser({ ...defaultUser, uid: 0, email });
  };

  const loginWithGoogle = async () => {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    GoogleProvider.addScope("profile");
    try {
      const results = await firebase.auth().signInWithPopup(GoogleProvider);
      const { additionalUserInfo } = results;
      const { given_name, family_name } = additionalUserInfo;
      console.log(given_name + " " + family_name);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    if (!firebaseUser) return;

    console.log(firebaseUser);
    const [first, last] = firebaseUser.displayName.split(" ");

    const signedUser = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: { first, last },
      photo: firebaseUser.photoURL
    };

    setUser(signedUser);
  }, [firebaseUser]);

  const providerValue = { user, login, loginWithGoogle, logout };

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
