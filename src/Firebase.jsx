import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn8hpwmOotj3mkOPvOEql0JNZjmzu3mQM",
    authDomain: "techlift-b65b1.firebaseapp.com",
    projectId: "techlift-b65b1",
    storageBucket: "techlift-b65b1.firebasestorage.app",
    messagingSenderId: "1092700057609",
    appId: "1:1092700057609:web:0f61bc7d6d1274252cc8d8"
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Signup function
const signup = async (name, email, number) => {
    try {
        const docRef = await addDoc(collection(firestore, "users"), {
            name,
            email,
            number
        });
        console.log("Document written with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};


export{auth, signup}