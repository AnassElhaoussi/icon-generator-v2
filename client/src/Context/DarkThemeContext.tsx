import React, { useState, createContext, useEffect, useRef } from "react";
import { IColorModeState } from "../types/Context/darkmode";

export const DarkThemeContext = createContext<undefined | IColorModeState>(
  undefined
);

export const DarkThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const storedDarkModeValue: string | null = localStorage.getItem("dark-mode")
    const initialDarkModeValue = storedDarkModeValue === null ? true : JSON.parse(storedDarkModeValue) as boolean;
    const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkModeValue);

  return (
    <DarkThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
