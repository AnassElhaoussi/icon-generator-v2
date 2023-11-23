import React, { useContext, useState, useEffect } from "react";
import {
  VStack,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Flex,
  Stack,
  Heading,
  Text,
  useDisclosure,
  InputGroup,
  InputRightElement,
  useToast,
  Icon,
  Image,
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { defaultColors } from "../../constants/colors";
import { hexToRgb } from "../../helpers/hexToRgb";
import DashboardColorPicker from "./ColorPicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faIcons, faPen } from "@fortawesome/free-solid-svg-icons";
import IconStyles from "./IconStyles";
import GenerateImage from "./GenerateImage";
import { IconStyleEnum } from "../../types/icon_styles";
import { CreditContext } from "../../Context/CreditsContext";
import {
  CreditsContextType,
  ICreditsContextValues,
} from "../../types/Context/credits";
import { useSearchParams } from "react-router-dom";
import { PurchaseContext } from "../../Context/PurchaseContext";
import { IPurchaseContextValues } from "../../types/Context/payment";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context/signin";
import { DarkThemeContext } from "../../Context/DarkThemeContext";
import { IColorModeState } from "../../types/Context/darkmode";
import { CheckIcon } from "@chakra-ui/icons";

const storedIsPremValue: string | null = localStorage.getItem("is-premium");
const initialIsPremValue =
  storedIsPremValue === null
    ? false
    : (JSON.parse(storedIsPremValue) as boolean);

const DashboardForm = () => {
  const [chosenColor, setChosenColor] = useState<null | string>(null);
  const [hoveredColor, setHoveredColor] = useState<null | string>(null);
  const [iconObject, setIconObject] = useState<null | string>(null);
  const [iconDescription, setIconDescription] = useState<null | string>(null);
  const [chosenStyle, setChosenStyle] = useState<IconStyleEnum | null>(null);
  const [isInputOnBlur1, setIsInputOnBlur1] = useState<boolean>(false);
  const [isInputOnBlur2, setIsInputOnBlur2] = useState<boolean>(false);
  const [isPremium, setIsPremium] = useState<boolean>(initialIsPremValue);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { credits } = useContext(CreditContext) as ICreditsContextValues;
  const { user } = useContext(UserContext) as UserContextType;
  const [searchParams] = useSearchParams();
  const { isPaymentSuccessful, creditsPurchased, setIsPaymentSuccessful } =
    useContext(PurchaseContext) as IPurchaseContextValues;
  const { isDarkMode } = useContext(DarkThemeContext) as IColorModeState;

  const chooseColor = (hexColor: string) => setChosenColor(hexColor);
  const onMouseEnter = (colorName: string) => setHoveredColor(colorName);
  const onMouseLeave = () => setHoveredColor("");
  const isCustomColor = defaultColors.every(
    (colorObj) => chosenColor !== null && chosenColor !== colorObj.color
  );

  const toast = useToast();

  useEffect(() => {
    if (searchParams.get("payment")) {
      localStorage.setItem(
        "credits_onmount_success",
        credits?.toString() as string
      );
    }
  }, []);

  useEffect(() => {
    if (
      searchParams.get("payment") &&
      isPaymentSuccessful &&
      credits ==
        (JSON.parse(
          localStorage.getItem("credits_onmount_success") as string
        ) as number) +
          (creditsPurchased as number)
    ) {
      toast({
        title: `Payment successful (${
          creditsPurchased as number
        } credits purchased) `,
        description: `Your total amount of credits is now ${credits}`,
        isClosable: true,
        duration: 9000,
        status: "success",
      });
      setIsPaymentSuccessful(false);
    } else if (searchParams.get("account_created")) {
      toast({
        title: `Hello ${user?.name}`,
        description: "Welcome to your account!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [credits]);
  const handleVersion = () => {
    setIsPremium((prevValue) => !prevValue);
    localStorage.setItem("is-premium", JSON.stringify(!isPremium));
    console.log("hello");
  };

  return (
    <VStack width="full" alignItems="start">
      <VStack
        display="flex"
        alignItems="start"
        paddingX="4rem"
        borderRadius="1rem"
        gap="3rem"
        width="100%"
      >
        <FormControl maxWidth="25rem">
          <FormLabel
            fontSize="lg"
            width="max-content"
            fontWeight="semibold"
            className="dark:text-gray-300"
            textColor="gray.600"
          >
            1- What's your icon object ? <span className="text-red-600">*</span>
          </FormLabel>
          <Flex alignItems="center" gap={3}>
            {isInputOnBlur1 && (iconObject?.trim().length as number) > 0 && (
              <Icon
                as={CheckIcon}
                className="bg-blue-600 p-1 text-xl text-white rounded-md"
              />
            )}
            <InputGroup>
              <InputRightElement
                children={
                  <FontAwesomeIcon icon={faIcons} className="text-gray-300" />
                }
              />
              <Input
                variant="outline"
                backgroundColor={isDarkMode ? "#121212" : "gray.200"}
                border="none"
                placeholder="Example : Bird"
                borderRadius="full"
                shadow="2xl"
                fontWeight="light"
                textColor={isDarkMode ? "gray.400" : "gray.600"}
                paddingX="3rem"
                className="placeholder:text-gray-600"
                value={iconObject as string}
                onChange={(e) => setIconObject(e.target.value)}
                onFocus={() => setIsInputOnBlur1(false)}
                onBlur={() => setIsInputOnBlur1(true)}
              />
            </InputGroup>
          </Flex>
        </FormControl>
        <FormControl maxWidth="25rem">
          <FormLabel
            fontSize="lg"
            fontWeight="semibold"
            width="max-content"
            textColor="gray.600"
            className="dark:text-gray-300"
          >
            3- Describe your icon precisely{" "}
            <span className="text-red-600">*</span>
          </FormLabel>

          <Flex alignItems="center" gap={3}>
            {isInputOnBlur2 &&
              (iconDescription?.trim().length as number) > 0 && (
                <Icon
                  as={CheckIcon}
                  className="bg-blue-600 p-1 text-xl text-white rounded-md"
                />
              )}
            <InputGroup>
              <InputRightElement
                children={
                  <FontAwesomeIcon icon={faPen} className="text-gray-300" />
                }
              />
              <Input
                variant="outline"
                backgroundColor={isDarkMode ? "#121212" : "gray.200"}
                border="none"
                placeholder="Example : Cute and Happy, Angry.."
                borderRadius="full"
                shadow="2xl"
                fontWeight="light"
                textColor={isDarkMode ? "gray.400" : "gray.600"}
                paddingX="2rem"
                className="placeholder:text-gray-600"
                value={iconDescription as string}
                onChange={(e) => setIconDescription(e.target.value)}
                onFocus={() => setIsInputOnBlur2(false)}
                onBlur={() => setIsInputOnBlur2(true)}
              />
            </InputGroup>
          </Flex>
          <FormHelperText>
            Use adjectives for better results or Follow Our{" "}
            <Link to="/guide">Guide</Link>
          </FormHelperText>
        </FormControl>
        <FormControl display="flex" flexDirection="column" gap="2rem">
          <Stack spacing="-0.5">
            <FormLabel
              fontSize="lg"
              fontWeight="semibold"
              width="max-content"
              textColor="gray.600"
              className="dark:text-gray-300"
              wordBreak="break-word"
            >
              3- Choose the main color of your icon{" "}
              <span className="text-red-600">*</span>
            </FormLabel>
            <Text className="text-gray-500 text-sm font-normal">
              Choose from our default colors to start generating your icons
            </Text>
          </Stack>
          <Stack gap="1rem">
            <Flex gap="2rem" alignItems="center" flexWrap="wrap">
              {defaultColors.map(({ name, color }, id) => (
                <VStack
                  key={id}
                  onClick={() =>
                    chosenColor === color
                      ? setChosenColor(null)
                      : chooseColor(color)
                  }
                >
                  <div
                    style={{
                      backgroundColor: color,
                      transform:
                        color === chosenColor ? "scale(1.2)" : "scale(1)",
                      borderBottomWidth: name === hoveredColor ? "7px" : "0px",
                      borderColor:
                        name === hoveredColor
                          ? `rgb(${hexToRgb(color)?.r as number}, ${
                              (hexToRgb(color)?.g as number) + 80
                            }, ${(hexToRgb(color)?.b as number) + 80})`
                          : "none",
                    }}
                    onMouseEnter={() => onMouseEnter(name)}
                    onMouseLeave={onMouseLeave}
                    className="w-16 h-16 rounded-full shadow-[inset_0_-10px_16px_rgba(0,0,0,0.6)] transition-all cursor-pointer"
                  ></div>
                  <h4 className="text-sm  font-light dark:text-gray-300 text-black font-light">
                    {name}
                  </h4>
                </VStack>
              ))}
            </Flex>
            <Stack gap="0.8rem">
              <Text textColor="gray.600" fontSize="sm" fontWeight="semibold">
                Use our color customizer for your specific cases
              </Text>
              <button
                className="bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 from-gray-400 to-gray-100 w-fit dark:text-white text-gray-600 py-2 px-4 rounded-md"
                onClick={onOpen}
              >
                Color Customizer
              </button>
            </Stack>
          </Stack>
          {isCustomColor && (
            <VStack alignItems="start" gap={4}>
              <Flex alignItems="center" gap={3}>
                <Icon
                  as={CheckIcon}
                  className="bg-blue-600 p-1 text-xl text-white rounded-md"
                />
                <Heading
                  fontFamily="Poppins, sans-serif"
                  fontSize="lg"
                  textColor="gray.200"
                  fontWeight="light"
                >
                  Custom Color :{" "}
                </Heading>
              </Flex>
              <Flex alignItems="center" gap={3}>
                <div
                  style={{ backgroundColor: chosenColor as string }}
                  className="w-14 h-14 rounded-xl shadow-[inset_0_-10px_16px_rgba(0,0,0,0.6)]"
                ></div>
                <Text textColor={chosenColor as string}>{chosenColor}</Text>
              </Flex>
            </VStack>
          )}
          <DashboardColorPicker
            chosenColor={chosenColor}
            setChosenColor={setChosenColor}
            onOpen={onOpen}
            isOpen={isOpen}
            onClose={onClose}
          />
        </FormControl>
        <Stack position="relative" gap="2rem">
          <IconStyles
            chosenStyle={chosenStyle}
            setChosenStyle={setChosenStyle}
          />
          <Flex
            flexDirection="column"
            gap="0.5rem"
            alignItems="start"
            rounded="xl"
            px="3"
            userSelect="none"
          >
            <Flex alignItems="center" gap="1rem">
              {isPremium && (
                <Icon
                  as={CheckIcon}
                  className="bg-blue-600 p-1 text-xl text-white rounded-md"
                />
              )}
              <Badge
                display="flex"
                alignItems="center"
                px="3"
                rounded="md"
                gap="5px"
                color="yellow.600"
                bg="yellow.300"
                fontSize="xs"
                cursor="pointer"
                onClick={handleVersion}
                style={{
                  border: isPremium ? "2px solid white" : "2px solid transparent",
                }}
              >
                <Image
                  width="5"
                  height="5"
                  src="https://img.icons8.com/3d-fluency/94/star.png"
                  alt="star"
                  marginBottom="1"
                />
                Premium images
              </Badge>
            </Flex>
            <Text
              textColor="gray.700"
              className="dark:text-gray-300"
              fontSize="sm"
            >
              Generate 10x better images by opting for premium images (2 credits
              per image)
            </Text>
          </Flex>
          <GenerateImage
            chosenColor={chosenColor}
            iconObject={iconObject}
            iconDescription={iconDescription}
            chosenStyle={chosenStyle}
            isPremium={isPremium}
            setIsPremium={setIsPremium}
          />
        </Stack>
      </VStack>
    </VStack>
  );
};
export default DashboardForm;
