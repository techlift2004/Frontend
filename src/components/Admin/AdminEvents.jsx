import React from 'react'
import {useGlobalContext} from './AdminController'

const AdminEvents = ({padd}) => {
    const {openEvents} = useGlobalContext()
    return (
        openEvents && <div className={`pt-[6rem] pr-[1rem] bg-red-700 ${padd ? 'pl-[17rem]' : 'pl-[5rem]'}`}>
            <h1>Admin Events</h1>
        </div>
    )
}

export default AdminEvents
