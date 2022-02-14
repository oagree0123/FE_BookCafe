// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0_NAi3YT5ll5uN8VAnYJ3JkNg-7NWrQY",
  authDomain: "bookcafe-stora.firebaseapp.com",
  projectId: "bookcafe-stora",
  storageBucket: "bookcafe-stora.appspot.com",
  messagingSenderId: "861890034810",
  appId: "1:861890034810:web:0da2800120873b70f74fc3",
  measurementId: "G-64G8BB9LE1"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const storage = getStorage();

export { apiKey, storage };