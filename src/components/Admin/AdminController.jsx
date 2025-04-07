import React, {createContext, useContext, useState} from 'react'

const AdminContext = createContext()

export const AdminController = ({children}) => {
    const[openDashboard, setOpenDashboard] = useState(true)
    const[openRegistration, setOpenRegistration] = useState(false)
    const[openEvents, setOpenEvents] = useState(false)

    const openDashboardSection = () =>{
        setOpenDashboard(true)
        setOpenRegistration(false)
        setOpenEvents(false)
    }

    const openRegistrationSection = () =>{
        setOpenDashboard(false)
        setOpenRegistration(true)
        setOpenEvents(false)
    }

    const openEventsSection = () =>{
        setOpenDashboard(false)
        setOpenRegistration(false)
        setOpenEvents(true)
    }

    return (
        <AdminContext.Provider value={{
            openDashboard, setOpenDashboard, openDashboardSection,
            openRegistration, setOpenRegistration, openRegistrationSection,
            openEvents, setOpenEvents, openEventsSection
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AdminContext)
}

export default AdminContext
