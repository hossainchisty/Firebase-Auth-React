import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlwuRWNqJv5GpXWLjr4oX_kEp2tlpD-Mo",
  authDomain: "fir-auth112.firebaseapp.com",
  projectId: "fir-auth112",
  storageBucket: "fir-auth112.appspot.com",
  messagingSenderId: "142980732217",
  appId: "1:142980732217:web:2b4944c4018d0d07be04e8",
  measurementId: "G-9C1L4D54D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

