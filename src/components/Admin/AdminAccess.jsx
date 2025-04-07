import React, { useState, useRef } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminAccess = ({ openAccess, setOpenAccess }) => {
    const [validator, setValidator] = useState(false);
    const [adminId, setAdminId] = useState('');
    const navigate = useNavigate();

    if (!openAccess) return null;

    const IdChecker = (e) => {
        setAdminId(e.target.value);
        sessionStorage.setItem('id', 'mayor');
        const getId = sessionStorage.getItem('id');
        if (e.target.value === getId) {
            setValidator(true);
        } else {
            setValidator(false);
        }
    }

    const handleVerify = () => {
        if (validator) {
            // setOpenAccess(false);
            sessionStorage.removeItem('id')
            navigate('/admin'); 
        } else {
            setValidator(false);
        }
    }

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.85)] flex justify-center items-center z-50">
            <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10 w-full">
                <h1 className="text-2xl font-bold">Verify Admin Access</h1>
                <span className="text-sm text-gray-500">(only authorized personnel)</span>
                <div className="mt-4">
                    <label htmlFor="adminId" className="block text-sm font-medium">Admin ID</label>
                    <input
                        // id="adminId"
                        
                        type="text"
                        value={adminId}
                        onChange={IdChecker}
                        placeholder="Enter Admin ID"
                        className="w-full mt-1 p-2 border rounded"
                    />
                    <span className="text-red-500 flex items-center gap-x-2">
                        {validator ? <FaCheckCircle className='text-green-500' /> : <FaTimesCircle />} {validator ? <span className='text-green-500'>ID exists!!!</span> : <span className='text-red-500'>ID does not exist!!!</span>}
                    </span>
                </div>

                <div className="mt-4 flex gap-4 justify-end">
                    <button 
                        onClick={() => setOpenAccess(false)} 
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
    )
}

export default AdminAccess;
