import React, { useEffect, useState, useRef } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  const [isNavActive, setIsNavActive] = useState(window.innerWidth > 1024 ? true : false);

  return (
    <nav className="relative flex lg:flex-row flex-col justify-between items-center text-gray-200 px-10 py-5 font-light ">
      <div className="flex justify-between items-center lg:w-fit w-full">
        <span className="font-black text-2xl pr-10">IconAI</span>
        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden select-none cursor-pointer"
          onClick={() => setIsNavActive(!isNavActive)}
        />
      </div>
      {isNavActive && (
        <div className="lg:static absolute z-10 top-20 lg:w-auto w-full flex lg:flex-row flex-col lg:gap-32 gap-5 lg:py-0 py-5 items-center lg:bg-transparent bg-gray-900">
          <div className="lg:w-auto w-full flex lg:flex-row lg:text-sm text-xl font-light flex-col lg:gap-x-20 items-center">
            <a
              href=""
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-500 w-full text-center transition-all"
            >
              Home
            </a>
            <a
              href=""
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-500 w-full text-center transition-all"
            >
              About
            </a>
            <a
              href=""
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-500 w-full text-center transition-all"
            >
              Pricing
            </a>
            <a
              href=""
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-500 w-full text-center transition-all"
            >
              Contact
            </a>
          </div>
          <button className="px-5 py-2 bg-blue-700 rounded-lg hover:scale-110 transition-all">
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
