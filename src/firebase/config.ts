// Import the functions you need from the SDKs you need



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPL9xiIDIzxquEpYmHw9Neh5NdQOontzU",
  authDomain: "react-firebase-auth-857ff.firebaseapp.com",
  projectId: "react-firebase-auth-857ff",
  storageBucket: "react-firebase-auth-857ff.appspot.com",
  messagingSenderId: "11115227716",
  appId: "1:11115227716:web:365cec3681f4ad6d6a6a11",
  measurementId: "G-TR7T3FW1YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)