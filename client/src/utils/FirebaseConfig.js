// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDpDxJ3wIgA03yufcb8y4NxsqKdI7-XhYQ",
  authDomain: "chat-app-by-arnab.firebaseapp.com",
  projectId: "chat-app-by-arnab",
  storageBucket: "chat-app-by-arnab.appspot.com",
  messagingSenderId: "42098157814",
  appId: "1:42098157814:web:fcece1ab34b9c4a3a664d7",
  measurementId: "G-07MN1WG7BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);