// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDKKI2B8CQgqT_y9yLRYbe8jy20XrrOFJQ",
    authDomain: "social-media-70a79.firebaseapp.com",
    databaseURL: "https://social-media-70a79.firebaseio.com",
    projectId: "social-media-70a79",
    storageBucket: "social-media-70a79.appspot.com",
    messagingSenderId: "486700651240",
    appId: "1:486700651240:web:71695852621f3384122f5d",
    measurementId: "G-472N9PWRVZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
