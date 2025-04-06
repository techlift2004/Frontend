import React from 'react';
import Nav from '../layout/nav/nav';
import AllEvents from '../components/EventsPage/AllEvents';
import Footer from '../layout/footer/footer';

const Events = () => {
    return (
        <>
            <Nav />
            <AllEvents />
            <Footer />
        </>
    );
};

export default Events;
