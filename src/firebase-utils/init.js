import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const config = {
  databaseURL: "https://fb-post-creator.firebaseio.com/",
  storageBucket: "gs://fb-post-creator.appspot.com"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const { TIMESTAMP } = firebase.database.ServerValue;
export const storage = firebase.storage();
