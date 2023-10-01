// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxrolWBR4TUoJjKDzTYL7QjztLAuL7014",
  authDomain: "fir-part-02.firebaseapp.com",
  projectId: "fir-part-02",
  storageBucket: "fir-part-02.appspot.com",
  messagingSenderId: "395594136200",
  appId: "1:395594136200:web:3882b77c8bd5b4a023fd3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;