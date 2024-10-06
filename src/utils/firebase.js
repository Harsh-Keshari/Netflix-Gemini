// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.REACT_APP_Firebase_API_KEY,
  authDomain: "netflixgpt-5e11d.firebaseapp.com",
  projectId: "netflixgpt-5e11d",
  storageBucket: "netflixgpt-5e11d.appspot.com",
  messagingSenderId: "567980370599",
  appId: "1:567980370599:web:99521f4e45d4178a384982",
  measurementId: "G-J9VYEP6978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();