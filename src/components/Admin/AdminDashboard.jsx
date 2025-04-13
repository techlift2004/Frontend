import React, { useState, useEffect } from 'react';
import { MdGroups, MdEvent, MdPersonOutline } from 'react-icons/md';
import { useGlobalContext } from './AdminController'
import { fetchUsers, fetchEvents, deleteUserFromFirestore, deleteAllUsersFromFirestore, fetchJoinUsData } from '../../Firebase';

const AdminDashboard = ({ padd }) => {
    const { openDashboard } = useGlobalContext();
    const [users, setUsers] = useState([]);
    const [joinUsData, setJoinUsData] = useState([]);
    const [events, setEvents] = useState([]); // State for events
    const [showModal, setShowModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    // Fetch users and events on component mount
    useEffect(() => {
        const getUsers = async () => {
            const usersData = await fetchUsers();
            setUsers(usersData);
        };

        const getEvents = async () => {
            const eventsData = await fetchEvents();
            setEvents(eventsData); // Set events in state
        };

        const getJoinUsData = async () => {
            const data = await fetchJoinUsData(); // Assuming this function fetches joinUs data
            setJoinUsData(data);
        }

        getUsers();
        getJoinUsData(); // Fetch joinUs data as well
        getEvents(); // Fetch events as well
    }, [events, users]);

    const handleDeleteUser = (userId) => {
        setUserToDelete(userId);
        setShowModal(true);
    };

    const handleDeleteAllUsers = () => {
        setShowModal(true);
        setUserToDelete('all');
    };

    const confirmDelete = async () => {
        if (userToDelete === 'all') {
            await deleteAllUsersFromFirestore();
            setUsers([]);
        } else {
            await deleteUserFromFirestore(userToDelete);
            setUsers(users.filter(user => user.id !== userToDelete));
        }
        setShowModal(false);
    };

    const cancelDelete = () => {
        setShowModal(false);
        setUserToDelete(null);
    };

    return (
        openDashboard && <div className={`pt-[6rem] pr-[1rem] ${padd ? 'md:pl-[17rem]' : 'pl-[2rem]'}`}>
            <h1 className='text-[36px] font-bold mb-4'>Dashboard Overview</h1>
            <div className='block w-full mx-auto lg:flex flex-wrap gap-4'>
                <div className='shadow-lg rounded-[8px] p-4 bg-white w-full lg:w-[30%] mb-5'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='bg-[rgba(75,0,130,0.15)] rounded p-2'>
                            <MdGroups size={24} className='text-[#4B0082]' />
                        </div>
                        <p className='text-3xl font-bold text-right'>{users.length}</p>
                    </div>
                    <p className='text-gray-700 font-medium'>Total Registrations</p>
                </div>
                <div className='shadow-lg rounded-[8px] p-4 bg-white w-full lg:w-[30%] mb-5'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='bg-[rgba(75,0,130,0.15)] rounded p-2'>
                            <MdPersonOutline size={24} className='text-[#4B0082]' />
                        </div>
                        <p className='text-3xl font-bold text-right'>{joinUsData.length}</p>
                    </div>
                    <p className='text-gray-700 font-medium'>Total Members</p>
                </div>
                <div className='shadow-lg rounded-[8px] p-4 bg-white w-full lg:w-[30%] mb-5'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='bg-[rgba(75,0,130,0.15)] rounded p-2'>
                            <MdEvent size={24} className='text-[#4B0082]' />
                        </div>
                        <p className='text-3xl font-bold text-right'>{events.length}</p>
                    </div>
                    <p className='text-gray-700 font-medium'>Total Events</p>
                </div>
            </div>

            <div className='shadow-lg rounded-[8px] my-10'>
                <div className='flex justify-between items-center p-4 rounded-t-[8px]'>
                    <h2 className='text-[24px] font-bold mb-4'>Recent Registrations</h2>
                </div>
                {users.length > 0 && (
                        <div className='flex justify-end md:p-4'>
                            <button
                                onClick={handleDeleteAllUsers}
                                className="bg-red-500 text-white py-2 px-4 rounded-[8px] mr-5"
                            >
                                Delete All Users
                            </button>
                        </div>
                )}
                <div className='py-10'>
                    <div className='grid grid-cols-3 lg:grid-cols-4 place-items-center w-full gap-4 p-4 bg-white rounded-b-[8px]'>
                        <p>Name</p>
                        <p className='hidden lg:block'>Email</p>
                        <p>Number</p>
                        <p>Actions</p>
                    </div>

                    <div className='px-10'>
                        <hr className='border-[rgba(75,0,130,0.15)] border-[1px]' />  
                    </div>


                    {users.length > 0 ? (
                        users.slice(0, 3).map((user) => (
                            <div key={user.id} className='grid grid-cols-3 lg:grid-cols-4 place-items-center w-full gap-4 mt-4 p-4 bg-white rounded-b-[8px]'>
                                <p>{user.name}</p>
                                <p className='hidden lg:block'>{user.email}</p>
                                <p>{user.number}</p>
                                <button
                                    onClick={() => handleDeleteUser(user.id)}
                                    className="hover:text-[#FFFFFF] border-2 border-[rgb(75,0,130)] text-[rgb(75,0,130)] h-[44px] w-[95px] md:w-[128px] text-[16px] font-normal hover:bg-[rgb(75,0,130)] rounded-[8px] cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className='p-4 text-gray-600 italic text-center'>
                            <p>No users found</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Confirmation Modal */}
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.85)]'>
                    <div className='bg-white p-6 rounded-[8px] w-1/3'>
                        <h3 className='text-[18px] font-bold mb-4'>Are you sure you want to delete this user?</h3>
                        <div className='flex justify-between'>
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
    );
};

export default AdminDashboard;
