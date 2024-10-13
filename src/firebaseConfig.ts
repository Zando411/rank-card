import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArnzwmGK452NcJRrk80ZBGCLeLXH2xs1k",
  authDomain: "gamer-cards.firebaseapp.com",
  projectId: "gamer-cards",
  storageBucket: "gamer-cards.appspot.com",
  messagingSenderId: "347491581164",
  appId: "1:347491581164:web:347e2b57cfb664fdb939c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
