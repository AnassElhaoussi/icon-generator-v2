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

const AppRoutes = () => {
  const {user} = useContext(UserContext)
  return (
    <UserContextProvider>
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
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </UserContextProvider>
  );
};

export default AppRoutes;
