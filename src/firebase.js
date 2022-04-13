import { initializeApp } from "firebase/app";
export let firebaseApp;

const firebaseConfig = {
  apiKey: "AIzaSyBmCIL3DNBfLPOp_MgDXxrAZcXbKFygE0s",
  authDomain: "learn-c1575.firebaseapp.com",
  projectId: "learn-c1575",
  storageBucket: "learn-c1575.appspot.com",
  messagingSenderId: "116760149418",
  appId: "1:116760149418:web:8ee1fe08b284d8d9c87fd3",
};

export const initFirebase = () => {
  firebaseApp = initializeApp(firebaseConfig);
};
