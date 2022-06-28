import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCLI6FfdwdCghvA7BNVI-Cq15WG4_UQ1lw",
    authDomain: "flamingo-twitter.firebaseapp.com",
    projectId: "flamingo-twitter",
    storageBucket: "flamingo-twitter.appspot.com",
    messagingSenderId: "248490515496",
    appId: "1:248490515496:web:a0caffc2fe6d2fb03b291d"
  };

//Initialize Firebase with NextJS
const app = initializeApp(firebaseConfig);  //!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage};


