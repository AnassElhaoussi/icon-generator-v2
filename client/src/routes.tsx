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
import { DarkThemeProvider } from "./Context/DarkThemeContext";
import { AlertMountingStateProvider } from "./Context/AlertMountingStateContext";
import { ICreditsContextValues } from "./types/Context/credits";
import { CreditContext } from "./Context/CreditsContext";

const AppRoutes = () => {
  const {user} = useContext(UserContext)
  const {credits} = useContext(CreditContext) as ICreditsContextValues
  
  return (
            <DarkThemeProvider>
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
                              <AlertMountingStateProvider>
                                  <Dashboard />
                              </AlertMountingStateProvider>
                            </ProtectedRoute>
                          } />
                          <Route path="/dashboard/activity" element={
                            <ProtectedRoute currentPath="/dashboard/activity" redirectPath="/signin" user={user as object} credits={credits as number}>
                                <Activity />
                            </ProtectedRoute>
                          } />
                      </Routes>
                  </BrowserRouter>
              </ChakraProvider>
            </DarkThemeProvider>
  );
};

export default AppRoutes;
