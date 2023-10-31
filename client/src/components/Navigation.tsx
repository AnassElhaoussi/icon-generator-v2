import React, { useEffect, useState, useContext } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../Context/UserContextProvider";
import { googleLogout } from "@react-oauth/google";
import { UserContextType } from "../types/Context/signin";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { DarkThemeContext } from "../Context/DarkThemeContext";
import { IColorModeState } from "../types/Context/darkmode";

const Navigation = () => {
  const [isNavActive, setIsNavActive] = useState(
    window.innerWidth > 1024 ? true : false
  );
  const { user, logoutUser } = useContext(UserContext) as UserContextType;
  const {isDarkMode, setIsDarkMode} = useContext(DarkThemeContext) as IColorModeState 

  const setColorModeState = () => {
    setIsDarkMode((prev) => !prev)
    localStorage.setItem("dark-mode", JSON.stringify(!isDarkMode))
  }
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
        <div className="lg:static absolute z-10 top-20 lg:w-auto w-full flex lg:flex-row flex-col lg:gap-32 gap-5 lg:py-0 py-5 items-center lg:bg-transparent dark:lg:bg-transparent dark:bg-gray-900 bg-gray-300">
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
            <Icon as={isDarkMode ? SunIcon : MoonIcon} 
            className="hover:bg-gray-300 hover:dark:bg-gray-900 p-2 rounded-md text-3xl cursor-pointer hover:scale-105 transition-all select-none"
            onClick={setColorModeState}
            />
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
