import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase'; // Ensure Firebase instance is imported
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'; // Correct imports for Firebase v9+
import { useGlobalContext } from './AdminController';

const AdminDisplayEvents = () => {
    const { openEvents } = useGlobalContext();
    const [events, setEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);

    // Fetch events from Firebase on component mount
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsRef = collection(db, 'events');
                const snapshot = await getDocs(eventsRef);
                const eventsList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setEvents(eventsList);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, [events]); // Empty dependency array to fetch data once when component mounts

    // Delete a specific event
    const deleteEvent = (eventId) => {
        setEventToDelete(eventId);
        setShowModal(true); // Show the confirmation modal
    };

    // Confirm delete action
    const confirmDelete = async () => {
        if (eventToDelete) {
            try {
                const eventRef = doc(db, 'events', eventToDelete);
                await deleteDoc(eventRef);
                setEvents(events.filter(event => event.id !== eventToDelete)); // Remove deleted event from state
                console.log("Event deleted:", eventToDelete);
            } catch (error) {
                console.error("Error deleting event:", error);
            } finally {
                setShowModal(false); // Close the modal
            }
        }
    };

    // Cancel delete action
    const cancelDelete = () => {
        setShowModal(false); // Close the modal without deleting
    };

    // Filter events based on search query
    const filteredEvents = events.filter(event => 
        event.eventTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        openEvents && (
            <div className="pt-[6rem] pr-[1rem]">
                <h1 className="text-[36px] font-bold mb-8">All Events</h1>
                <div className="mb-12">
                    <input
                        type="text"
                        placeholder="Search events"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 rounded border border-2"
                    />
                </div>

                {/* Displaying Events */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(event => (
                            <div key={event.id} className="mb-6 border p-4 rounded-lg h-[fit-content]">
                                <h2 className="text-2xl font-bold">{event.eventTitle}</h2>
                                <p className="text-sm text-gray-600">{event.eventTime}</p>
                                <p className="mt-2">
                                    {event.eventContent.length > 101
                                        ? `${event.eventContent.slice(0, 101)} ...`
                                        : event.eventContent}
                                </p>
                                {event.eventImage && (
                                    <div className="mt-4">
                                        <img
                                            src={event.eventImage}
                                            alt={event.eventTitle}
                                            className="w-full h-auto rounded object-cover"
                                        />
                                    </div>
                                )}
                                <p className="mt-2">Venue: {event.eventPlace}</p>
                                <div className="my-4">
                                    <button
                                        onClick={() => deleteEvent(event.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded w-full"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-gray-600 text-center flex italic">
                            <p>No events found</p>
                        </div>
                    )}
                </div>

                {/* Delete Confirmation Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.85)] bg-opacity-50">
                        <div className="bg-white p-6 rounded-[8px] w-1/3">
                            <h3 className="text-[18px] font-bold mb-4">
                                Are you sure you want to delete this event?
                            </h3>
                            <div className="flex justify-between">
                                <button
                                    onClick={cancelDelete}
                                    className="bg-gray-500 text-white py-2 px-4 rounded-[8px] mr-4"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="bg-red-500 text-white py-2 px-4 rounded-[8px]"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default AdminDisplayEvents;
