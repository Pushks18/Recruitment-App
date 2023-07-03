// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7oOrgeBRlp6Sm2kgf7Yixyv1Mt1LHfcI",
  authDomain: "recruitment-app-b7908.firebaseapp.com",
  projectId: "recruitment-app-b7908",
  storageBucket: "recruitment-app-b7908.appspot.com",
  messagingSenderId: "87311862760",
  appId: "1:87311862760:web:66123925f5a44191bab25d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
