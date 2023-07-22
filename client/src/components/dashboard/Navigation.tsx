import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context";
import { googleLogout } from "@react-oauth/google";

const Navigation = () => {
  const { user, logoutUser } = useContext(UserContext) as UserContextType;
  console.log(user);
  return (
    <nav>
      <button
        onClick={() => {
          logoutUser();
          googleLogout();
          location.href = "/";
        }}
      >
        signout
      </button>
    </nav>
  );
};
export default Navigation;
