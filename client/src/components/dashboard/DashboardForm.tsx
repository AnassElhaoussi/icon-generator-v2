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
import { CreditsContextType, ICreditsContextValues } from "../../types/Context/credits";
import { useSearchParams } from "react-router-dom";
import { PurchaseContext } from "../../Context/PurchaseContext";
import { IPurchaseContextValues } from "../../types/Context/payment";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context/signin";

const DashboardForm = () => {
  const [chosenColor, setChosenColor] = useState<null | string>(null);
  const [hoveredColor, setHoveredColor] = useState<null | string>(null);
  const [iconObject, setIconObject] = useState<null | string>(null);
  const [iconDescription, setIconDescription] = useState<null | string>(null);
  const [chosenStyle, setChosenStyle] = useState<IconStyleEnum | null>(null);
  const [isInputOnBlur1, setIsInputOnBlur1] = useState<boolean>(false);
  const [isInputOnBlur2, setIsInputOnBlur2] = useState<boolean>(false);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {credits} = useContext(CreditContext) as ICreditsContextValues
  const {user} = useContext(UserContext) as UserContextType
  const [searchParams] = useSearchParams()
  const {isPaymentSuccessful, creditsPurchased, setIsPaymentSuccessful} = useContext(PurchaseContext) as IPurchaseContextValues

  const chooseColor = (hexColor: string) => setChosenColor(hexColor);
  const onMouseEnter = (colorName: string) => setHoveredColor(colorName);
  const onMouseLeave = () => setHoveredColor("");
  const isCustomColor = defaultColors.every(
    (colorObj) => chosenColor !== null && chosenColor !== colorObj.color
  );

  const toast = useToast()

  useEffect(() => {
    if(searchParams.get("payment") && isPaymentSuccessful) {
      toast({
        title: `Payment successful (${creditsPurchased as number} credits purchased) `,
        description: `Your total amount of credits is now ${credits as number}`,
        isClosable: true,
        duration: 9000,
        status: "success"
      })
      setIsPaymentSuccessful(false)
    } else if (searchParams.get("account_created")) {
      toast({
        title: `Hello ${user.name}`,
        description: "Your account is successfully created!",
        status: "success",
        duration: 9000,
        isClosable: true
      })
    }
  }, [])

  return (
    <VStack width="full" alignItems="start" >
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
            textColor="gray.300"
          >
            1- What's your icon object ? <span className="text-red-600">*</span>
          </FormLabel>
          <Flex alignItems="center" gap={3}>
            {isInputOnBlur1 && (iconObject?.trim().length as number) > 0 && (
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 text-xl"
              />
            )}
            <InputGroup>
              <InputRightElement children={<FontAwesomeIcon icon={faIcons} className="text-gray-300" />} />
              <Input
                variant="outline"
                backgroundColor="#121212"
                border="none"
                placeholder="Example : Bird"
                borderRadius="full"
                shadow="2xl"
                fontWeight="light"
                textColor="gray.400"
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
                textColor="gray.300"
              >
                3- Describe your icon precisely{" "}<span className="text-red-600">*</span>
              </FormLabel>
            
          <Flex alignItems="center" gap={3}>
            {isInputOnBlur2 &&
              (iconDescription?.trim().length as number) > 0 && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 text-xl"
                />
              )}
            <InputGroup>
              <InputRightElement children={<FontAwesomeIcon icon={faPen} className="text-gray-300" />} />
              <Input
                variant="outline"
                backgroundColor="#121212"
                border="none"
                placeholder="Example : Cute and Happy, Angry.."
                borderRadius="full"
                shadow="2xl"
                fontWeight="light"
                textColor="gray.400"
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
                textColor="gray.300"
              >
                3- Choose the main color of your icon wisely{" "}<span className="text-red-600">*</span>
              </FormLabel>
              <Text className="text-gray-500 text-sm font-normal">Choose from our default colors to start generating your icons</Text>
            </Stack>
          <Stack gap="1rem">
            <Flex gap="2rem" alignItems="center" flexWrap="wrap">
              {defaultColors.map(({ name, color }, id) => (
                <VStack key={id} onClick={
                  () => chosenColor === color 
                  ? setChosenColor(null) 
                  : chooseColor(color)
                }>
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
                  <h4 className="text-sm  font-light text-gray-300 font-light">{name}</h4>
                </VStack>
              ))}
            </Flex>
            <Stack gap="0.8rem">
              <Text textColor="gray.600" fontSize="sm">Use our color customizer for your specific cases</Text>
              <button className="bg-gradient-to-r from-gray-900 to-gray-800 w-fit text-white py-2 px-4 rounded-md"
              onClick={onOpen}
              >
                Color Customizer
              </button>
            </Stack>
          </Stack>
          {isCustomColor && (
            <VStack alignItems="start" gap={4}>
              <Flex alignItems="center" gap={3}>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 text-xl"
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
            setChosenStyle={setChosenStyle} />
            <GenerateImage
              chosenColor={chosenColor}
              iconObject={iconObject}
              iconDescription={iconDescription}
              chosenStyle={chosenStyle}
            />
          </Stack>
      </VStack>
    </VStack>
  );
};
export default DashboardForm;
