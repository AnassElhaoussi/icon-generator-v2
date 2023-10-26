import React, { useContext } from "react";
import { UserContextType } from "../types/Context/signin";
import { useNavigate } from "react-router-dom";
import { DarkThemeContext } from "../Context/DarkThemeContext";
import { IColorModeState } from "../types/Context/darkmode";
import DashboardForm from "../components/dashboard/DashboardForm";
import {Stack} from "@chakra-ui/react"
import Navigation from "../components/dashboard/Navigation";
import { AlertMountingStateProvider, AlertMountingStateContext } from "../Context/AlertMountingStateContext";
import InfosCard from "../components/dashboard/InfosCard";

const Dashboard = () => {
  const { isDarkMode } = useContext(DarkThemeContext) as IColorModeState;
  
  return (
      <main>
        <Stack 
        display="flex" 
        flexDirection="column" 
        gap="4rem" 
        height="full" 
        className="bg-gradient-to-r from-black to-gray-800 font-poppins ">
            <Navigation />
            <InfosCard />
            <DashboardForm />
        </Stack>
      </main>
  );
};

export default Dashboard;
