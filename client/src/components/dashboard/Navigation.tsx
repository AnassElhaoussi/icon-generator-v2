import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context/signin";
import { googleLogout } from "@react-oauth/google";
import { logo } from "../../images";
import { Link } from "react-router-dom";
import {
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Stack,
  Divider,
} from "@chakra-ui/react";
import ColorModeButton from "./ColorModeButton";

const Navigation = () => {
  const { user, logoutUser } = useContext(UserContext) as UserContextType;
  const signOut = () => {
    logoutUser()
    location.href = "/"
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="full"
      py="0.8rem"
      px="5rem"
      textColor="whiteAlpha.800"
    >
      <h2 className="text-xl font-light">Dashboard</h2>
      <Stack direction="row" gap="2rem" h="2rem">
        <ul className="font-light text-md">
          <span className="text-purple-400 text-lg">100</span> Credits Left
        </ul>
        <Divider orientation="vertical" borderColor="black" />
        <Menu>
          <MenuButton display="flex" alignItems="center" position="relative" className="hover:bg-gray-900 p-2 rounded-md">
            <Avatar src={user?.picture} size="sm" mr={1} />
            <span className="text-sm font-light">
              @{user?.given_name.toLowerCase()}
            </span>
          </MenuButton>
          <MenuList
            display="flex"
            flexDirection="column"
            gap="1rem"
            padding="2rem"
            backgroundColor="gray.900"
            border="none"
          >
            <Stack textAlign="center">
              <Text fontSize="2xl" fontWeight="bold">
                {user?.name}
              </Text>
              <p className="text-sm font-light text-gray-500">{user?.email}</p>
            </Stack>
            <Link to="activity">
              <MenuItem
                backgroundColor="gray.800"
                borderRadius="lg"
                fontWeight="600"
              >
                Your Activity
              </MenuItem>
            </Link>
            <Button colorScheme="facebook" onClick={signOut}>
              Sign Out
            </Button>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
};
export default Navigation;
