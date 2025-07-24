import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // <-- додай цей імпорт

const firebaseConfig = {
    apiKey: "AIzaSyABKdo74S0JdcZOko2c2G2z7RO5no-dM5g",
    authDomain: "photographsite.firebaseapp.com",
    projectId: "photographsite",
    storageBucket: "photographsite.appspot.com",  // <-- виправлено
    messagingSenderId: "320422708593",
    appId: "1:320422708593:web:1be978a4baecdf9f3422d0",
    measurementId: "G-9GK3MFRD7K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);  // <-- експортуємо auth
