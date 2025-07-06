import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXsfJU-_YrJssJdArVd4jFh3luynJho38",
  authDomain: "affiliate-63f05.firebaseapp.com",
  projectId: "affiliate-63f05",
  storageBucket: "affiliate-63f05.firebasestorage.app",
  messagingSenderId: "612532336953",
  appId: "1:612532336953:web:172c3fc098631e4a4e10e8",
  measurementId: "G-4HLX73RZN6"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
