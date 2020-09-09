import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

import { projectId, apiKey, appId } from "./keys";

const config = {
  apiKey,
  projectId,
  appId,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com/`,
  storageBucket: `gs://${projectId}.appspot.com`
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
export const { TIMESTAMP } = firebase.database.ServerValue;
export const storage = firebase.storage();
