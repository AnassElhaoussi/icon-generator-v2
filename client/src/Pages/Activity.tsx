import { UserContext } from "../Context/UserContextProvider";
import {
  Stack,
  Text,
  Heading,
  Card,
  Image,
  Flex,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { useContext, useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { retrieveGenerations } from "../api";
import { Link } from "react-router-dom";
import { faArrowLeft, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faCheck, faDiamond } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@chakra-ui/react";
import { CreditContext } from "../Context/CreditsContext";
import { ICreditsContextValues } from "../types/Context/credits";
import CountUp from "react-countup";
import LoadingSkeleton from "../components/activity/LoadingSkeleton";
import DrawerFC from "../components/activity/Drawer";
import { DarkThemeContext } from "../Context/DarkThemeContext";
import { IColorModeState } from "../types/Context/darkmode";
import { notFound } from "../images";
import { IGeneration } from "../api/types";
import { Helmet } from "react-helmet";

const Activity = () => {
  const { user } = useContext(UserContext);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const navRef = useRef<HTMLInputElement>(null);
  const [generation, setGeneration] = useState<IGeneration | null>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [filteredGenerations, setFilteredGenerations] = useState<
    [] | IGeneration[]
  >([]);
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["generations"],
    queryFn: () => retrieveGenerations(user?.email as string),
  });

  const { isDarkMode } = useContext(DarkThemeContext) as IColorModeState;
  const totalNumOfGenerations = data?.data.length;
  const generatedImages =
    (data?.data.length as number) > 0 &&
    data?.data.map(({ URLs }) => URLs.length).reduce((a, b) => a + b);
  const { credits } = useContext(CreditContext) as ICreditsContextValues;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  useEffect(() => {
    const filteredArr = data?.data.filter((generation) =>
      generation.iconObject
        .toLowerCase()
        .includes(searchValue?.toLowerCase() as string)
    );
    setFilteredGenerations(filteredArr as IGeneration[] | []);
  }, [searchValue]);

  useEffect(
    () =>
      navRef.current?.scrollIntoView({
        behavior: "smooth",
      }),
    []
  );
  return (
    <section>
      <Helmet>
        <html lang="en" />
        <title>Activity</title>
        <meta
          name="description"
          content="Activity : Gain more control over your icons!"
        />
        <meta
          name="keywords"
          content="Download Icons, AI, AI icons, 3d illustrations, 3d vectors, pixel art, 3d style, design tool"
        ></meta>
      </Helmet>
      <Stack
        overflow="hidden"
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
        gap="4rem"
        className="bg-gray-200 dark:bg-[#141414]"
        fontFamily="Poppins, sans-serif"
      >
        <Flex
          ref={navRef}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="gray.100"
          className="dark:bg-gray-900"
          paddingY="1rem"
          paddingX="2rem"
          width="full"
        >
          <Heading
            fontSize="1.5rem"
            fontFamily="Poppins, sans-serif"
            fontWeight="bold"
            className="dark:text-white text-gray-800"
          >
            My activity
          </Heading>
          <Link to="/dashboard">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="dark:text-white text-gray-700 cursor-pointer"
            />
          </Link>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap="2rem"
        >
          <Card
            position="relative"
            minWidth="15rem"
            padding="1rem"
            className="dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-800 bg-white"
            shadow="xl"
            borderRadius="xl"
          >
            <FontAwesomeIcon
              icon={faCheck}
              className="absolute right-5 dark:text-white text-blue-600"
            />
            <Heading
              className="dark:text-white text-blue-600"
              fontFamily="Poppins, sans-serif"
              as="h2"
              fontSize="8xl"
            >
              <CountUp end={totalNumOfGenerations as number} duration={0.75} />
            </Heading>
            <Text
              className="dark:text-gray-200 text-gray-700"
              fontWeight="light"
            >
              Generations made
            </Text>
          </Card>
          <Card
            position="relative"
            minWidth="15rem"
            padding="1rem"
            className="dark:bg-gradient-to-r dark:from-yellow-500 dark:to-yellow-800 bg-white"
            shadow="xl"
            borderRadius="xl"
          >
            <FontAwesomeIcon
              icon={faImage}
              className="absolute right-5 dark:text-white text-yellow-600"
            />
            <Heading
              className="dark:text-white text-yellow-600"
              fontFamily="Poppins, sans-serif"
              as="h2"
              fontSize="8xl"
            >
              <CountUp end={generatedImages as number} duration={0.75} />
            </Heading>
            <Text
              className="dark:text-gray-200 text-gray-700"
              fontWeight="light"
            >
              Images generated
            </Text>
          </Card>
          <Card
            position="relative"
            minWidth="15rem"
            padding="1rem"
            className="dark:bg-gradient-to-r dark:from-purple-500 dark:to-purple-800 bg-white"
            shadow="xl"
            borderRadius="xl"
          >
            <FontAwesomeIcon
              icon={faDiamond}
              className="absolute right-5 dark:text-white text-purple-600"
            />
            <Heading
              className="dark:text-white text-purple-600"
              fontFamily="Poppins, sans-serif"
              as="h2"
              fontSize="8xl"
            >
              <CountUp end={credits as number} duration={0.75} />
            </Heading>
            <Text
              className="dark:text-gray-200 text-gray-700"
              fontWeight="light"
            >
              Credits left
            </Text>
          </Card>
        </Flex>
        <Stack padding="2rem" gap="2rem" alignItems="center" width="full">
          <VStack textAlign="center">
            <Heading
              fontFamily="Poppins, sans-serif"
              textColor="gray.800"
              className="dark:text-gray-200"
              fontWeight="semibold"
              fontSize="4xl"
            >
              Generations
            </Heading>
            <Text textColor="gray.500" className="dark:text-gray-600 ">
              {isSuccess &&
                (data.data.length === 0
                  ? "You've got no generations"
                  : "These, are your generations, you can now download them")}
            </Text>
          </VStack>
          {isSuccess && data.data.length === 0 && (
            <Image
              src={notFound}
              alt="generations_not_found"
              maxWidth="50rem"
            />
          )}
          {isSuccess && data.data.length > 0 && (
            <input
              placeholder="Search for icons by their name.."
              value={searchValue as string}
              onChange={handleInputChange}
              className="w-1/3 py-2 px-4 rounded-full dark:bg-zinc-900 outline-none dark:text-white bg-gray-300 text-black"
            />
          )}
          <Flex
            gap="2rem"
            flexWrap="wrap"
            justifyContent="center"
            paddingTop="2rem"
            paddingX="5rem"
          >
            {isLoading && <LoadingSkeleton isDarkMode={isDarkMode} />}
            {isSuccess &&
              data.data.length > 0 &&
              (!searchValue
                ? data?.data
                    .map((generation) => (
                      <Card
                        display="flex"
                        borderRadius="2xl"
                        paddingBottom="2rem"
                        shadow="2xl"
                        className="bg-gradient-to-t dark:from-zinc-900 dark:to-black from-gray-100 to-gray-300 lg:w-[25rem] w-full hover:-translate-y-10 transition-all"
                      >
                        <Image
                          src={generation.URLs[0]}
                          height={40}
                          width="full"
                          objectFit="cover"
                          borderTopRadius="2xl"
                        />
                        <Flex justifyContent="space-between" padding="1rem">
                          <Text
                            className="text-blue-800 bg-blue-500 px-2 mb-2 rounded-lg"
                            textAlign="end"
                          >
                            {generation.isPremium ? "1024x1024" : "512x512"}
                          </Text>
                          <FontAwesomeIcon
                            icon={faFileDownload}
                            className="cursor-pointer dark:text-white text-gray-700"
                            onClick={() => {
                              setGeneration(generation);
                              onOpen();
                            }}
                          />
                          {generation.isPremium && (
                            <Badge
                              backgroundColor="yellow.500"
                              textColor="yellow.800"
                            >
                              <FontAwesomeIcon
                                icon={faDiamond}
                                className="text-yellow-800"
                              />
                              Premium
                            </Badge>
                          )}
                        </Flex>
                        <VStack
                          display="flex"
                          alignItems="center"
                          gap="0.5rem"
                          paddingX="2rem"
                          textAlign="center"
                        >
                          <Flex
                            position="relative"
                            alignItems="center"
                            gap="0.5rem"
                          >
                            <div
                              style={{ backgroundColor: generation.color }}
                              className="absolute left-0 p-1 rounded-full w-5 h-5"
                            ></div>
                            <Heading
                              display="flex"
                              alignItems="center"
                              fontFamily="Poppins, sans-serif"
                              marginLeft="2rem"
                              textColor="gray.700"
                              className="dark:text-gray-200 line-clamp-1 "
                              fontWeight="semibold"
                              fontSize="9vmin"
                              noOfLines={1}
                            >
                              {generation.iconObject}
                            </Heading>
                            <span className="text-2xl font-light ml-2 text-blue-600">
                              {`(${generation.n})`}{" "}
                            </span>
                          </Flex>
                          <Text fontSize="sm" textColor="gray.500">
                            {generation.iconDescription}
                          </Text>
                          <Text
                            backgroundColor="yellow.500"
                            textColor="yellow.900"
                            fontSize="sm"
                            className="w-fit rounded-md py-1 px-3 mt-3"
                          >
                            {generation.style}{" "}
                          </Text>
                        </VStack>
                      </Card>
                    ))
                    .reverse()
                : filteredGenerations
                    ?.map((generation) => (
                      <Card
                        display="flex"
                        width="25rem"
                        borderRadius="2xl"
                        paddingBottom="2rem"
                        shadow="2xl"
                        backgroundColor={isDarkMode ? "#191919" : "gray.200"}
                        className="hover:-translate-y-10 transition-all"
                      >
                        <Image
                          src={generation.URLs[0]}
                          height={40}
                          width="full"
                          objectFit="cover"
                          borderTopRadius="2xl"
                        />
                        <Flex justifyContent="space-between" padding="1rem">
                          <Text
                            className="text-blue-800 bg-blue-500 px-2 mb-2 rounded-lg"
                            textAlign="end"
                          >
                            512x512
                          </Text>
                          <FontAwesomeIcon
                            icon={faFileDownload}
                            className="cursor-pointer dark:text-white text-gray-700"
                            onClick={() => {
                              setGeneration(generation);
                              onOpen();
                            }}
                          />
                        </Flex>
                        <VStack
                          display="flex"
                          alignItems="center"
                          gap="0.5rem"
                          paddingX="2rem"
                          textAlign="center"
                        >
                          <Flex
                            position="relative"
                            alignItems="center"
                            gap="0.5rem"
                          >
                            <div
                              style={{ backgroundColor: generation.color }}
                              className="absolute left-0 p-1 rounded-full w-5 h-5"
                            ></div>
                            <Heading
                              display="flex"
                              alignItems="center"
                              fontFamily="Poppins, sans-serif"
                              marginLeft="2rem"
                              textColor="gray.700"
                              className="dark:text-gray-200 line-clamp-1 "
                              fontWeight="black"
                              fontSize="8vmin"
                              noOfLines={1}
                            >
                              {generation.iconObject}
                            </Heading>
                            <span className="text-2xl font-light ml-2 text-blue-600">
                              {`(${generation.n})`}{" "}
                            </span>
                          </Flex>
                          <Text fontSize="sm" textColor="gray.500">
                            {generation.iconDescription}
                          </Text>
                          <Text
                            backgroundColor="yellow.500"
                            textColor="yellow.900"
                            fontSize="sm"
                            className="w-fit rounded-md py-1 px-3 mt-3"
                          >
                            {generation.style}{" "}
                          </Text>
                        </VStack>
                      </Card>
                    ))
                    .reverse())}
          </Flex>
        </Stack>
        <DrawerFC
          isOpen={isOpen}
          onClose={onClose}
          generation={generation as IGeneration}
        />
      </Stack>
    </section>
  );
};

export default Activity;
