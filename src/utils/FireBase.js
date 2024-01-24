// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7a5uZzqCDtnWRgDUiev24jhkneH-rhyw",
  authDomain: "netflix-605.firebaseapp.com",
  projectId: "netflix-605",
  storageBucket: "netflix-605.appspot.com",
  messagingSenderId: "678778235471",
  appId: "1:678778235471:web:e9859659734736c7f0983a",
  measurementId: "G-MTYEZEPZHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()