import React, { useState, useRef, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminAccess = ({ openAccess, setOpenAccess }) => {
    const [adminId, setAdminId] = useState('');
    const [validator, setValidator] = useState(null);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        if (openAccess) {
            inputRef.current.focus();
        }
    }, [openAccess]);

    if (!openAccess) return null;

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setAdminId(inputValue);
        setValidator(inputValue === 'mayor');
    };

    const handleVerify = () => {
        if (adminId === 'mayor') {
            sessionStorage.setItem('adminId', 'mayor');
            navigate('/admin');
        }
    };

    const handleClose = () => {
        setOpenAccess(false);
        setAdminId('');
        setValidator(null);
    };

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.85)] flex justify-center items-center z-50">
            <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10 w-full">
                <h1 className="text-2xl font-bold">Verify Admin Access</h1>
                <span className="text-sm text-gray-500">(only authorized personnel)</span>

                <div className="mt-4">
                    <label htmlFor="adminId" className="block text-sm font-medium">Admin ID</label>
                    <input
                        ref={inputRef}
                        type="text"
                        value={adminId}
                        onChange={handleChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                        placeholder="Enter Admin ID"
                        className="w-full mt-1 p-2 border rounded"
                    />
                    {validator !== null && (
                        <span className={`flex items-center gap-x-2 mt-2 ${validator ? 'text-green-500' : 'text-red-500'}`}>
                            {validator ? <FaCheckCircle /> : <FaTimesCircle />}
                            {validator ? 'ID is correct!' : 'ID is incorrect!'}
                        </span>
                    )}
                </div>

                <div className="mt-4 flex gap-4 justify-end">
                    <button 
                        onClick={handleClose} 
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
                    >
                        Close
                    </button>
                    
                    <button 
                        onClick={handleVerify}
                        className="px-4 py-2 hover:bg-[rgba(75,0,130,0.5)] text-white rounded bg-[#4B0082] focus:outline-none"
                    >
                        Verify Admin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminAccess;
