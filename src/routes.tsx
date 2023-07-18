import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SignIn from "./Pages/SignIn";
import { UserContextProvider } from "./Context/UserContextProvider";

const AppRoutes = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default AppRoutes;
