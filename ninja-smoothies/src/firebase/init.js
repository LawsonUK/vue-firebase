import firebase from "firebase";
import firestore from "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAbB3aw_nc--WlWsePbI4jsGQ_lMqVGTWE",
  authDomain: "udemy-ninja-smoothies-8dc97.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-8dc97.firebaseio.com",
  projectId: "udemy-ninja-smoothies-8dc97",
  storageBucket: "udemy-ninja-smoothies-8dc97.appspot.com",
  messagingSenderId: "664036393251",
  appId: "1:664036393251:web:0f5b0d50aefe37a2d90c96",
  measurementId: "G-QD7N4MSFKT"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
