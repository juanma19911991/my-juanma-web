import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/database";

var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB-R8eBYl9wP8NMwABck-z-4vniEIES-Og",
    authDomain: "juanmaweb-8ab9f.firebaseapp.com",
    projectId: "juanmaweb-8ab9f",
    storageBucket: "juanmaweb-8ab9f.appspot.com",
    messagingSenderId: "460495278241",
    appId: "1:460495278241:web:26bf78e8966bc80058e0e0"
  });
  
  export const getFirebase = () =>{
      return firebaseConfig
  }

// funciones de firebase
  export const getFirestore = () =>{
      return firebase.firestore(firebaseConfig);
  }