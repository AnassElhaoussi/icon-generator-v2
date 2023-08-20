import React, { useContext } from "react";
import { UserContextType } from "../types/Context/signin";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/dashboard/Navigation";
import { DarkThemeContext } from "../Context/DarkThemeContext";
import { IColorModeState } from "../types/Context/darkmode";

const Dashboard = () => {
  const { isDarkMode } = useContext(DarkThemeContext) as IColorModeState;
  return (
    <main className={!isDarkMode ? "light" : ""}>
      <main className="bg-black text-white font-body h-screen">
        <Navigation />
      </main>
    </main>
  );
};

export default Dashboard;
