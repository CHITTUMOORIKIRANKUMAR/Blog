// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-d57f0.firebaseapp.com",
  projectId: "blog-d57f0",
  storageBucket: "blog-d57f0.appspot.com",
  messagingSenderId: "172462175395",
  appId: "1:172462175395:web:f1156dcc15e5827b107b16"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

