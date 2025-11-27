import React, { useEffect, useState } from "react";
import useApp from "../Hook/useApp";
import App_card from "../Compoent/App_card";
import { NavLink } from "react-router";
import GlowingCubeLoader from "../Compoent/GlowingCubeLoader";

const Apps = () => {
  const [search, setSearch] = useState("");
  const [isLoading ,setIsLoading] = useState(false);
  const { app, error, loading } = useApp();
  const apps = app.slice(0, 20) || {};

  const searchAppStr = search.trim().toLocaleLowerCase();

  useEffect((()=>{
    setIsLoading(true);

    setTimeout(()=>{
      setIsLoading(false);
    },300)

  }),[isLoading])

  const handleLoading = (value) =>{
    setSearch(value);
    setIsLoading(true);
  }




  const appItems = searchAppStr
    ? apps.filter((ap) => ap.title.toLocaleLowerCase().includes(searchAppStr))
    : apps;

  return (
    <div>
      <div className="bg-gray-200 p-6 md:p-9 lg:p-20 ">
        <div>
          <h1
            className="text-[rgba(0,25,49,1)]
       font-inter
       text-[48px]
       font-bold
       leading-[58px]
       tracking-[0]
       text-center
       capitalize"
          >
            Our All Applications
          </h1>
          <p
            className="text-[rgba(98,115,130,1)]
       font-inter
       text-[20px]
       font-normal
       leading-8
       tracking-[0]
       text-center mt-4 mb-10"
          >
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h1
            className="text-[rgba(0,25,49,1)]
       font-inter
       text-[24px]
       font-semibold
       leading-8
       tracking-[0]
       text-left"
          >
            ({appItems.length}) Apps Found
          </h1>
          <label className="input  ">
            <input
              value={search}
              onChange={(e) => handleLoading(e.target.value)}
              type="search"
              placeholder="Search"
            />
          </label>
        </div>

        {
          isLoading ? <GlowingCubeLoader/>
          :         (appItems.length) === 0 && (
          <div className="h-86">
            <h1
              className="text-gray-400
       font-inter
       text-[48px]
       font-bold
       leading-[58px]
       tracking-[0]
       text-center
       capitalize
        p-30
       
       "
            >
              No Apps Found
            </h1>

            <div className="flex items-center justify-center -mt-33 p-10">
              <NavLink
                onClick={() => setSearch("")}
                className="text-white
       font-inter
       text-[16px]
       font-semibold
        rounded-lg
       bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] px-6 py-6 btn "
              >
                Show All Apps
              </NavLink>
            </div>
          </div>
        )
      






          
        }



            
     



        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {appItems.map((ap) => (
            <App_card key={ap.id} ap={ap}></App_card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
