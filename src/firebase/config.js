import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBcaD0ZLHgdZLGIJaCkhbFTZXPnN_oU7IM",
  authDomain: "fx-trader-7f986.firebaseapp.com",
  databaseURL: "https://fx-trader-7f986.firebaseio.com",
  projectId: "fx-trader-7f986",
  storageBucket: "fx-trader-7f986.appspot.com",
  messagingSenderId: "940922903999",
  appId: "1:940922903999:web:3888953ec999ad12d2150a",
  measurementId: "G-KD2LNQWKZK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//Initialize storage
const projectStorage = firebase.storage();

//To interact with Storage
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

export { projectStorage, projectAuth, projectFirestore };
