// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";         
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_REACT_APIKEY ,
  authDomain: process.env.FIREBASE_REACT_AUTHDOMAIN,
  projectId: process.env.FIREBASE_REACT_PROJECTID,
  storageBucket: process.env.FIREBASE_REACT_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_REACT_MESSAGINGSENDERID ,
  appId: process.env.FIREBASE_REACT_APPID,
  measurementId: process.env.FIREBASE_REACT_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);