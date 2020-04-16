import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1KO08MpAJ_OCmHo_ejvKzQNf9t3gILUY",
    authDomain: "game-of-live.firebaseapp.com",
    databaseURL: "https://game-of-live.firebaseio.com",
    projectId: "game-of-live",
    storageBucket: "game-of-live.appspot.com",
    messagingSenderId: "699517005250",
    appId: "1:699517005250:web:3b46ffe3864d3c1a727a5b",
    measurementId: "G-JE2DXPX5NH"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };