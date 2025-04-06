import React from 'react'
// import AdminPanel from '../components/Admin/AdminPanel'
import AdminNavbar from '../components/Admin/AdminNavbar'
import AdminSidebar from '../components/Admin/AdminSidebar'
import AdminDashboard from '../components/Admin/AdminDashboard'

const Admin = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const [padd, setPadd] = React.useState(true);
    return (
        <>
            <AdminNavbar setIsOpen={setIsOpen} setPadd={setPadd}/>
            <AdminSidebar isOpen={isOpen}/>
            {/* <AdminPanel /> */}
            <AdminDashboard padd={padd} />
        </>
    )
}

export default Admin
