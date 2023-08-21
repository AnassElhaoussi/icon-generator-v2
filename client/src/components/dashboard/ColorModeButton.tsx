import React, { useState, useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { DarkThemeContext } from "../../Context/DarkThemeContext";
import { IColorModeState } from "../../types/Context/darkmode";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const ColorModeButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(
    DarkThemeContext
  ) as IColorModeState;
  
  const handleColorMode = () => setIsDarkMode((isDarkModePrev) => !isDarkModePrev)

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode))
  }, [isDarkMode])

  return (
    <div
      className="relative flex cursor-pointer items-center h-8 w-20 rounded-full bg-gradient-to-l from-purple-200 to-purple-500 px-2 shadow-inner select-none"
      onClick={handleColorMode}
    >
      <FontAwesomeIcon
        icon={faMoon}
        style={{
          transform: isDarkMode ? "translate(-0.2rem)" : "translate(2.6rem)"
        }}
        className="text-purple-900 bg-purple-600 w-[0.7rem] h-[0.7rem] p-2 rounded-full transition-transform"
      />
    </div>
  );
};

export default ColorModeButton;
