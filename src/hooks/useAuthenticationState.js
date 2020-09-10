import { useState, useEffect } from "react";

const userProfileIsUpdated = user => user.displayName !== null;

const userHasUpdated = (updatedUser, user) => {
  if (!updatedUser) return false;
  if (!updatedUser.displayName) return false;
  if (!user) return true;
  if (user.displayName !== updatedUser.displayName) return true;
  return false;
};

const useAuthenticationState = firebase => {
  const [user, setUser] = useState(null);
  const [authenticator, setAuthenticator] = useState(undefined);

  useEffect(() => {
    setAuthenticator(firebase.auth());
  }, [firebase]);

  const setSignedUser = user => {
    if (user && userProfileIsUpdated(user)) {
      setUser(user);
    } else {
      setUser(null);
    }
  };

  const updateUser = updatedUser => {
    if (userHasUpdated(updatedUser, user)) {
      setSignedUser(updatedUser);
    }
  };

  useEffect(() => {
    if (!authenticator) return;

    const unsubscribeAuth = authenticator.onAuthStateChanged(setSignedUser);
    const unsubscribeToken = authenticator.onIdTokenChanged(updateUser);

    return () => {
      unsubscribeAuth();
      unsubscribeToken();
    };
  }, [authenticator]);

  return user;
};

export default useAuthenticationState;
