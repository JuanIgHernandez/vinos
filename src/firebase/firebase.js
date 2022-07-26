// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, GetFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYf48ta1D_J7mzcTpWtEtZGgG-6Z1gu08",
  authDomain: "clothes-store-city.firebaseapp.com",
  projectId: "clothes-store-city",
  storageBucket: "clothes-store-city.appspot.com",
  messagingSenderId: "139805891556",
  appId: "1:139805891556:web:92e0214ab629eb067185f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)