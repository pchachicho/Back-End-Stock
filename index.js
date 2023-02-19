// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjhI_PqhjWprcmA0eI46_sd12mDYuj_Xo",
  authDomain: "stocktradingapp-65dbe.firebaseapp.com",
  projectId: "stocktradingapp-65dbe",
  storageBucket: "stocktradingapp-65dbe.appspot.com",
  messagingSenderId: "404695737169",
  appId: "1:404695737169:web:bbf5ff1c941a7d2dab2970",
  measurementId: "G-N1VX6ZKSY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);