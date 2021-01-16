import firebase from "firebase/app"
import 'firebase/firestore'

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA8MOdHOt94hW1ObYRrgORksXRf8o97oFY",
  authDomain: "yuto-portfolio.firebaseapp.com",
  databaseURL: "https://yuto-portfolio-default-rtdb.firebaseio.com",
  projectId: "yuto-portfolio",
  storageBucket: "yuto-portfolio.appspot.com",
  messagingSenderId: "662367270487",
  appId: "1:662367270487:web:5304237bb4bb902c949512",
  measurementId: "G-Q4BWJRFV5Q"
})

var db = firebaseApp.firestore();

export {db};

