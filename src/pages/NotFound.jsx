import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4">Oops! Page not found</p>
        <Link to="/" className="mt-6 text-blue-500 underline">
            Go back home
        </Link>
        </div>
    );
};

export default NotFound;
