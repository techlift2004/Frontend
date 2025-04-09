import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase'; // Make sure you're importing your Firebase instance correctly
import { collection, getDocs } from 'firebase/firestore'; // Correct imports for Firebase v9+
import { useGlobalContext } from './AdminController';

const AdminDisplayEvents = () => {
    const { openEvents } = useGlobalContext();
    const [events, setEvents] = useState([]);

    // Fetch events from Firebase on component mount
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Use collection(db, 'events') for Firestore v9+
                const eventsRef = collection(db, 'events');
                const snapshot = await getDocs(eventsRef);
                const eventsList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setEvents(eventsList); // Store events in state
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []); // Empty dependency array means this will run only once when the component mounts

    return (
        openEvents && (
            <div className="pt-[6rem] pr-[1rem]">
                <h1>All Events</h1>
                <div className="mt-4">
                    {events.map(event => (
                        <div key={event.id} className="mb-6 border p-4 rounded-lg">
                            <h2 className="text-2xl font-bold">{event.eventTitle}</h2>
                            <p className="text-sm text-gray-600">{event.eventTime}</p>
                            <p className="mt-2">{event.eventContent}</p>
                            {event.eventImage && (
                                <div className="mt-4">
                                    <img
                                        src={event.eventImage}
                                        alt={event.eventTitle}
                                        className="w-full h-auto rounded"
                                    />
                                </div>
                            )}
                            <p className="mt-2">Place: {event.eventPlace}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default AdminDisplayEvents;
