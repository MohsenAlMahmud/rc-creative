// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmFy6901frxyTxwkMDHiyS8j9FsGhS7JM",
  authDomain: "rc-creative.firebaseapp.com",
  projectId: "rc-creative",
  storageBucket: "rc-creative.appspot.com",
  messagingSenderId: "311905228086",
  appId: "1:311905228086:web:d52ef7310bb57be4e3cf97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;