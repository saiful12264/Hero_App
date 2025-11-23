import React from "react";

const Trust = () => {
  return (
    <div className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] p-20 ">
      <h1
        className="  text-white font-inter
        text-[35px] lg:text-[48px]
           font-bold
           leading-[58px]
             tracking-[0]
            text-center
            capitalize 
            "
      >
        Trusted by Millions, Built for You
      </h1>
      <div className="par flex justify-center items-center mt-5 lg:mt-10 mb-10 lg:mb-20 gap-10 lg:gap-50 ">
        <div>
          <p
            className="text-[rgba(255,255,255,1)] 
       font-inter 
       text-base 
       font-normal 
       leading-6 
       tracking-[0%] 
       text-center 
       capitalize opacity-80"
          >
            Total Downloads
          </p>
          <h1
            className="text-[rgba(255,255,255,1)] 
       font-inter 
       text-[50px]
       lg:text-[64px] 
       font-extrabold 
       leading-[72px] 
       tracking-[0%] 
       text-center 
       capitalize"
          >
            29.6M
          </h1>
          <p
            className="text-[rgba(255,255,255,1)] 
       font-inter 
       text-base 
       font-normal 
       leading-6 
       tracking-[0%] 
       text-center 
       capitalize opacity-80"
          >
            21% more than last month
          </p>
        </div>
        <div>
          <p
            className="text-[rgba(255,255,255,1)] 
       font-inter 
       text-base 
       font-normal 
       leading-6 
       tracking-[0%] 
       text-center 
       capitalize opacity-80"
          >
            Total Reviews
          </p>
          <h1
            className="text-[rgba(255,255,255,1)] 
       font-inter 
       text-[50px]
      lg:text-[64px] 
       font-extrabold 
       leading-[72px] 
       tracking-[0%] 
       text-center 
       capitalize"
          >
            906K
          </h1>
          <p
            className="text-[rgba(255,255,255,1)] 
       font-inter 
       text-base 
       font-normal 
       leading-6 
       tracking-[0%] 
       text-center 
       capitalize opacity-80"
          >
           46% more than last month
          </p>
        </div>
        <div className="hidden lg:block">
          <p
            className="text-[rgba(255,255,255,1)] 
       font-inter 
       text-base 
       font-normal 
       leading-6 
       tracking-[0%] 
       text-center 
       capitalize opacity-80"
          >
            Active Apps
          </p>
          <h1
            className="text-[rgba(255,255,255,1)] 
       font-inter 
       text-[64px] 
       font-extrabold 
       leading-[72px] 
       tracking-[0%] 
       text-center 
       capitalize"
          >
           132+
          </h1>
          <p
            className="text-[rgba(255,255,255,1)] 
       font-inter 
       text-base 
       font-normal 
       leading-6 
       tracking-[0%] 
       text-center 
       capitalize opacity-80"
          >
            31 more will Launch
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Trust;
