import React, { createContext, useState, useContext } from "react";

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
  const [user, setUser] = useState(null);

  const login = ({ email, password }) => {
    // auth with firebase, then set user to firebase user.
    setUser({ uid: 0, ...defaultUsers, email });
  };

  const providerValue = { user, login };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
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
