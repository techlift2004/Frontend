import React, { useState } from 'react';
import { storeEventData } from '../../Firebase'; // Import the store function
import { useGlobalContext } from './AdminController';
import AdminDisplayEvents from './AdminDisplayEvents';

const AdminEvents = ({ padd }) => {
    const { openEvents } = useGlobalContext();

    // State for event form data
    const [eventData, setEventData] = useState({
        eventTitle: '',
        eventTime: '',
        eventPlace: '',
        eventContent: '',
        eventImage: null // New state for the image
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value
        });
    };

    // Handle image file input change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEventData({
                ...eventData,
                eventImage: file // Store the image file in the state
            });
        }
    };

    // Function to upload image to Cloudinary
    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'techlift-events'); // Replace with your upload preset
        formData.append('cloud_name', 'dlqku07wx'); // Replace with your Cloudinary cloud name

        const response = await fetch(`https://api.cloudinary.com/v1_1/${'dlqku07wx'}/image/upload`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        return data.secure_url; // Return the image URL
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = '';
        if (eventData.eventImage) {
            imageUrl = await uploadImage(eventData.eventImage); // Upload image and get the URL
        }

        const newEventData = {
            ...eventData,
            eventImage: imageUrl, // Add image URL to event data
        };

        // Call the function to store the data in Firebase
        storeEventData(newEventData);

        // Reset form data after submission
        setEventData({
            eventTitle: '',
            eventTime: '',
            eventPlace: '',
            eventContent: '',
            eventImage: null,
        });
    };

    return (
        openEvents && (
            <div className={`pt-[6rem] pr-[1rem] ${padd ? 'pl-[17rem]' : 'pl-[5rem]'}`}>
                <h1 className='text-[36px] font-bold mb-8'>Admin Events</h1>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="eventTitle" className="block">Event Title</label>
                        <input
                            type="text"
                            id="eventTitle"
                            name="eventTitle"
                            value={eventData.eventTitle}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded border border-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="eventTime" className="block">Event Time</label>
                        <input
                            type="datetime-local"
                            id="eventTime"
                            name="eventTime"
                            value={eventData.eventTime}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded border border-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="eventPlace" className="block">Event Place</label>
                        <input
                            type="text"
                            id="eventPlace"
                            name="eventPlace"
                            value={eventData.eventPlace}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded border border-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="eventContent" className="block">Event Content</label>
                        <textarea
                            id="eventContent"
                            name="eventContent"
                            value={eventData.eventContent}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded border border-2"
                            rows="4"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="eventImage" className="block">Event Image</label>
                        <input
                            type="file"
                            id="eventImage"
                            name="eventImage"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 rounded border border-2"
                            accept="image/*"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#4B0082] text-white px-6 py-2 rounded mt-4"
                    >
                        Save Event
                    </button>
                </form>
                <AdminDisplayEvents /> {/* Display events below the form */}
            </div>
        )
    );
};

export default AdminEvents;
