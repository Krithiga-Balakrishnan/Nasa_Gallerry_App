// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries   

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD28m9SzSvBug-1PW7KO2fncYWUJfd2Alo",
  authDomain: "galaxy-gaze-25f0d.firebaseapp.com",
  databaseURL: "https://galaxy-gaze-25f0d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "galaxy-gaze-25f0d",
  storageBucket: "galaxy-gaze-25f0d.appspot.com",
  messagingSenderId: "633162704469",
  appId: "1:633162704469:web:a56bde1f92bf349104d6dc",
  measurementId: "G-RW57ZGHHNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, analytics, auth, database };
export default app;
