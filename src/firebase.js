import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDiwyWm_JTvdHnHw8vjBF_C7tgxmQ-XnKk",
  authDomain: "chat-cc1b9.firebaseapp.com",
  projectId: "chat-cc1b9",
  storageBucket: "chat-cc1b9.appspot.com",
  messagingSenderId: "463875252670",
  appId: "1:463875252670:web:71363709e69488daa959ef"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);