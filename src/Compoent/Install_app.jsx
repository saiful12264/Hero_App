import { ArrowDownToLine, Star } from "lucide-react";
import React, { use } from "react";
import { NavLink } from "react-router";
import { InstallContext } from "../Pages/Install";
import { deleteData } from "../Utility/localStorage";
import { toast } from "react-toastify";

const Install_app = ({ int }) => {
    const setInstallApp = use(InstallContext);
    const handleUninstall=()=>{
        setInstallApp(pre => pre.filter (ap => ap.id !== int.id));
        deleteData(int);
         toast.success("Uninstalled Successfully!", { theme: "colored",position:'top-center' })




    }
  return (
    <div>
      <div className="rounded-lg bg-white p-4 my-4  lg:flex items-center gap-4">
        <img
          src={int.image}
          className="w-20 h-20 object-cover overflow-hidden"
          alt=""
        />

        <div className="flex-1">
          <div className=" lg:flex justify-between items-center">
            <div>
              <h1
                className="text-[rgba(0,25,49,1)]
       font-inter
       text-[20px]
       font-medium
       leading-6
       tracking-[0]
       text-left
       capitalize "
              >
                {int.title}
              </h1>

              <div className="flex  items-center gap-5 mb-4 mt-4">
                <button
                  className="text-[rgba(0,211,144,1)]
       font-inter
       text-[16px]
       font-medium
       leading-[19px]
       tracking-[0%]
       text-left
       capitalize flex items-center  "
                >
                  <ArrowDownToLine />
                  <span>{int.downloads}</span>
                </button>
                <button
                  className="text-[#FF8811]
                  
       font-inter
       text-[16px]
       font-medium
       leading-[19px]
       tracking-[0%]
       text-left
       capitalize flex items-center  "
                >
                  <Star className="fill-[#FF8811]" />
                  <span>{int.ratingAvg}</span>
                </button>
                <p
                  className="text-[rgba(98,115,130,1)]
       font-inter
       text-[16px]
       font-normal
       leading-[19px]
       tracking-[0]
       text-left
       capitalize"
                >
                  {int.size} MB
                </p>
              </div>
            </div>
               <div className="btn1">
                <NavLink onClick={handleUninstall}
                 
                  className="text-white
       font-inter
       text-[20px]
       font-semibold
       leading-6
       tracking-[0]
       text-center
       capitalize rounded-lg 
       bg-[rgba(0,211,144,1)] px-5
       py-6 btn "
                  
                >
                  Uninstall
                </NavLink>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install_app;
