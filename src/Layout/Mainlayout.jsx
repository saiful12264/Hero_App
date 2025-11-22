import React from 'react';
import Navbar from '../Compoent/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Compoent/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;