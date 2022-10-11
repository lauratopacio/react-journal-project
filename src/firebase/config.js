// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqSxr2GKZH7VYY9FyZRnxFeVMPfFBpb10",
  authDomain: "react-curso-49719.firebaseapp.com",
  projectId: "react-curso-49719",
  storageBucket: "react-curso-49719.appspot.com",
  messagingSenderId: "1097753570892",
  appId: "1:1097753570892:web:10fac3e92d52053eddcee9",
  measurementId: "G-TMX036S8XN"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB= getFirestore(FirebaseApp);