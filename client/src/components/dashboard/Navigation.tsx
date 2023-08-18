import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context";
import { googleLogout } from "@react-oauth/google";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { Avatar, Menu, MenuButton, MenuList, MenuItem, Button, Heading, Stack } from "@chakra-ui/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  const { user, logoutUser } = useContext(UserContext) as UserContextType;
  console.log(user)
  return (
    <nav className="flex items-center justify-between px-10 py-4">
      <Menu>
        <MenuButton position="relative">
          <Avatar src={user.picture} />
          <div className="absolute w-10 h-10 rounded-xl bg-purple-600 top-0 blur-xl"></div>
        </MenuButton>   
        <MenuList display="flex" flexDirection="column" gap="1rem" padding="2rem" backgroundColor="gray.900" border="none">
          <Stack textAlign="center">
            <h2 className="text-4xl font-light">{user.name}</h2>
            <p className="text-sm font-light text-gray-500">{user.email}</p>
          </Stack>
          <MenuItem backgroundColor="gray.800" borderRadius="lg">
              Account Settings
          </MenuItem>
          <Button colorScheme="purple" textColor="white">
            Sign Out
          </Button>
        </MenuList>
      </Menu>      
    </nav>
  );
};
export default Navigation;
