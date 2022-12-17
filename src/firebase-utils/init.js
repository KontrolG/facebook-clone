import firebase from "firebase/app";
import config from "./config";

if (firebase.apps.length <= 0) {
  firebase.initializeApp(config);
}


export default firebase;
