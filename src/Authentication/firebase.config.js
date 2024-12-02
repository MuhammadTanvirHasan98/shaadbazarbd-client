import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-T-HolV1TCbxNz0l-LNR70WQrGl4LsnA",
  authDomain: "shaadbazar-bd.firebaseapp.com",
  projectId: "shaadbazar-bd",
  storageBucket: "shaadbazar-bd.firebasestorage.app",
  messagingSenderId: "458087512495",
  appId: "1:458087512495:web:884f2399ee7f89be88175a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);