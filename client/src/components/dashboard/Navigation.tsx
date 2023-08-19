import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context";
import { googleLogout } from "@react-oauth/google";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { Avatar, Menu, MenuButton, MenuList, MenuItem, Button, Heading, Stack } from "@chakra-ui/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const { user, logoutUser } = useContext(UserContext) as UserContextType;
  const signOut = async () => {
    const res = await logoutUser(user as object)
    if(res.status === 200) {
      location.href = "/"
    }
  }
  return (
    <nav className="flex items-center justify-between px-10 py-4">
      <Menu>
        <MenuButton position="relative">
          <Avatar src={user.picture} />
          <div className="absolute w-10 h-10 rounded-xl bg-purple-600 top-0 blur-xl"></div>
        </MenuButton>   
        <MenuList display="flex" flexDirection="column" gap="1rem" padding="2rem" backgroundColor="gray.900" border="none">
          <Stack textAlign="center">
            <h2 className="flex items-center gap-x-2 text-4xl font-light text-purple-300"><span className="text-2xl">👋</span>{user.name}</h2>
            <p className="text-sm font-light text-gray-500">{user.email}</p>
          </Stack>
          <MenuItem backgroundColor="gray.800" borderRadius="lg" fontWeight="600">
            Account Settings
          </MenuItem>
          <MenuItem backgroundColor="gray.800" borderRadius="lg" fontWeight="600">
            Your Activity
          </MenuItem>
          <Button colorScheme="purple" textColor="white" onClick={signOut}>
            Sign Out
          </Button>
        </MenuList>
      </Menu>
      <ul className="font-semibold"><span className="text-purple-400 text-lg">0</span> Credits Left</ul>
    </nav>
  );
};
export default Navigation;
