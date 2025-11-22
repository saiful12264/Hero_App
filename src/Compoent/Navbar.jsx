import React from "react";
import logoImg from "../assets/logo.png";
import { NavLink } from "react-router";
import { Github } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline text-[#9F62F2] font-semibold text-[16px]"
              : "font-medium text-[16px]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive
              ? "underline text-[#9F62F2] font-semibold text-[16px]"
              : "font-medium text-[16px]"
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/install"
          className={({ isActive }) =>
            isActive
              ? "underline text-[#9F62F2] font-semibold text-[16px]"
              : "font-medium text-[16px]"
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className="navbar  border-b 
       border-[rgba(233,233,233,1)] 
       bg-white py-4 lg:px-20 flex items-center"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-10 h-10" src={logoImg} alt="" />
          <NavLink
            to="/"
            className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]
       bg-clip-text 
       text-transparent
       font-inter
       text-[16px]
       font-bold
       leading-[26px]
       tracking-[0px]
       text-left
       capitalize"
          >
            HERO.IO
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* <div className='rounded-sm 
       bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] px-4 py-3 flex items-center'>
       
            
<Github className="w-4 h-4 " />
       
        <p className='text-white 
       font-inter 
       text-[16px] 
       font-semibold 
       leading-[19px] 
       tracking-[0px] 
       
       capitalize'>Contribute</p>
    </div> */}

        <NavLink
          to="https://github.com/saiful12264"
          className="btn rounded-sm 
       bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]  text-white flex items-center gap-2 px-4 py-6   font-inter 
       text-[16px] 
       font-semibold 
      "
        >
          <Github className="w-5 h-5" />
          Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
