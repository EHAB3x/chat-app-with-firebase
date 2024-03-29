import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFkB-V6G-N9bU9YA_1UA_iYqqKP1YvYPs",
  authDomain: "chat-42b9b.firebaseapp.com",
  projectId: "chat-42b9b",
  storageBucket: "chat-42b9b.appspot.com",
  messagingSenderId: "287808422799",
  appId: "1:287808422799:web:3e250cfd8f209be84201fa"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);