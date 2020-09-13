const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_PROJECT_ID
} = process.env;

const apiKey = REACT_APP_FIREBASE_API_KEY;
const appId = REACT_APP_FIREBASE_APP_ID;
const projectId = REACT_APP_FIREBASE_PROJECT_ID;

const config = {
  apiKey,
  projectId,
  appId,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com/`,
  storageBucket: `gs://${projectId}.appspot.com`
};

export default config;
