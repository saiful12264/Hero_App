import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoIosAppstore } from "react-icons/io";
import { NavLink } from "react-router";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="bg-gray-200 px-20 pt-20">
      <div>
        <h1
          className="font-inter text-[50px]
       lg:text-[72px]
       font-bold
       leading-[84px]
       tracking-[0]
       text-center
       capitalize opacity-90 text-[#001931]"
        >
          We Build{" "}
          <span className="hidden lg:inline">
            <br />
          </span>
          <span className="lg:font-black text-[#9F62F2]"> Productive</span> Apps
        </h1>
        <p
          className="text-[rgba(98,115,130,1)]
       font-inter
       text-[20px]
       font-normal
      lg:text-center mt-4 mb-10 text-justify"
        >
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <span className="hidden lg:inline mt-0">
            <br />
          </span>{" "}
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <NavLink
          to="https://play.google.com/store/apps?hl=en"
          className={`  text-[rgba(0,25,49,1)] font-inter text-[20px]font-semibold text-center
           capitalize flex items-center gap-1 btn btn-outline border border-[rgba(210,210,210,1)] rounded-sm box-border px-6 py-3`}
        >
          <BiLogoPlayStore className="" />
          <span> Google Play</span>
        </NavLink>
        <NavLink
          to="https://www.apple.com/app-store/"
          className={`  text-[rgba(0,25,49,1)] font-inter text-[20px] font-semibold text-center
          capitalize flex items-center gap-1 btn btn-outline border border-[rgba(210,210,210,1)] rounded-sm box-border px-6 py-3`}
        >
          <IoIosAppstore />
          <span> App Store</span>
        </NavLink>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
