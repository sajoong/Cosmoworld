import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDVsJfvsVeGk-Otn7wO36BDTDVg6o01pKU",
    authDomain: "cs-system-a34f0.firebaseapp.com",
    projectId: "cs-system-a34f0",
    storageBucket: "cs-system-a34f0.firebasestorage.app",
    messagingSenderId: "75762847975",
    appId: "1:75762847975:web:7a3f321cbdb2d203019242"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
