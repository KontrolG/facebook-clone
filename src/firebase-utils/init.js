import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

import config from "./config";

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
export const { TIMESTAMP } = firebase.database.ServerValue;
export const storage = firebase.storage();
