import React, { useContext } from "react";
import { UserContextType } from "../types/Context/signin";
import { useNavigate } from "react-router-dom";
import { DarkThemeContext } from "../Context/DarkThemeContext";
import { IColorModeState } from "../types/Context/darkmode";
import DashboardForm from "../components/dashboard/DashboardForm";
import {Stack} from "@chakra-ui/react"
import Navigation from "../components/dashboard/Navigation";
import { AlertMountingStateProvider, AlertMountingStateContext } from "../Context/AlertMountingStateContext";


const Dashboard = () => {
  const { isDarkMode } = useContext(DarkThemeContext) as IColorModeState;
  
  return (
      <main>
        <Stack 
        display="flex" 
        flexDirection="column" 
        columnGap="2rem" 
        backgroundColor="gray.800"
        height="full" 
        className="font-poppins light:bg-gray-100">
            <Navigation />
            <DashboardForm />
        </Stack>
      </main>
  );
};

export default Dashboard;
