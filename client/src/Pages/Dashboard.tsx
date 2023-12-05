import React, { useContext } from "react";
import { UserContextType } from "../types/Context/signin";
import { useNavigate } from "react-router-dom";
import { DarkThemeContext } from "../Context/DarkThemeContext";
import { IColorModeState } from "../types/Context/darkmode";
import DashboardForm from "../components/dashboard/DashboardForm";
import { Stack } from "@chakra-ui/react";
import Navigation from "../components/dashboard/Navigation";
import InfosCard from "../components/dashboard/InfosCard";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { isDarkMode } = useContext(DarkThemeContext) as IColorModeState;

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Dashboard</title>
        <meta name="description" content="Dashboard : Start generating icons using IconizeAI" />
        <meta name="keywords" content="icons, AI, AI icons, 3d illustrations, 3d vectors, pixel art, 3d style, design tool, iconize ai pricing, pricing plan, 3d icons, ai logo" />
      </Helmet>
      <Stack
        display="flex"
        flexDirection="column"
        gap="3rem"
        height="full"
        className="bg-gradient-to-r dark:from-black dark:to-gray-800 from-gray-300 to-gray-100 font-poppins "
      >
        <Navigation />
        <InfosCard />
        <DashboardForm />
      </Stack>
    </main>
  );
};

export default Dashboard;
