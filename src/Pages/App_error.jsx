import React from "react";
import ErrorImg from "../assets/App-Error.png";
import { NavLink } from "react-router";

const App_error = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="flex-1 p-20 ">
        <div className="flex items-center justify-center">
          <img className="object-cover" src={ErrorImg} alt="" />
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
            OPPS!! APP NOT FOUND
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
            The App you are requesting is not found on our system. please try
            another apps
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
             bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] px-6 py-6 btn mb-29"
            >
              Go Back!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App_error;
