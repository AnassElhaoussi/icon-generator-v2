import React from "react";
import { logo } from "../assets";

const Pricing = () => {
  return (
    <main className=" bg-black text-center text-white font-poppins flex flex-col items-center py-32 px-8">
      <img src={logo} alt="" className="absolute  w-52 -top-10" />
      <div className="flex flex-col items-center gap-y-16 lg:w-[80%]">
        <div className="space-y-4">
          <div className="relative">
            <h1 className="relative z-10 md:text-8xl sm:text-7xl text-6xl md:font-black font-extrabold text-gray-200">
              Buy credits!
            </h1>
            <div className="absolute -z-0 h-32 w-full -top-10 bg-gray-800 blur-2xl"></div>
          </div>
          <p className="font-light text-md">
            IconAI gives you 10 free credits to start testing our application
          </p>
        </div>
        <div className="flex justify-center items-stretch gap-4 lg:flex-nowrap flex-wrap w-full px-10">
          <div className="flex flex-col gap-y-6 bg-gray-900 h-full items-center justify-around p-8 rounded-2xl shadow-lg  md:w-[20rem] w-full ">
            <div className="space-y-2">
                <h3 className="text-5xl font-bold text-blue-700">Free</h3>
                <p className="text-sm font-light">Enjoy our free plan by using 10 credits.</p>
            </div>
            <button className="py-3 px-8 bg-blue-700 hover:scale-105 rounded-md font-light whitespace-nowrap transition-all">Go to dashboard</button>
          </div>
          <div className="flex flex-col gap-y-6 bg-gray-900 items-center justify-around p-8 rounded-2xl shadow-lg  md:w-[20rem] w-full">
            <div className="space-y-2">
                <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">Basic</h3>
                <p className="text-sm font-light">Buy 50 credits with 9$</p>
            </div>
            <button className="py-3 px-5 bg-gradient-to-r hover:scale-105 from-blue-700 to-purple-700 rounded-md font-light transition-all">Buy in 10$</button>
          </div>
          <div className="flex flex-col gap-y-6 bg-gray-900 items-center justify-around p-8 rounded-2xl shadow-lg  md:w-[20rem] w-full">
            <div className="space-y-2">
                <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">Premium</h3>
                <p className="text-sm font-light">Enjoy our premium plan by buying 200 credits in only 20$</p>
            </div>
            <button className="py-3 px-5 bg-gradient-to-r hover:scale-105 from-blue-700 to-purple-700 rounded-md font-light transition-all">Buy in 20$</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
