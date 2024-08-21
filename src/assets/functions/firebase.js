import firebase from "firebase/app"
import "firebase/auth"

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

const firebaseConfig = {
    apiKey: "AIzaSyCZGZzackK40jsOIds-3hI-UotagD6nSxk",
    authDomain: "sellkon.firebaseapp.com",
    projectId: "sellkon",
    storageBucket: "sellkon.appspot.com",
    messagingSenderId: "644355177912",
    appId: "1:644355177912:web:bbf388bcc8a0901e2f634d",
    measurementId: "G-599M9R2RD9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

