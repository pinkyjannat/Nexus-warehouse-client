// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg4JqEnFEo9Rr2LwRjEJG8YqBE4wFz8nw",
  authDomain: "nexus-f0563.firebaseapp.com",
  projectId: "nexus-f0563",
  storageBucket: "nexus-f0563.appspot.com",
  messagingSenderId: "555356142133",
  appId: "1:555356142133:web:475d15eb9a741ad2e80f7c"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;