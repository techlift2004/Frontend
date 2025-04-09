import React, { useState, useEffect } from 'react'
import { db } from '../../Firebase'; // Ensure Firebase instance is imported
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import Modal from './Modal'

const AllEvents = () => {
    const[modall, setModall] = useState(false)
    const [events, setEvents] = useState([]);
    
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
        }, [events]);

    return (
        <div>
            <div className='bg-[#4B0082]  pt-36'>
                <h1 className='text-center pb-28 text-4xl text-white font-extrabold font-poppins'>Tech Events</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-28 items-start justify-between  p-10 md:p-10 lg:p-10 mt-18 mb-28'>
                {
                    events.map((item, index) => {
                        return (
                            <div key={index} className={`text-center rounded-[15px] bg-[#4B0082] rounded`}>
                                <img src={item.eventImage} alt="event" className='w-full ' />
                                <h1 className='my-5 font-extrabold text-xl text-white font-poppins '>{item.eventTitle}</h1>
                                <p className='text-white font-montserrat px-3'>
                                    {item.eventContent.length > 101
                                        ? `${item.eventContent.slice(0, 101)} ...`
                                        : item.eventContent}
                                </p>
                                <p className='text text-white font-montserrat px-3'>Venue: {item.eventPlace}</p>
                                <p className='text text-white font-montserrat px-3'>Date & Time: {item.eventTime}</p>
                                <button className='text my-5 border-2 font-montserrat rounded p-2 px-5 text-white border-white hover:bg-white hover:text-[#4B0082]' onClick={()=>setModall(true)}>Register</button>
                            </div>
                        )
                    })
                }
            </div>
            <Modal modall={modall} setModall={setModall}/>
        </div>
    )
}

export default AllEvents
