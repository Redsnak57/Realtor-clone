// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIgxkbWxDW4kWLNq03LC_PnMwqNmHU45Y",
  authDomain: "realtor-udemy-3b2f2.firebaseapp.com",
  projectId: "realtor-udemy-3b2f2",
  storageBucket: "realtor-udemy-3b2f2.appspot.com",
  messagingSenderId: "138300237285",
  appId: "1:138300237285:web:be09cf4b8a18ac5fbdbb0c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();