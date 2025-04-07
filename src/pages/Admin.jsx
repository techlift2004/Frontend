import React from 'react'
import AdminNavbar from '../components/Admin/AdminNavbar'
import AdminSidebar from '../components/Admin/AdminSidebar'
import AdminDashboard from '../components/Admin/AdminDashboard'
import AdminEvents from '../components/Admin/AdminEvents'
import AdminRegistration from '../components/Admin/AdminRegistration'

const Admin = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const [padd, setPadd] = React.useState(true);
    return (
        <>
            <AdminNavbar setIsOpen={setIsOpen} setPadd={setPadd}/>
            <AdminSidebar isOpen={isOpen}/>
            <AdminDashboard padd={padd} />
            <AdminEvents padd={padd} />
            <AdminRegistration padd={padd} />
        </>
    )
}

export default Admin
