import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "onecartlogin-66472.firebaseapp.com",
  projectId: "onecartlogin-66472",
  storageBucket: "onecartlogin-66472.firebasestorage.app",
  messagingSenderId: "563579968394",
  appId: "1:563579968394:web:2f4a2200264509a2828673"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

