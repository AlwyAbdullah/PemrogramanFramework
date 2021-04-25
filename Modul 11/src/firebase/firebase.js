import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABUUGxOLAtlgLhN_oqpZfnAZJiw-b_-Vw",
    authDomain: "fir-login-app-c4d2b.firebaseapp.com",
    projectId: "fir-login-app-c4d2b",
    storageBucket: "fir-login-app-c4d2b.appspot.com",
    messagingSenderId: "826993200272",
    appId: "1:826993200272:web:d5f4ea5249db279880dc15",
    measurementId: "G-CVDY28928D"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;