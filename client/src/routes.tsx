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
import Account from "./Pages/Account";
import { DarkThemeProvider } from "./Context/DarkThemeContext";

const AppRoutes = () => {
  const {user} = useContext(UserContext)
  return (
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
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/dashboard" element={
                    <ProtectedRoute currentPath="/dashboard" redirectPath="/signin" user={user as object}>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/dashboard/account" element={
                    <ProtectedRoute currentPath="/dashboard/account" redirectPath="/signin" user={user as object}>    
                      <Account />
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
  );
};

export default AppRoutes;
