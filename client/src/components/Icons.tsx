import { Image } from "@chakra-ui/react";
import {
  g_img1,
  g_img2,
  g_img3,
  g_img5,
  g_img4,
  g_img6,
  g_img7,
  g_img8,
  g_img10,
  g_img9,
  g_img12,
  g_img11,
} from "../images";
import {
  Flex,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";

const Icons = () => {
  const dateObj = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Stack gap="5rem">
      <Flex className="flex items-center justify-center flex-wrap gap-5 px-20">
        <Image
          src={g_img1}
          className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 md:w-20 w-14 "
        />
        <Image
          src={g_img2}
          className="rounded-2xl shadow-2xl shadow-purple-600 dark:shadow-purple-800 md:w-20 w-14"
        />
        <Image
          src={g_img3}
          className="rounded-2xl shadow-2xl shadow-green-400 dark:shadow-green-800 md:w-20 w-14"
        />
        <Image
          src={g_img4}
          className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 md:w-20 w-14 "
        />
        <Image
          src={g_img5}
          className="rounded-2xl shadow-2xl shadow-purple-600 dark:shadow-purple-800 md:w-20 w-14"
        />
        <Image
          src={g_img6}
          className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 md:w-20 w-14 "
        />
        <Image
          src={g_img7}
          className="rounded-2xl shadow-2xl shadow-purple-600 dark:shadow-purple-800 md:w-20 w-14"
        />
        <Image
          src={g_img8}
          className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 md:w-20 w-14 "
        />
        <Image
          src={g_img9}
          className="rounded-2xl shadow-2xl shadow-purple-600 dark:shadow-purple-800 md:w-20 w-14"
        />
        <Image
          src={g_img10}
          className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 md:w-20 w-14"
        />
        <Image
          src={g_img11}
          className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 md:w-20 w-14"
        />
        <Image
          src={g_img12}
          className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 md:w-20 w-14 "
        />
      </Flex>
      <Flex
        flexDirection="row"
        px="10"
        gap="1rem"
        flexWrap="wrap"
      >
        <Stat className="flex flex-col items-center justify-center">
          <StatLabel fontSize="2xl" className="dark:text-gray-200">Total Icons Generated</StatLabel>
          <StatNumber fontSize="xl" fontWeight="bold" textColor="blue.500">123</StatNumber>
          <StatHelpText className="dark:text-gray-500">
            August 28 - {monthNames[dateObj.getMonth()]}{" "}{dateObj.getDate()}
          </StatHelpText>
        </Stat>
        <Stat className="flex flex-col items-center justify-center">
          <StatLabel fontSize="2xl" className="dark:text-gray-200">Premium Icons Generated</StatLabel>
          <StatNumber fontSize="xl" fontWeight="bold" textColor="yellow.500">55</StatNumber>
          <StatHelpText className="dark:text-gray-500">
            October 12 - {monthNames[dateObj.getMonth()]}{" "}{dateObj.getDate()}
          </StatHelpText>
        </Stat>
      </Flex>
    </Stack>
  );
};

export default Icons;
