// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAklvEWlSXuN5QZm1Z__8EFq7GpNFDUdw",
  authDomain: "realtor-clone-react-cea75.firebaseapp.com",
  projectId: "realtor-clone-react-cea75",
  storageBucket: "realtor-clone-react-cea75.appspot.com",
  messagingSenderId: "999681177943",
  appId: "1:999681177943:web:3240899294ebfdcb212612",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
