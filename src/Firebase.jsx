import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, deleteDoc, collection, getDocs, addDoc } from "firebase/firestore";

// Firebase config for users app
const firebaseConfig = {
    apiKey: "AIzaSyAn8hpwmOotj3mkOPvOEql0JNZjmzu3mQM",
    authDomain: "techlift-b65b1.firebaseapp.com",
    projectId: "techlift-b65b1",
    storageBucket: "techlift-b65b1.firebasestorage.app",
    messagingSenderId: "1092700057609",
    appId: "1:1092700057609:web:0f61bc7d6d1274252cc8d8"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Functions to interact with Firestore

// Signup function
const signup = async (name, email, number) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name,
            email,
            number
        });
        console.log("Document written with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

// Fetch all users
const fetchUsers = async () => {
    const usersRef = collection(db, "users");
    try {
        const snapshot = await getDocs(usersRef);
        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        users.forEach(user => {
            console.log(user.id, " => ", user);
        });

        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

// Delete a single user
const deleteUserFromFirestore = async (userId) => {
    try {
        const userRef = doc(db, "users", userId);
        await deleteDoc(userRef);
    } catch (error) {
        console.error("Error deleting user from Firestore:", error);
    }
};

// Delete all users
const deleteAllUsersFromFirestore = async () => {
    try {
        const usersRef = collection(db, "users");
        const snapshot = await getDocs(usersRef);
        snapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });
    } catch (error) {
        console.error("Error deleting all users from Firestore:", error);
    }
};

// Store event data
const storeEventData = async (eventData) => {
    console.log("Submitting event data:", eventData);

    try {
        const eventTime = new Date(eventData.eventTime);
        console.log("Parsed eventTime:", eventTime);

        if (isNaN(eventTime)) {
            console.error("Invalid date:", eventData.eventTime);
            return;
        }

        const docRef = await addDoc(collection(db, "events"), {
            eventTitle: eventData.eventTitle,
            eventTime: eventTime.toISOString(),
            eventPlace: eventData.eventPlace,
            eventContent: eventData.eventContent,
            eventImage: eventData.eventImage,
        });

        console.log("Successfully stored with ID:", docRef.id);
    } catch (error) {
        console.error("Failed to store event:", error);
    }
};

export { db, auth, signup, fetchUsers, deleteUserFromFirestore, deleteAllUsersFromFirestore, storeEventData };
