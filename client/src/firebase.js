// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "getsetexplore-c1d4d.firebaseapp.com",
  projectId: "getsetexplore-c1d4d",
  storageBucket: "getsetexplore-c1d4d.appspot.com",
  messagingSenderId: "637902620674",
  appId: "1:637902620674:web:869a6656b9d95b1279ff1b",
  measurementId: "G-8QQK6Q229J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);