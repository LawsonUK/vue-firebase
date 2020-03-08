import firebase from "firebase";
import firestore from "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBjmW5XRssW1wwK9sw9Lxey6D4kohku1Vg",
  authDomain: "udemy-ninja-chat-c18fc.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-c18fc.firebaseio.com",
  projectId: "udemy-ninja-chat-c18fc",
  storageBucket: "udemy-ninja-chat-c18fc.appspot.com",
  messagingSenderId: "640423815706",
  appId: "1:640423815706:web:c5e275203efb6f7503ffa3",
  measurementId: "G-1E2XRF1JKC"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
