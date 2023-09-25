// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi9-vQFkU69_BtRiHv328j2EUiB3S2WMU",

  authDomain: "abogados-bac85.firebaseapp.com",

  databaseURL: "https://abogados-bac85-default-rtdb.firebaseio.com",

  projectId: "abogados-bac85",

  storageBucket: "abogados-bac85.appspot.com",

  messagingSenderId: "138704159954",

  appId: "1:138704159954:web:7543936a876670abe1590b",

  measurementId: "G-558281KS28"



};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };