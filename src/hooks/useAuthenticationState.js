import { useState, useEffect } from "react";

const useAuthenticationState = firebase => {
  const [user, setUser] = useState(null);
  const [authenticator, setAuthenticator] = useState(undefined);

  useEffect(() => {
    setAuthenticator(firebase.auth());
  }, [firebase]);

  const setSignedUser = user => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    if (!authenticator) return;

    const unsubscribe = authenticator.onAuthStateChanged(setSignedUser);

    return unsubscribe;
  }, [authenticator]);

  return user;
};

export default useAuthenticationState;
