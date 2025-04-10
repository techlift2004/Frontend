import React, {createContext, useContext, useState} from 'react'

const AdminContext = createContext()

export const AdminController = ({children}) => {
    const[openDashboard, setOpenDashboard] = useState(true)
    const[openRegistration, setOpenRegistration] = useState(false)
    const[openEvents, setOpenEvents] = useState(false)
    const[openMembers, setOpenMembers] = useState(false)

    const openDashboardSection = () =>{
        setOpenDashboard(true)
        setOpenRegistration(false)
        setOpenMembers(false)
        setOpenEvents(false)
    }

    const openRegistrationSection = () =>{
        setOpenDashboard(false)
        setOpenMembers(false)
        setOpenRegistration(true)
        setOpenEvents(false)
    }

    const openEventsSection = () =>{
        setOpenDashboard(false)
        setOpenRegistration(false)
        setOpenMembers(false)
        setOpenEvents(true)
    }

    const openMembersSection = () =>{
        setOpenDashboard(false)
        setOpenRegistration(false)
        setOpenEvents(false)
        setOpenMembers(true)
    }

    return (
        <AdminContext.Provider value={{
            openDashboard, setOpenDashboard, openDashboardSection,
            openRegistration, setOpenRegistration, openRegistrationSection,
            openEvents, setOpenEvents, openEventsSection, 
            openMembers, setOpenMembers, openMembersSection
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AdminContext)
}

export default AdminContext
