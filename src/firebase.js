// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTlt9nbsCYNryanBrA72aaN36mGG5q3iQ",
  authDomain: "realtor-clone-react-20158.firebaseapp.com",
  projectId: "realtor-clone-react-20158",
  storageBucket: "realtor-clone-react-20158.appspot.com",
  messagingSenderId: "881018563162",
  appId: "1:881018563162:web:18dfabdb59714fd96b4663",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
