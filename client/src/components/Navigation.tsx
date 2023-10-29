import React, { useEffect, useState, useContext } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../Context/UserContextProvider";
import { googleLogout } from "@react-oauth/google";
import { UserContextType } from "../types/Context/signin";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isNavActive, setIsNavActive] = useState(
    window.innerWidth > 1024 ? true : false
  );
  const { user, logoutUser } = useContext(UserContext) as UserContextType;

  return (
    <nav className="relative flex lg:flex-row flex-col justify-between items-center dark:text-gray-200 text-gray-800 px-10 py-5 font-light">
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
              href="#home"
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-700 w-full text-center transition-all"
            >
              Home
            </a>
            <a
              href="#about"
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-700 w-full text-center transition-all"
            >
              About
            </a>
            <a
              href="#guide"
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-700 w-full text-center transition-all"
            >
              Guide
            </a>
            <a
              href="#features"
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-700 w-full text-center transition-all"
            >
              Features
            </a>

            <Link to="/pricing"
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-700 w-full text-center transition-all"
            >
              Pricing
            </Link>
            <a
              href="#footer"
              className="py-4 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-blue-700 w-full text-center transition-all"
            >
              Contact
            </a>
          </div>
          {!user && (
            <Link to="/signin">
              <button className="px-5 py-2 bg-blue-700 rounded-lg hover:scale-110 transition-all">
                Sign in
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
