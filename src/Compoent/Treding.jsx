import React from "react";

import App_card from "./App_card";
import { NavLink } from "react-router";

const Treding = ({app}) => {

  const apps = app.slice(0, 8);

  return (
    <div className="bg-gray-200 p-4 md:p-8  lg:p-20 ">
      <div>
        <h1
          className="text-[rgba(0,25,49,1)] 
       font-inter 
       text-[48px] 
       font-bold 
       leading-[58px] 
       tracking-[0%] 
       text-center 
       capitalize"
        >
          Trending Apps
        </h1>
        <p
          className="text-[rgba(98,115,130,1)]
       font-inter
       text-[20px]
       font-normal
       leading-8
       tracking-[0%]
       text-center mt-4 mb-10"
        >
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {apps.map((ap) => (
          <App_card key={ap.id} ap={ap}></App_card>
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
        <NavLink
          to="/apps"
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
          Show All Apps
        </NavLink>
      </div>
    </div>
  );
};

export default Treding;
