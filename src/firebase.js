import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "yourApiKey",
  authDomain: "instagram-reels-8c093.firebaseapp.com",
  projectId: "instagram-reels-8c093",
  storageBucket: "instagram-reels-8c093.appspot.com",
  messagingSenderId: "782229090345",
  appId: "1:782229090345:web:7262b487a6de6d8d70ac38",
  measurementId: "G-H4CGJNCZ9N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
