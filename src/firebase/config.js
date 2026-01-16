// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSIn8iSEquSUCf8HIM_ajLY2thtaeTCic",
  authDomain: "mini-blog-9c13b.firebaseapp.com",
  projectId: "mini-blog-9c13b",
  storageBucket: "mini-blog-9c13b.firebasestorage.app",
  messagingSenderId: "944859607374",
  appId: "1:944859607374:web:e957dff1d54f96ef282e1f",
  measurementId: "G-PBXZ34VJZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
