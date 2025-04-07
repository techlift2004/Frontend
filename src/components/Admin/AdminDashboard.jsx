import React from 'react'
import { MdGroups, MdEvent } from 'react-icons/md'
import { useGlobalContext } from './AdminController'

const AdminDashboard = ({ padd }) => {
    const {openDashboard } = useGlobalContext()
    return (
        openDashboard && <div className={`pt-[6rem] pr-[1rem] ${padd ? 'pl-[17rem]' : 'pl-[5rem]'}`}>
            <h1 className='text-[36px] font-bold mb-4'>Dashboard Overview</h1>
            <div className='flex flex-wrap gap-4'>
                <div className='shadow-lg rounded-[8px] p-4 bg-white w-full sm:w-[48%]'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='bg-[rgba(75,0,130,0.15)] rounded p-2'>
                            <MdGroups size={24} className='text-[#4B0082]' />
                        </div>
                        <p className='text-3xl font-bold text-right'>5</p>
                    </div>
                    <p className='text-gray-700 font-medium'>Total Registrations</p>
                </div>
                <div className='shadow-lg rounded-[8px] p-4 bg-white w-full sm:w-[48%]'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='bg-[rgba(75,0,130,0.15)] rounded p-2'>
                            <MdEvent size={24} className='text-[#4B0082]' />
                        </div>
                        <p className='text-3xl font-bold text-right'>5</p>
                    </div>
                    <p className='text-gray-700 font-medium'>Total Events</p>
                </div>
            </div>
            <div className='shadow-lg rounded-[8px] my-10'>
                <div className='flex justify-between items-center p-4 rounded-t-[8px]'>
                    <h2 className='text-[24px] font-bold mb-4'>Recent Registrations</h2>
                    <button className="bg-[#4B0082] h-[44px] w-[128px] text-[16px] font-normal text-[#FFFFFF] rounded-[8px] cursor-pointer">
                        View All
                    </button>
                </div>
                <div className='py-10'>
                    <div className='grid grid-cols-4 place-items-center w-full gap-4 p-4 bg-white rounded-b-[8px]'>
                        <p>Name</p>
                        <p>Email</p>
                        <p>Time</p>
                        <button className="bg-[#4B0082] h-[44px] w-[128px] text-[16px] font-normal text-[#FFFFFF] rounded-[8px] cursor-pointer">
                            Delete All
                        </button>
                    </div>
                    <div className='px-10'>
                        <hr className='border-[rgba(75,0,130,0.15)] border-[1px] mb-4' />  
                    </div>
                    <div className='grid grid-cols-4 place-items-center w-full gap-4 mt-10 p-4 bg-white rounded-b-[8px]'>
                        <p>Mide</p>
                        <p>Mide@techlift.com</p>
                        <p>about 5 hours ago</p>
                        <button className="bg-[#4B0082] h-[44px] w-[128px] text-[16px] font-normal text-[#FFFFFF] rounded-[8px] cursor-pointer">
                            Delete
                        </button>
                    </div>
                    <div className='grid grid-cols-4 place-items-center w-full gap-4 mt-10 p-4 bg-white rounded-b-[8px]'>
                        <p>Mide</p>
                        <p>Mide@techlift.com</p>
                        <p>about 5 hours ago</p>
                        <button className="bg-[#4B0082] h-[44px] w-[128px] text-[16px] font-normal text-[#FFFFFF] rounded-[8px] cursor-pointer">
                            Delete
                        </button>
                    </div>
                    <div className='grid grid-cols-4 place-items-center w-full gap-4 mt-10 p-4 bg-white rounded-b-[8px]'>
                        <p>Mide</p>
                        <p>Mide@techlift.com</p>
                        <p>about 5 hours ago</p>
                        <button className="bg-[#4B0082] h-[44px] w-[128px] text-[16px] font-normal text-[#FFFFFF] rounded-[8px] cursor-pointer">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
