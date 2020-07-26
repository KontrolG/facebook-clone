import * as firebase from "firebase/app";
import "firebase/database";

const config = {
  databaseURL: "https://fb-post-creator.firebaseio.com/"
};

firebase.initializeApp(config);

console.log(firebase.database().app.database.ServerValue);
export const database = firebase.database();
export const { TIMESTAMP } = firebase.database.ServerValue;
