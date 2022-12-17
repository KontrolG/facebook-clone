const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;

const config = {
  apiKey,
  projectId,
  appId,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com/`,
  storageBucket: `gs://${projectId}.appspot.com`
};

export default config;
