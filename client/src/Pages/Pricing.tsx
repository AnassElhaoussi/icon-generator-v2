import React, { useContext } from "react";
import { logo } from "../images";
import { UserContext } from "../Context/UserContextProvider";
import { UserContextType } from "../types/Context/signin";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import PaypalPayment from "../components/dashboard/PaypalPayments";

const Pricing = () => {
  const { user } = useContext(UserContext) as UserContextType;
  const {isOpen, onClose, onOpen} = useDisclosure()
  return (
    <main className=" bg-black text-center text-white font-poppins flex flex-col items-center justify-center gap-20 pb-44 pt-10 px-8">
        <img src={logo} alt="" className="w-40" />
        <div className="space-y-4">
          <div className="relative">
            <h1 className="relative z-10 md:text-8xl sm:text-7xl text-6xl md:font-black font-extrabold text-gray-200">
              Buy credits!
            </h1>
            <div className="absolute -z-0 h-32 w-full -top-10 bg-gray-800 blur-2xl"></div>
          </div>
          <p className="font-light text-md text-gray-400">
            IconAI gives you 10 free credits to start testing our application
          </p>
        </div>
        <div className="flex justify-center items-stretch gap-4 lg:flex-nowrap flex-wrap w-full px-10">
          <div className="relative flex flex-col gap-y-6 bg-gradient-to-t from-gray-800 to-gray-900 h-[17rem] items-center justify-around p-8 rounded-2xl shadow-lg  md:w-[20rem] w-full">
            <h3 className="text-5xl font-bold text-blue-700">Basic</h3>
            <p className="text-xl text-gray-300 font-light">
                Buy 80 Credits
            </p>
            <span className="absolute top-0 -rotate-45 -left-10 text-xs text-yellow-900 py-1 px-3 rounded-md bg-yellow-600">0.06$ /image</span>
            <button onClick={onOpen} className="py-3 px-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-md font-light text-lg hover:scale-110 transition-all ">
              Buy in 5$
            </button>
          </div>
          <div className="relative flex flex-col gap-y-6 bg-gradient-to-t from-gray-800 to-gray-900 h-[17rem] items-center justify-around p-8 rounded-2xl shadow-lg  md:w-[20rem] w-full">
            <h3 className="bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text text-5xl font-bold text-blue-700">Standard</h3>
            <p className="text-xl text-gray-300 font-light">
                Buy 160 Credits
            </p>
            <span className="absolute top-0 -rotate-45 -left-10 text-xs text-yellow-900 py-1 px-3 rounded-md bg-yellow-600">0.07$ /image</span>
            <button onClick={onOpen} className="py-3 px-5 bg-gradient-to-r from-purple-700 to-blue-600 rounded-md font-light text-lg hover:scale-110 transition-all ">
              Buy in 12$
            </button>
          </div>
          <div className="relative flex flex-col gap-y-6 bg-gradient-to-t from-gray-800 to-gray-900 h-[17rem] items-center justify-around p-8 rounded-2xl shadow-lg  md:w-[20rem] w-full">
            <h3 className="bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text text-5xl font-bold text-blue-700">Premium</h3>
            <p className="text-xl text-gray-300 font-light">
                Buy 240 Credits
            </p>
            <span className="absolute top-0 -rotate-45 -left-10 text-xs text-yellow-900 py-1 px-3 rounded-md bg-yellow-600">0.08$ /image</span>
            <button onClick={onOpen} className="py-3 px-5 bg-gradient-to-r from-purple-700 to-blue-600 rounded-md font-light text-lg hover:scale-110 transition-all ">
              Buy in 20$
            </button>
          </div>
        </div>
        <PaypalPayment isOpen={isOpen} onClose={onClose} />
    </main>
  );
};

export default Pricing;
