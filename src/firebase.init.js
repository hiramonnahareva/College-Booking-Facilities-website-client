import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    
    apiKey: "AIzaSyC95pxN6e0F0bFGhoDqvQPoGUSmJGEWUHU",
  authDomain: "college-booking-faciliti-670bd.firebaseapp.com",
  projectId: "college-booking-faciliti-670bd",
  storageBucket: "college-booking-faciliti-670bd.appspot.com",
  messagingSenderId: "712049680695",
  appId: "1:712049680695:web:6683f9a1789add26f6fab2"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;