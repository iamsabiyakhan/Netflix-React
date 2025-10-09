// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQvwJZn0HigYj-fJL1Z8ZT4Eo6r7kuiJY",
  authDomain: "netflix-gpt-cb405.firebaseapp.com",
  projectId: "netflix-gpt-cb405",
  storageBucket: "netflix-gpt-cb405.firebasestorage.app",
  messagingSenderId: "1067327506859",
  appId: "1:1067327506859:web:f11ae431980e0eb4ecaaee",
  measurementId: "G-2R1GNFLZ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();