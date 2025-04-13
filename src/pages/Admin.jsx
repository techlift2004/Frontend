import React, { useState, useEffect } from 'react';
import AdminNavbar from '../components/Admin/AdminNavbar';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminDashboard from '../components/Admin/AdminDashboard';
import AdminEvents from '../components/Admin/AdminEvents';
import AdminRegistration from '../components/Admin/AdminRegistration';
import AdminMembers from '../components/Admin/AdminMembers';

const Admin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [padd, setPadd] = useState(false);
    const [activate, setActivate] = useState(true);

    useEffect(() => {
        const adminId = sessionStorage.getItem('adminId');
        if (adminId !== 'mayor') {
            setActivate(false);
            window.location.href = '/'; 
        }
    }, []);

    if (!activate) return null;

    return (
        <>
            <AdminNavbar setIsOpen={setIsOpen} setPadd={setPadd} />
            <AdminSidebar isOpen={isOpen} />
            <AdminDashboard padd={padd} />
            <AdminEvents padd={padd} />
            <AdminRegistration padd={padd} />
            <AdminMembers padd={padd} />
        </>
    );
};

export default Admin;
