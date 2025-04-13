import React, { useState, useEffect } from 'react';
import { deleteJoinUsMember, fetchJoinUsData } from '../../Firebase';
import { useGlobalContext } from './AdminController';

const AdminMembers = ({ padd }) => {
    const { openMembers } = useGlobalContext();
    const [joinUsData, setJoinUsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedMemberId, setSelectedMemberId] = useState(null);
    const [deleteAll, setDeleteAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getJoinUsData = async () => {
            setLoading(true);
            try {
                const data = await fetchJoinUsData();
                setJoinUsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        getJoinUsData();
    }, []);

    const openDeleteModal = (memberId = null) => {
        setDeleteAll(memberId === null); // true if no memberId = bulk delete
        setSelectedMemberId(memberId);
        setShowModal(true);
    };

    const cancelDelete = () => {
        setSelectedMemberId(null);
        setDeleteAll(false);
        setShowModal(false);
    };

    const confirmDelete = async () => {
        setLoading(true);
        try {
            if (deleteAll) {
                for (const member of joinUsData) {
                    await deleteJoinUsMember(member.id);
                }
                setJoinUsData([]);
            } else {
                setJoinUsData(prev => prev.filter(m => m.id !== selectedMemberId));
                await deleteJoinUsMember(selectedMemberId);
            }
        } catch (error) {
            console.error('Error during deletion:', error);
        } finally {
            setLoading(false);
            cancelDelete();
        }
    };

    const filteredMembers = joinUsData.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.stack.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        openMembers && (
            <div className={`pt-[6rem] pr-[1rem] ${padd ? 'md:pl-[17rem]' : 'pl-[2rem]'}`}>
                <h1 className="text-2xl font-bold mb-6">Members</h1>

                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search by name, stack, or email"
                    className="w-full max-w-md p-2 border border-gray-300 rounded mb-4"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Grid Header */}
                <div className="grid grid-cols-3 lg:grid-cols-4 font-semibold py-2 px-3 items-center text-center">
                    <div>Name</div>
                    <div className='hidden lg:block'>Email</div>
                    {/* <div>Number</div> */}
                    <div>Stack</div>
                    <div>Actions</div>
                </div>
                <div className='w-full'>
                    <hr className='border-[rgba(75,0,130,0.15)] border-[1px]' />  
                </div>

                {/* Grid Content */}
                {loading ? (
                    <div className="text-center py-6">Loading...</div>
                ) : filteredMembers.length > 0 ? (
                    filteredMembers.map((member) => (
                        <div key={member.id} className="grid grid-cols-3 lg:grid-cols-4 items-center py-3 px-3 text-center">
                            <div>{member.name}</div>
                            <div className='hidden lg:block'>{member.email}</div>
                            {/* <div>{member.phone}</div> */}
                            <div>{member.stack}</div>
                            <div>
                                <button
                                    onClick={() => openDeleteModal(member.id)}
                                    className="hover:text-[#FFFFFF] border-2 border-[rgb(75,0,130)] text-[rgb(75,0,130)] px-4 py-1 rounded hover:bg-[rgb(75,0,130)]"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-6">No users found.</div>
                )}

                {/* Delete All Button */}
                {filteredMembers.length > 0 && (
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={() => openDeleteModal(null)}
                            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
                        >
                            Delete All Users
                        </button>
                    </div>
                )}

                {/* Shared Confirmation Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-[rgba(0,0,0,0.85)] flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded shadow-xl w-[300px] text-center">
                            <p className="text-lg mb-4">
                                {deleteAll
                                    ? 'Are you sure you want to delete all users?'
                                    : 'Are you sure you want to delete this user?'}
                            </p>
                            <div className="flex justify-between">
                                <button
                                    onClick={confirmDelete}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={cancelDelete}
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default AdminMembers;
