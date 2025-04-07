import React from 'react'
import {useGlobalContext} from './AdminController'

const AdminRegistration = ({padd}) => {
    const {openRegistration} = useGlobalContext()
    return (
        openRegistration && <div className={`pt-[6rem] pr-[1rem] bg-red-700 ${padd ? 'pl-[17rem]' : 'pl-[5rem]'}`}>
            <h1 className='text-[36px] font-bold mb-4'>Dashboard Overview</h1>
            
        </div>
    )
}

export default AdminRegistration
