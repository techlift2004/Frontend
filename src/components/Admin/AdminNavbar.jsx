import React from 'react'
import Logo from "../../assets/techLift.png";
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const AdminNavbar = ({setIsOpen, setPadd}) => {
    return (
        <div className='flex flex-row justify-between items-center px-8 bg-[#FFFFFF] h-[64px] w-[100%] overflow-hidden fixed z-1000 shadow'>
            <div className='flex justify-start items-center gap-x-4'>
            <div
                className="bg-[#4B0082] border-2 border-[#4B0082] rounded p-[5px] cursor-pointer"
                onClick={() => {
                    setIsOpen((prev) => !prev);
                    setPadd((prev) => !prev); 
                }}
            >
                    <FaBars size={15} className='text-white' />
                </div>
                <NavLink to='/'>
                    <img src={Logo} alt='techLift-logo' className='w-[8rem]' />
                </NavLink>
            </div>
            
            <div className='bg-[#4B0082] border-2 border-[#4B0082] rounded-full py-[8px] px-[15px] cursor-pointer'>
                <h1 className='font-extrabold text-white'>T</h1>
            </div>
        </div>
    )
}

export default AdminNavbar
