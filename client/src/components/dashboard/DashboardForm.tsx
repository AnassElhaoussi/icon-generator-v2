import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { defaultColors } from "../../constants/colors";
import { hexToRgb } from "../../helpers/hexToRgb";
import DashboardColorPicker from "./ColorPicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import IconStyles from "./IconStyles";
import GenerateImage from "./GenerateImage";
import { IconStyleEnum } from "../../types/icon_styles";

const DashboardForm = () => {
  const [chosenColor, setChosenColor] = useState<null | string>(null);
  const [hoveredColor, setHoveredColor] = useState<null | string>(null);
  const [iconObject, setIconObject] = useState<null | string>(null);
  const [iconDescription, setIconDescription] = useState<null | string>(null);
  const [chosenStyle, setChosenStyle] = useState<IconStyleEnum | null>(null);
  const [isInputOnBlur1, setIsInputOnBlur1] = useState<boolean>(false);
  const [isInputOnBlur2, setIsInputOnBlur2] = useState<boolean>(false);
  const { onOpen, isOpen, onClose } = useDisclosure();

  const chooseColor = (hexColor: string) => setChosenColor(hexColor);
  const onMouseEnter = (colorName: string) => setHoveredColor(colorName);
  const onMouseLeave = () => setHoveredColor("");
  const isCustomColor = defaultColors.every(
    (colorObj) => chosenColor !== null && chosenColor !== colorObj.color
  );

  return (
    <VStack width="full" alignItems="start">
      <VStack
        display="flex"
        alignItems="start"
        paddingLeft="4rem"
        borderRadius="1rem"
        gap="1.5rem"
        width="100%"
      >
        <FormControl maxWidth="min-content">
          <FormLabel
            fontSize="md"
            width="max-content"
            textColor="gray.400"
          >
            What's your icon object ?
          </FormLabel>
          <Flex alignItems="center" gap={3}>
            {isInputOnBlur1 && (iconObject?.trim().length as number) > 0 && (
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 text-xl"
              />
            )}
            <Input
              isInvalid
              errorBorderColor="gray.700"
              border="none"
              variant="outline"
              focusBorderColor="blue.700"
              placeholder="Example : Bird"
              borderRadius="0.6rem"
              fontWeight="light"
              textColor="gray.400"
              paddingLeft="2rem"
              className="placeholder:text-gray-600"
              value={iconObject as string}
              onChange={(e) => setIconObject(e.target.value)}
              onFocus={() => setIsInputOnBlur1(false)}
              onBlur={() => setIsInputOnBlur1(true)}
            />
          </Flex>
        </FormControl>
        <FormControl maxWidth="min-content">
          <FormLabel
            fontSize="md"
            width="max-content"
            textColor="gray.400"
          >
            Describe the state of your icon object{" "}
            <span className="text-sm text-gray-700">*optional</span>
          </FormLabel>
          <Flex alignItems="center" gap={3}>
            {isInputOnBlur2 &&
              (iconDescription?.trim().length as number) > 0 && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 text-xl"
                />
              )}
            <Input
              isInvalid
              errorBorderColor="gray.700"
              border="none"
              variant="outline"
              focusBorderColor="blue.700"
              placeholder="Example : Angry, Happy, Flying.."
              borderRadius="0.6rem"
              fontWeight="light"
              textColor="gray.400"
              paddingLeft="2rem"
              className="placeholder:text-gray-600"
              value={iconDescription as string}
              onChange={(e) => setIconDescription(e.target.value)}
              onFocus={() => setIsInputOnBlur2(false)}
              onBlur={() => setIsInputOnBlur2(true)}
            />
          </Flex>
          <FormHelperText>
            Use adjectives for better results or Follow Our{" "}
            <Link to="/guide">Guide</Link>
          </FormHelperText>
        </FormControl>
        <FormControl display="flex" flexDirection="column" gap="2rem">
          
            <FormLabel
              fontSize="md"
              width="max-content"
              textColor="gray.400"
            >
              Choose the main color of your icon wisely{" "}
              <span className="text-gray-700 text-sm">*optional</span>
            </FormLabel>
          <Stack gap="1rem">
            <Flex gap="2rem" alignItems="center">
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
                    className="w-14 h-14 rounded-2xl shadow-[inset_0_-10px_16px_rgba(0,0,0,0.6)] transition-all cursor-pointer"
                  ></div>
                  <h4 className="text-sm text-gray-300 font-light">{name}</h4>
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
        <IconStyles chosenStyle={chosenStyle} setChosenStyle={setChosenStyle} />
        <GenerateImage
          chosenColor={chosenColor}
          iconObject={iconObject}
          iconDescription={iconDescription}
          chosenStyle={chosenStyle}
        />
      </VStack>
    </VStack>
  );
};
export default DashboardForm;
