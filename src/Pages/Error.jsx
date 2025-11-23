import React from "react";
import Navbar from "../Compoent/Navbar";
import Footer from "../Compoent/Footer";
import footerImg from "../assets/error-404.png";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-[1600px] mx-auto">
        <Navbar></Navbar>
        <div className="flex-1 p-20 bg-[#D2D2D2]">
          <div className="flex items-center justify-center">
            <img className="object-cover" src={footerImg} alt="" />
          </div>
          <div className="footer-body">
            <h1
              className="text-[rgba(0,25,49,1)]
       font-inter
       text-[48px]
       font-semibold
       leading-[60px]
       tracking-[-1.2%]
       text-center"
            >
              Oops, page not found!
            </h1>
            <p
              className="text-[rgba(98,115,130,1)]
       font-inter
       text-[20px]
       font-normal
       leading-8
       tracking-[0]
       text-center mt-4"
            >
              The page you are looking for is not available.
            </p>
            <div className="flex items-center justify-center mt-4">
              <NavLink
                to="/"
                className="text-white
       font-inter
       text-[16px]
       font-semibold
       leading-[19px]
       tracking-[0]
       text-left
       capitalize rounded-lg
       bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] px-6 py-6 btn "
              >
                Go Back!
              </NavLink>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Error;
