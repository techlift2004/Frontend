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

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// ------------------- FIRESTORE FUNCTIONS --------------------

// Signup function
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

// Fetch all events
const fetchEvents = async () => {
    const eventsRef = collection(db, "events");
    try {
        const snapshot = await getDocs(eventsRef);
        const events = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        events.forEach(event => {
            console.log(event.id, " => ", event);
        });

        return events;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};

// Delete a single user
const deleteUserFromFirestore = async (userId) => {
    try {
        const userRef = doc(db, "users", userId);
        await deleteDoc(userRef);
        console.log("User deleted:", userId);
    } catch (error) {
        console.error("Error deleting user:", error);
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
        console.log("All users deleted");
    } catch (error) {
        console.error("Error deleting all users:", error);
    }
};

// Store event data
const storeEventData = async (eventData) => {
    console.log("Submitting event data:", eventData);

    try {
        const parsedTime = new Date(eventData.eventTime);
        console.log("Parsed eventTime:", parsedTime);

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

const checkDuplicate = async (email, phone) => {
    try {
        // Create queries using the modular SDK methods
        const emailQuery = query(collection(db, 'users'), where('email', '==', email));
        const phoneQuery = query(collection(db, 'users'), where('phone', '==', phone));
        
        // Fetch the documents matching the query
        const emailSnapshot = await getDocs(emailQuery);
        const phoneSnapshot = await getDocs(phoneQuery);
        
        if (!emailSnapshot.empty || !phoneSnapshot.empty) {
            return true; // Duplicate found
        }
        
        return false; // No duplicates
    } catch (error) {
        console.error('Error checking duplicates:', error);
        return false; // In case of error, assume no duplicates
    }
};


// -------------------- EXPORTS --------------------
export {
    db,
    auth,
    signup,
    fetchUsers,
    deleteUserFromFirestore,
    deleteAllUsersFromFirestore,
    storeEventData,
    checkDuplicate,
    fetchEvents,

};
