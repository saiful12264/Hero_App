import React, { createContext, useEffect, useState } from "react";
import { getData } from "../Utility/localStorage";
import Install_app from "../Compoent/Install_app";
import { NavLink } from "react-router";

export const InstallContext = createContext([]);


const Install = () => {
  const [installApp, setInstallApp] = useState([]);
  const [sortApp, setSort] = useState("");
  const data = getData();
  useEffect(() => {
    setInstallApp(data);
  }, []);

  const sortItem = (() => {
    if (sortApp === "asc") {
      return [...installApp].sort((a, b) => a.size - b.size);
    } else if (sortApp === "dec") {
      return [...installApp].sort((a, b) => b.size - a.size);
    } else {
      return installApp;
    }
  })();



  return (

    <div>
        
         <div>
      <div className="bg-gray-200 p-8 md:p-14 lg:p-20  min-h-screen">

       


      
      {/* Start Main function from here */}






        <div className="Heading-parent ">
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
            Your Installed Apps
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
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="sub-heading flex justify-between items-center mb-6">
          <p
            className="text-[rgba(0,25,49,1)]
       font-inter
       text-[24px]
       font-semibold
       leading-8
       tracking-[0]
       text-left"
          >
            {installApp.length} Apps Found
          </p>
          <label className="form-control w-full max-w-xs">
            <select
              value={sortApp}
              onChange={(e) => setSort(e.target.value)}
              className="select select-bordered  text-[rgba(98,115,130,1)]
       font-inter
       text-[16px]
       font-normal
       leading-[19px]
       tracking-[0]"
            >
              <option value="none">Sort by Size</option>
              <option value="asc">Low -&gt; High</option>
              <option value="dec">High -&gt;Low</option>
            </select>
          </label>
        </div>

       
     {/* No app found here */}

       {
            (sortItem.length===0 ) && <div className="h-86">
        
       
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
          to={`/apps`}
             
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
        }







      {/* Mapping start from here */}

         <InstallContext.Provider value={setInstallApp}>

        <div>

          {sortItem.map((int) => (
            <Install_app key={int.id} int={int} ></Install_app>
          ))}
        </div>


         </InstallContext.Provider>

     
      </div>
    </div>
    </div>

  
  );
};

export default Install;
