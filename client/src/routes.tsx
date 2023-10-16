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
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { CreditsContextProvider } from "./Context/CreditsContext";
import { AlertMountingStateProvider } from "./Context/AlertMountingStateContext";

const AppRoutes = () => {
  const {user} = useContext(UserContext)
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <CreditsContextProvider>
        <UserContextProvider>
          <DarkThemeProvider>
            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<App />} />
                      <Route path="/signin" element={
                        <ProtectedRoute currentPath="/signin" redirectPath="/" user={user as object}>
                          <SignIn />
                        </ProtectedRoute>
                      } />
                      <Route path="/pricing" element={
                        <ProtectedRoute currentPath="/pricing" redirectPath="/dashboard" user={user as object}>
                            <Pricing />
                        </ProtectedRoute>
                      } />
                        <Route path="/dashboard" element={
                          <ProtectedRoute currentPath="/dashboard" redirectPath="/signin" user={user as object}>
                            <AlertMountingStateProvider>
                                <Dashboard />
                            </AlertMountingStateProvider>
                          </ProtectedRoute>
                        } />
                        <Route path="/dashboard/activity" element={
                          <ProtectedRoute currentPath="/dashboard/activity" redirectPath="/signin" user={user as object}>
                              <Activity />
                          </ProtectedRoute>
                        } />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
          </DarkThemeProvider>
        </UserContextProvider>
      </CreditsContextProvider>
    </QueryClientProvider>
  );
};

export default AppRoutes;
