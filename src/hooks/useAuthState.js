import { useState, useEffect } from "react";

const useAuthState = firebase => {
  // proveedor de authenticacion, firebase.auth()
  const [user, setUser] = useState(null);
  const [authenticator, setAuthenticator] = useState(undefined);
  // state = {user, loading, error}, utiliza reducer para modificar el objeto.

  // efecto con firebase como dependencia para definir auth a firebase.auth
  useEffect(() => {
    setAuthenticator(firebase.auth());
  }, [firebase]);

  // si cambia auth y es diferente a undefined, llamar a onAuthStateChange para recolectar la funcion para desuscripbirse
  useEffect(() => {
    if (!authenticator) return;

    const unsubscribe = authenticator.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        // User is signed in.
        // SE CAMBIA EL ESTADO DEL USUARIO
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });

    return unsubscribe;
  }, [authenticator]);
  // recibe 2 callback, succes y error
  // estas modifican el state

  // retorna {user, loading, error}

  return [user];
};

export default useAuthState;
