// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABQNJc4Dn4kbrigH6G_kuzmxNv6q2NGyU",
  authDomain: "tuition-e-9338c.firebaseapp.com",
  projectId: "tuition-e-9338c",
  storageBucket: "tuition-e-9338c.appspot.com",
  messagingSenderId: "146025607955",
  appId: "1:146025607955:web:17c79fe7f9f7f23b4160e6",
  measurementId: "G-SJBXGSBR2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;