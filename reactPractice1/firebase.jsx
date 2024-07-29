// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection}  from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCQDvkRdCtDNUHveVNW6S6mDBh9SaNtmsA",
  authDomain: "note-ac0d3.firebaseapp.com",
  projectId: "note-ac0d3",
  storageBucket: "note-ac0d3.appspot.com",
  messagingSenderId: "142168020178",
  appId: "1:142168020178:web:3583f2c3f54253550bc90b",
  measurementId: "G-W52PTG6RP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

// const analytics = getAnalytics(app);