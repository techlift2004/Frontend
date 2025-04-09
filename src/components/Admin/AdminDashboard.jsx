import React, { useState, useEffect } from 'react';
import { MdGroups, MdEvent } from 'react-icons/md';
import { useGlobalContext } from './AdminController'
import { fetchUsers, deleteUserFromFirestore, deleteAllUsersFromFirestore } from '../../Firebase';

const AdminDashboard = ({ padd }) => {
    const {openDashboard } = useGlobalContext()
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false); // State for the delete confirmation modal
    const [userToDelete, setUserToDelete] = useState(null); // State to hold the user ID to be deleted

    useEffect(() => {
        const getUsers = async () => {
            const usersData = await fetchUsers();
            setUsers(usersData);
        };
        getUsers();
    }, [users]);

    const handleDeleteUser = (userId) => {
        setUserToDelete(userId); // Store the user ID to be deleted
        setShowModal(true); // Show the confirmation modal
    };

    const handleDeleteAllUsers = () => {
        setShowModal(true); // Show the confirmation modal for deleting all users
        setUserToDelete('all'); // Use 'all' to indicate deleting all users
    };

    const confirmDelete = async () => {
        if (userToDelete === 'all') {
            await deleteAllUsersFromFirestore();
            setUsers([]); // Clear all users from state
        } else {
            await deleteUserFromFirestore(userToDelete);
            setUsers(users.filter(user => user.id !== userToDelete)); // Remove the deleted user from state
        }
        setShowModal(false); // Close the modal after deletion
    };

    const cancelDelete = () => {
        setShowModal(false); // Close the modal without deleting anything
        setUserToDelete(null); // Reset the user to delete
    };

    return (
        openDashboard && <div className={`pt-[6rem] pr-[1rem] ${padd ? 'pl-[17rem]' : 'pl-[5rem]'}`}>
            <h1 className='text-[36px] font-bold mb-4'>Dashboard Overview</h1>
            <div className='flex flex-wrap gap-4'>
                <div className='shadow-lg rounded-[8px] p-4 bg-white w-full sm:w-[48%]'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='bg-[rgba(75,0,130,0.15)] rounded p-2'>
                            <MdGroups size={24} className='text-[#4B0082]' />
                        </div>
                        <p className='text-3xl font-bold text-right'>{users.length}</p>
                    </div>
                    <p className='text-gray-700 font-medium'>Total Registrations</p>
                </div>
                <div className='shadow-lg rounded-[8px] p-4 bg-white w-full sm:w-[48%]'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='bg-[rgba(75,0,130,0.15)] rounded p-2'>
                            <MdEvent size={24} className='text-[#4B0082]' />
                        </div>
                        <p className='text-3xl font-bold text-right'>{users.length}</p>
                    </div>
                    <p className='text-gray-700 font-medium'>Total Events</p>
                </div>
            </div>

            <div className='shadow-lg rounded-[8px] my-10'>
                <div className='flex justify-between items-center p-4 rounded-t-[8px]'>
                    <h2 className='text-[24px] font-bold mb-4'>Recent Registrations</h2>
                    <button
                        onClick={handleDeleteAllUsers}
                        className="bg-[#4B0082] h-[44px] w-[128px] text-[16px] font-normal text-[#FFFFFF] rounded-[8px] cursor-pointer"
                    >
                        Delete All
                    </button>
                </div>
                <div className='py-10'>
                    <div className='grid grid-cols-4 place-items-center w-full gap-4 p-4 bg-white rounded-b-[8px]'>
                        <p>Name</p>
                        <p>Email</p>
                        <p>Number</p>
                        <p>Actions</p>
                    </div>

                    <div className='px-10'>
                        <hr className='border-[rgba(75,0,130,0.15)] border-[1px]' />  
                    </div>


                    {users.length > 0 ? (
                        users.slice(0, 3).map((user) => (
                            <div key={user.id} className='grid grid-cols-4 place-items-center w-full gap-4 mt-4 p-4 bg-white rounded-b-[8px]'>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                                <p>{user.number}</p>
                                <button
                                    onClick={() => handleDeleteUser(user.id)}
                                    className="bg-[#4B0082] h-[44px] w-[128px] text-[16px] font-normal text-[#FFFFFF] rounded-[8px] cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className='p-4 bg-white text-center'>
                            <p>No users found</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Confirmation Modal */}
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
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
