import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context";
import { googleLogout } from "@react-oauth/google";
import axios from "axios"

const Navigation = () => {
  const { user, logoutUser } = useContext(UserContext) as UserContextType;
  const logout = async () => {
    const res = await logoutUser()
    googleLogout()
    if(res.status === 200) {
      location.href = "/"
    }
  }
  console.log(user);
  return (
    <nav>
      <button
        onClick={logout}
      >
        signout
      </button>
    </nav>
  );
};
export default Navigation;
