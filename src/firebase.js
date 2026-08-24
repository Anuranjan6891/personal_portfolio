import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyA7zpOVDtq9TVamyUy9DFVv-RvVimp0JCQ",
  authDomain: "portfolio-c344b.firebaseapp.com",
  projectId: "portfolio-c344b",
  storageBucket: "portfolio-c344b.firebasestorage.app",
  messagingSenderId: "798230632130",
  appId: "1:798230632130:web:ddc02b420a47749b4a8d5b"
};

const app = initializeApp(firebaseConfig);

// Initialize and export the Firestore database
export const db = getFirestore(app); 
