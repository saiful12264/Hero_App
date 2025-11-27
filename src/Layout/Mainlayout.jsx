import React, { Suspense } from "react";
import Navbar from "../Compoent/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Compoent/Footer";
import { ToastContainer } from "react-toastify";
import GlowingCubeLoader from "../Compoent/GlowingCubeLoader";

const Mainlayout = () => {
  const navigation = useNavigation();


  console.log(navigation);
  return (
    <div className="flex flex-col min-h-screen max-w-[1600px] mx-auto">
      <Navbar></Navbar>

     
      <div 
       className="flex-1">
     
        {(navigation.state === "loading")  ? <GlowingCubeLoader /> : <Outlet/>     }
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Mainlayout;
