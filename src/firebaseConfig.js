import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#availabimport { db } from "../firebaseConfig"le-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOrYrDIgTJuXkR4AC_IC1EBmQnyH_cVcA",
  authDomain: "blog-app-f50c7.firebaseapp.com",
  projectId: "blog-app-f50c7",
  storageBucket: "blog-app-f50c7.appspot.com",
  messagingSenderId: "819618810442",
  appId: "1:819618810442:web:60a91c350030acf4d234b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)