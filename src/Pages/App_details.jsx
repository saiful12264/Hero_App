import React, { useEffect, useState } from "react";
import { NavLink, useFetcher, useParams } from "react-router";
import useApp from "../Hook/useApp";
import { Download, Star, ThumbsUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getData, saveData } from "../Utility/localStorage";
import App_error from "./App_error";

const App_details = () => {
  const { id } = useParams();

  const [local, setLocal] = useState([]);

  const [isInstall, setIsInstall] = useState(false);

  const [erPage, setErPage] = useState(false);

  const { app, loading, error } = useApp() || {};

  const singleApp = app.find((ap) => ap.id === Number(id)) || {};

  const chartdata = [...(singleApp?.ratings || [])];

  const data = chartdata.reverse();

  const handleInstall = () => {
    saveData(singleApp);
    setIsInstall(true);
  };

  useEffect(() => {
    const stored = getData();

    if (singleApp?.id) {
      const flag = stored.some((ap) => ap.id === singleApp.id);
      setIsInstall(flag);
      const flag1 = app.some((sgap) => sgap.id === Number(id));
      if (flag1) {
        setErPage(true);
      }
    }
  }, [singleApp]);

  console.log(erPage);

  return (
    <div>
      {erPage ? (
        <div className="bg-gray-200 p-6 md:p-14 lg:p-20 ">
          <div className="block  lg:flex gap-10">
            <img
              className="w-[350px] h-[350px] object-cover overflow-hidden mb-4 lg:mb-0"
              src={singleApp.image}
              alt=""
            />
            <div className="flex-1">
              <h1
                className="text-[rgba(0,25,49,1)]
       font-inter
       text-[32px]
       font-bold
       leading-[39px]
       tracking-[0]
       text-left
       capitalize"
              >
                {singleApp.title}
              </h1>
              <p
                className="font-inter
       text-[20px]
       font-semibold
       leading-8
       tracking-[0]
       text-left text-[#627382] mb-7"
              >
                Developed by{" "}
                <span className="text-[#9F62F2]">{singleApp.companyName}</span>
              </p>
              <hr className="text-gray-400 mb-8" />
              <div className="par flex  items-center gap-15 lg:gap-32">
                <div>
                  <Download className="text-[#00827A] w-10 h-10" />

                  <p
                    className="text-[rgba(0,25,49,1)]
       font-inter
       text-[16px]
       font-normal
       leading-6
       tracking-[0]
       text-left
       capitalize my-3.5"
                  >
                    Downloads
                  </p>
                  <h1
                    className="text-[rgba(0,25,49,1)]
       font-inter
       text-[40px]
       font-extrabold
       leading-10
       tracking-[0]
       text-left
       capitalize"
                  >
                    {singleApp.downloads}
                  </h1>
                </div>
                <div>
                  <Star className="w-10 h-10 text-[#FF8811] fill-[#FF8811] " />

                  <p
                    className="text-[rgba(0,25,49,1)]
       font-inter
       text-[16px]
       font-normal
       leading-6
       tracking-[0]
       text-left
       capitalize my-3.5"
                  >
                    Average Ratings
                  </p>
                  <h1
                    className="text-[rgba(0,25,49,1)]
       font-inter
       text-[40px]
       font-extrabold
       leading-10
       tracking-[0]
       text-left
       capitalize"
                  >
                    {singleApp.ratingAvg}
                  </h1>
                </div>
                <div>
                  <ThumbsUp className="w-10 h-10 text-[#9F62F2]  " />

                  <p
                    className="text-[rgba(0,25,49,1)]
       font-inter
       text-[16px]
       font-normal
       leading-6
       tracking-[0]
       text-left
       capitalize my-3.5"
                  >
                    Total Reviews
                  </p>
                  <h1
                    className="text-[rgba(0,25,49,1)]
       font-inter
       text-[40px]
       font-extrabold
       leading-10
       tracking-[0]
       text-left
       capitalize"
                  >
                    {singleApp.reviews}
                  </h1>
                </div>
              </div>

              <div className="btn1">
                <NavLink
                  onClick={handleInstall}
                  className="text-white
       font-inter
       text-[20px]
       font-semibold
       leading-6
       tracking-[0]
       text-center
       capitalize rounded-lg 
       bg-[rgba(0,211,144,1)] px-5
       py-6 btn mt-7 "
                >
                  {isInstall
                    ? "Installed"
                    : `Install Now (${singleApp.size} MB)`}
                </NavLink>
              </div>
            </div>
          </div>

          <hr className="border border-[rgba(0,25,49,1)] opacity-20 my-10" />

          <div>
            <h1
              className="text-[rgba(0,25,49,1)]
       font-inter
       text-[24px]
       font-semibold
       leading-8
       tracking-[0]
       text-left mb-8"
            >
              Ratings
            </h1>
            <div
              className="h-80   rounded-2xl p-4 text-[rgba(98,115,130,1)]
       font-inter
       text-[18px]
       font-normal
       leading-4
       tracking-[0]
       text-left "
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  layout="vertical"
                  data={data}

                  // margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="count" type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />

                  <Bar dataKey="count" fill="#ff9900" barSize={32}>
                    <LabelList dataKey="count" position="right" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <hr className="border border-[rgba(0,25,49,1)] opacity-20 my-10" />

          <div>
            <h1
              className="text-[rgba(0,25,49,1)]
       font-inter
       text-[24px]
       font-semibold
       leading-8
       tracking-[0]
       text-left mb-6"
            >
              Description
            </h1>

            <p
              className="text-[rgba(98,115,130,1)]
       font-inter
       text-[20px]
       font-normal
       leading-8
       tracking-[0]
       text-left"
            >
              {singleApp.description}
            </p>
          </div>
        </div>
      ) : (
        <App_error></App_error>
      )}
    </div>
  );
};

export default App_details;
