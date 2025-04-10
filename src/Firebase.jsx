import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
    getFirestore,
    doc,
    deleteDoc,
    collection,
    getDocs,
    addDoc,
    query, 
    where
} from "firebase/firestore";

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
const db = getFirestore(app);
const auth = getAuth(app);

// ------------------- USER FUNCTIONS --------------------

const signup = async (name, email, number) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name,
            email,
            number
        });
        console.log("User added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding user:", error);
    }
};

const checkDuplicate = async (email, phone) => {
    try {
        const emailQuery = query(collection(db, 'users'), where('email', '==', email));
        const phoneQuery = query(collection(db, 'users'), where('phone', '==', phone));
        const emailSnapshot = await getDocs(emailQuery);
        const phoneSnapshot = await getDocs(phoneQuery);
        return !emailSnapshot.empty || !phoneSnapshot.empty;
    } catch (error) {
        console.error('Error checking duplicates:', error);
        return false;
    }
};

// ------------------- JOIN US FUNCTIONS --------------------


const checkDuplicateJoinUs = async (email, number) => {
    try {
        const emailQuery = query(collection(db, "joinUs"), where("email", "==", email));
        const phoneQuery = query(collection(db, "joinUs"), where("phone", "==", number));
        const emailSnapshot = await getDocs(emailQuery);
        const phoneSnapshot = await getDocs(phoneQuery);
        return !emailSnapshot.empty || !phoneSnapshot.empty;
    } catch (error) {
        console.error("Error checking duplicates in joinUs:", error);
        return false;
    }
};

const deleteJoinUsMember = async (joinUsId) => {
    try {
        await deleteDoc(doc(db, "joinUs", joinUsId));
        console.log("Member deleted from joinUs:", joinUsId);
    } catch (error) {
        console.error("Error deleting member from joinUs:", error);
    }
};


const signupForJoinUs = async (name, email, number, stack, gender) => {
    try {
        const docRef = await addDoc(collection(db, "joinUs"), {
            name,
            email,
            phone: number,
            stack,
            gender,
            createdAt: new Date(),
    });
        console.log("User joined:", docRef.id);
    } catch (err) {
        console.error("Signup error:", err);
        throw err;
    }
};

const fetchJoinUsData = async () => {
    try {
        const snapshot = await getDocs(collection(db, "joinUs"));
        const entries = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return entries;
    } catch (error) {
        console.error("Error fetching joinUs data:", error);
        return [];
    }
};

// ------------------- OTHER FIRESTORE FUNCTIONS --------------------

const fetchUsers = async () => {
    try {
        const snapshot = await getDocs(collection(db, "users"));
        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

const fetchEvents = async () => {
    try {
        const snapshot = await getDocs(collection(db, "events"));
        const events = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return events;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};

const deleteUserFromFirestore = async (userId) => {
    try {
        await deleteDoc(doc(db, "users", userId));
        console.log("User deleted:", userId);
    } catch (error) {
        console.error("Error deleting user:", error);
    }
};

const deleteAllUsersFromFirestore = async () => {
    try {
        const snapshot = await getDocs(collection(db, "users"));
        snapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });
        console.log("All users deleted");
    } catch (error) {
        console.error("Error deleting all users:", error);
    }
};

const storeEventData = async (eventData) => {
    try {
        const parsedTime = new Date(eventData.eventTime);
        if (isNaN(parsedTime)) {
            console.error("Invalid event date:", eventData.eventTime);
            return;
        }
        const formattedTime = parsedTime.toLocaleString("en-NG", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            timeZone: "Africa/Lagos",
            timeZoneName: "short"
        });

        const docRef = await addDoc(collection(db, "events"), {
            eventTitle: eventData.eventTitle,
            eventTime: formattedTime,
            eventPlace: eventData.eventPlace,
            eventContent: eventData.eventContent,
            eventImage: eventData.eventImage
        });

        console.log("Event stored with ID:", docRef.id);
    } catch (error) {
        console.error("Error storing event:", error);
    }
};

// -------------------- EXPORTS --------------------

export {
    db,
    auth,
    // user
    signup,
    checkDuplicate,
    fetchUsers,
    deleteUserFromFirestore,
    deleteAllUsersFromFirestore,
    // events
    storeEventData,
    fetchEvents,
    // join us
    signupForJoinUs,
    checkDuplicateJoinUs,
    fetchJoinUsData,
    deleteJoinUsMember // added delete function for joinUs
};



