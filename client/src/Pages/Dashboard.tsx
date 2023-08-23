import React, { useContext } from "react";
import { UserContextType } from "../types/Context/signin";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/dashboard/Navigation";
import { DarkThemeContext } from "../Context/DarkThemeContext";
import { IColorModeState } from "../types/Context/darkmode";
import DashboardForm from "../components/dashboard/DashboardForm";
import {Stack} from "@chakra-ui/react"

const Dashboard = () => {
  const { isDarkMode } = useContext(DarkThemeContext) as IColorModeState;
  return (
    <main className={!isDarkMode ? "light" : ""}>
      <Stack display="flex" flexDirection="column" columnGap="2rem" backgroundColor="gray.900" height="100vh" className="font-poppins light:bg-gray-100">
        <Navigation />
        <DashboardForm />
      </Stack>
    </main>
  );
};

export default Dashboard;
