import React,{useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SignIn from "./Pages/SignIn";
import { UserContextProvider } from "./Context/UserContextProvider";
import ProtectedRoute from "./helpers/ProtectedRoute";
import { UserContext } from "./Context/UserContextProvider";
import Pricing from "./Pages/Pricing";
import Dashboard from "./Pages/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";
import Activity from "./Pages/Activity";
import { DarkThemeContext } from "./Context/DarkThemeContext";
import { ICreditsContextValues } from "./types/Context/credits";
import { CreditContext } from "./Context/CreditsContext";
import { TermsAndConditions } from "./Pages/TermsAndConditions";
import { AppWrapper } from "./components/Wrapper";
import { IColorModeState } from "./types/Context/darkmode";

const AppRoutes = () => {
  const {user} = useContext(UserContext)
  const {credits} = useContext(CreditContext) as ICreditsContextValues
  const {isDarkMode} = useContext(DarkThemeContext) as IColorModeState

  return (
    <AppWrapper theme={isDarkMode ? "dark" : ""}>
      <ChakraProvider>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signin" element={
                  <ProtectedRoute currentPath="/signin" redirectPath="/" user={user as object} credits={credits as number}>
                    <SignIn />
                  </ProtectedRoute>
                } />
                <Route path="/pricing" element={
                  <ProtectedRoute currentPath="/pricing" redirectPath="/signin" user={user as object} credits={credits as number}>
                      <Pricing />
                  </ProtectedRoute>
                } />
                  <Route path="/dashboard" element={
                    <ProtectedRoute currentPath="/dashboard" redirectPath="/signin" user={user as object} credits={credits as number}>
                        <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/dashboard/activity" element={
                    <ProtectedRoute currentPath="/dashboard/activity" redirectPath="/signin" user={user as object} credits={credits as number}>
                        <Activity />
                    </ProtectedRoute>
                  } />
                  <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              </Routes>
          </BrowserRouter>
      </ChakraProvider>
    </AppWrapper>
  );
};

export default AppRoutes;
