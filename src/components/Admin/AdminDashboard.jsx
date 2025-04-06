import React from 'react'
import { MdGroups, MdEvent } from 'react-icons/md'

const AdminDashboard = ({ padd }) => {
    return (
        <div className={`pt-[6rem] pr-[1rem] ${padd ? 'pl-[17rem]' : 'pl-[5rem]'}`}>
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
            <div className='shadow-lg rounded-[8px] mt-10'>
                <div>
                    <h2 className='text-[24px] font-bold mb-4'>Recent Registrations</h2>
                    
                </div>
                
            </div>
        </div>
    )
}

export default AdminDashboard
