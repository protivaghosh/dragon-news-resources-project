// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxlloXzN5NH4oPFTx44OTNNYU3p3mAkuw",
  authDomain: "dragon-news-resource-e0541.firebaseapp.com",
  projectId: "dragon-news-resource-e0541",
  storageBucket: "dragon-news-resource-e0541.firebasestorage.app",
  messagingSenderId: "721835879934",
  appId: "1:721835879934:web:2853953c92646524fea4af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);