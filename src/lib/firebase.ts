import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDgwY1sSG7zOtd5tuwoPfE2SsbwJ3sQl4g",
  authDomain: "flavours-f0104.firebaseapp.com",
  projectId: "flavours-f0104",
  storageBucket: "flavours-f0104.firebasestorage.app",
  messagingSenderId: "78312241049",
  appId: "1:78312241049:web:ed50deb3e2f3799f854508",
  measurementId: "G-R1J6Q2EP8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
