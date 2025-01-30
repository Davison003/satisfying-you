// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCP6v-IDOX8IcmQXEkYGHs6DvAvscquTo",
  authDomain: "satisfying-you-utfcp.firebaseapp.com",
  projectId: "satisfying-you-utfcp",
  storageBucket: "satisfying-you-utfcp.firebasestorage.app",
  messagingSenderId: "661927023967",
  appId: "1:661927023967:web:774736ba3a7d9ece72d2ea",
  measurementId: "G-YFL8SXQSHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
