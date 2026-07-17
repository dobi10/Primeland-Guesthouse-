// Import Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// Your Firebase configuration

const firebaseConfig = {

apiKey: "AIzaSyBWViwiDnD9ajQXku-O46xcyFeP25Cd_BU",

authDomain: "primeland-guesthouse.firebaseapp.com",

projectId: "primeland-guesthouse",

storageBucket: "primeland-guesthouse.firebasestorage.app",

messagingSenderId: "799159162826",

appId: "1:799159162826:web:9c6284c908fd093c65a133"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);



// Firestore database

const db = getFirestore(app);



export { db };
