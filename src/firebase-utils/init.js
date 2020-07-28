import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

import { databaseURL, storageBucket } from "./keys";

const config = {
  databaseURL,
  storageBucket
};

firebase.initializeApp(config);

export const database = firebase.database();
export const { TIMESTAMP } = firebase.database.ServerValue;
export const storage = firebase.storage();
