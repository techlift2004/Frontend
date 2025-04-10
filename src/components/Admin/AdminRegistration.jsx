import React, { useEffect, useState } from 'react';
import { useGlobalContext } from './AdminController';
import { fetchUsers, deleteUserFromFirestore } from '../../Firebase';

const AdminRegistration = ({ padd }) => {
    const { openRegistration } = useGlobalContext();
    const [users, setUsers] = useState([]); // State to store the fetched users
    const [searchQuery, setSearchQuery] = useState(''); // State for the search query
    const [showModal, setShowModal] = useState(false); // State for delete confirmation modal
    const [userToDelete, setUserToDelete] = useState(null); // State for the user to delete
    const [showDeleteAllModal, setShowDeleteAllModal] = useState(false); // State for delete all modal

    useEffect(() => {
        const getUsers = async () => {
            const usersData = await fetchUsers();
            setUsers(usersData);
        };

        if (openRegistration) {
            getUsers();
        }
    }, [openRegistration]); // Fetch users when openRegistration is true

    const handleDeleteUser = (userId) => {
        setUserToDelete(userId); // Store the user ID to delete
        setShowModal(true); // Show the delete confirmation modal
    };

    const confirmDelete = async () => {
        await deleteUserFromFirestore(userToDelete); // Delete the user from Firestore
        setUsers(users.filter(user => user.id !== userToDelete)); // Remove the deleted user from state
        setShowModal(false); // Close the modal
    };

    const cancelDelete = () => {
        setShowModal(false); // Close the modal without deleting
        setUserToDelete(null); // Reset the user to delete
    };

    // Handle "Delete All" button click
    const handleDeleteAll = () => {
        setShowDeleteAllModal(true); // Show the delete all confirmation modal
    };

    const confirmDeleteAll = async () => {
        for (let user of users) {
            await deleteUserFromFirestore(user.id); // Delete all users from Firestore
        }
        setUsers([]); // Clear the state after deletion
        setShowDeleteAllModal(false); // Close the modal
    };

    const cancelDeleteAll = () => {
        setShowDeleteAllModal(false); // Close the modal without deleting
    };

    // Filter users based on the search query
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.number.includes(searchQuery)
    );

    return (
        openRegistration && (
        <div className={`pt-[6rem] pr-[1rem] ${padd ? 'pl-[17rem]' : 'pl-[5rem]'}`}>
            <div className='shadow-lg rounded-[8px] my-10'>
                <div className='flex justify-between items-center rounded-t-[8px] p-4'>
                    <h1 className='text-[36px] font-bold mb-4'>Registered Users</h1>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                            placeholder="Search by name, email, or number"
                            className="p-2 border rounded"
                        />
                </div>
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

                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                        <div key={user.id} className='grid grid-cols-4 place-items-center w-full gap-4 mt-4 p-4 bg-white rounded-b-[8px]'>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.number}</p>
                            <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="hover:bg-[#4B0082] h-[44px] w-[128px] text-[16px] font-normal hover:text-[#FFFFFF] border-2 border-[rgb(75,0,130)] text-[rgb(75,0,130)] rounded-[8px] cursor-pointer"
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
                {/* Add Delete All button */}
                {users.length > 0 && (
                    <div className='flex justify-end p-4'>
                        <button
                            onClick={handleDeleteAll}
                            className="bg-red-500 text-white py-2 px-4 rounded-[8px]"
                        >
                            Delete All Users
                        </button>
                    </div>
                )}
            </div>
            
            {/* Confirmation Modal for deleting individual user */}
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

            {/* Confirmation Modal for deleting all users */}
            {showDeleteAllModal && (
            <div className='fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.85)]'>
                <div className='bg-white p-6 rounded-[8px] w-1/3'>
                <h3 className='text-[18px] font-bold mb-4'>Are you sure you want to delete all users?</h3>
                <div className='flex justify-between'>
                    <button
                    onClick={cancelDeleteAll}
                    className="bg-gray-500 text-white py-2 px-4 rounded-[8px] mr-4"
                    >
                    Cancel
                    </button>
                    <button
                    onClick={confirmDeleteAll}
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

export default AdminRegistration;
