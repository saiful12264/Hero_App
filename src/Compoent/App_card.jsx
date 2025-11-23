import { ArrowDownToLine, Star } from "lucide-react";
import React from "react";

const App_card = ({ ap }) => {
  const { image, title, downloads, ratingAvg } = ap;
  return (
    <div className="rounded-lg bg-[rgba(255,255,255,1)] p-4 shadow-sm hover:scale-105 transition ease-in-out">
      <div className="flex items-center justify-center">
        <img
        className="rounded-lg w-[316px] h-[316px] object-cover overflow-hidden "
        src={image}
        alt=""
      />
      </div>
      <h1
        className="text-[rgba(0,25,49,1)]
       font-inter
       text-[20px]
       font-medium
       leading-6
       tracking-[0%]
       text-left
       capitalize mt-5"
      >
        {title}
      </h1>

      <div className="flex justify-between items-center mb-4 mt-6">
        <button
          className="text-[rgba(0,211,144,1)]
       font-inter
       text-[16px]
       font-medium
       leading-[19px]
       tracking-[0%]
       text-left
       capitalize flex items-center btn "
        >
          <ArrowDownToLine />
          <span>{downloads}</span>
        </button>
        <button
          className="text-[#FF8811]
       font-inter
       text-[16px]
       font-medium
       leading-[19px]
       tracking-[0%]
       text-left
       capitalize flex items-center btn "
        >
          <Star />
          <span>{ratingAvg}</span>
        </button>
      </div>
    </div>
  );
};

export default App_card;
