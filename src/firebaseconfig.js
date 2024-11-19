// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4dRBrft8HnJUsBeDblPnqlh47UJtBdeo",
  authDomain: "fir-storage-b4867.firebaseapp.com",
  projectId: "fir-storage-b4867",
  storageBucket: "fir-storage-b4867.firebasestorage.app",
  messagingSenderId: "204588137569",
  appId: "1:204588137569:web:5564e1e837b6054cc5fe20"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);