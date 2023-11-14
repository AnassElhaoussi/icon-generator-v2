import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context/signin";
import { CreditContext, CreditsContextProvider } from "../../Context/CreditsContext";
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
  Spinner,
  Heading,
  Image
} from "@chakra-ui/react";
import { logo } from "../../images";

import { ICreditsContextValues } from "../../types/Context/credits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";


const Navigation = () => {
  const { user, logoutUser } = useContext(UserContext) as UserContextType;
  const signOut = () => {
    logoutUser()
    location.href = "/"
  };
  const {
    credits,
    isSuccess,
    isLoading,
    isError
  } = useContext(CreditContext) as ICreditsContextValues
  
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="full"
      py="2rem"
      px="5rem"
    >
      <Link to="/">
        <Image src={logo} className="w-44" />
      </Link>
      <Stack direction="row" gap="2rem" h="2rem">
        {isLoading && <Spinner />}
        {isSuccess && <ul className="font-light text-md">
          <span className="dark:text-white text-gray-800 text-lg">{credits}</span> <FontAwesomeIcon className="text-blue-700" icon={faDiamond} />
        </ul>}
        <Link to="/pricing" className="text-blue-900 bg-blue-400 h-fit p-1 rounded-md text-sm hover:scale-105 transition-all">Buy credits</Link>
        {isError && <Text textColor="red.500">Something went wrong</Text>}
        <Divider orientation="vertical" borderColor="black" />
        <Menu>
          <MenuButton display="flex" alignItems="center" position="relative" className="dark:hover:bg-gray-900 hover:bg-gray-200 p-2 rounded-md">
            <Avatar src={user?.picture} size="sm" mr={1} />
          </MenuButton>
          <MenuList
            display="flex"
            flexDirection="column"
            gap="1rem"
            padding="2rem"
            backgroundColor="gray.200"
            className="dark:bg-gray-900"
            border="none"
          >
            <Stack textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" className="dark:text-gray-200 text-gray-800">
                {user?.name}
              </Text>
              <p className="text-sm font-light dark:text-gray-400 text-gray-600">{user?.email}</p>
            </Stack>
            <Link to="activity">
              <MenuItem
                textColor="gray.800"
                backgroundColor="gray.300"
                className="dark:text-gray-100 dark:bg-gray-800"
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
