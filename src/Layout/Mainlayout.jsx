import React from 'react';
import Navbar from '../Compoent/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Compoent/Footer';

const Mainlayout = () => {
    return (
        <div className="flex flex-col min-h-screen max-w-[1600px] mx-auto">
            <Navbar></Navbar>
            <div className='flex-1'> 
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;