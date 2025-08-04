import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyArx7bgUJe9gxB8PFumHr7ZNphe_oiCFRM",
  authDomain: "registar-lite.firebaseapp.com",
  projectId: "registar-lite",
  storageBucket: "registar-lite.firebasestorage.app",
  messagingSenderId: "944764888511",
  appId: "1:944764888511:web:670efe948dd87ac40aed0a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();