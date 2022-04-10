// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAroiTM8ZKjf6rMRZrAkrcO1cj_llBjVOw",
  authDomain: "wordai-fa08c.firebaseapp.com",
  projectId: "wordai-fa08c",
  storageBucket: "wordai-fa08c.appspot.com",
  messagingSenderId: "687833753790",
  appId: "1:687833753790:web:c9a4594e50cb9828d596ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);