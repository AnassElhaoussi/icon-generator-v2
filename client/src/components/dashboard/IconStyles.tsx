import React, { useRef, useState, useContext } from "react";
import { IconStyleEnum } from "../../types/icon_styles";
import {
  FormControl,
  FormLabel,
  Flex,
  Card,
  CardHeader,
  Heading,
  Text,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Modal,
  ModalHeader,
  useDisclosure,
  Stack
} from "@chakra-ui/react";
import { iconStyles } from "../../constants/iconstyles";
import { DarkMode } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {HamburgerIcon, CheckIcon} from "@chakra-ui/icons"
import { DarkThemeContext } from "../../Context/DarkThemeContext";
import { IColorModeState } from "../../types/Context/darkmode";

const IconStyles = ({chosenStyle, setChosenStyle}: {
  chosenStyle: IconStyleEnum | null,
  setChosenStyle: React.Dispatch<React.SetStateAction<IconStyleEnum | null>>
}) => {

  const chooseStyle = (
    name: IconStyleEnum
  ) => {
    setChosenStyle(name);
  };
  const {onOpen, isOpen, onClose} = useDisclosure()
  const [detailsButtonHovered, setDetailsButtonHovered] = useState<boolean>(false)
  const styleInfos = useRef<null | {
    name: string,
    description: string,
    category: {name: string, color: string},
    detailed_description: string,
    key_features: string[]
  }>(null)
  const finalRef = useRef(null)
  const {isDarkMode} = useContext(DarkThemeContext) as IColorModeState

  return (  
    <DarkMode>
      <FormControl ref={finalRef}>
        <FormLabel
          fontSize="lg"
          fontWeight="semibold"
          color="gray.600"
          className="dark:text-gray-300"
        >
          4- Choose your icon style <span className="text-red-600">*</span>
        </FormLabel>
        <Flex
        display="flex" 
        flexWrap="wrap" 
        rowGap="2.5rem" 
        columnGap="2.5rem" 
        alignItems="center"
        >
          {iconStyles.map(({ name, description, imgUrl, category, detailed_description, key_features }) => (
            <Card
              onClick={
                () => (name === chosenStyle || detailsButtonHovered) 
                ? (() => {
                  setChosenStyle(null)
                  styleInfos.current = {
                    name,
                    description,
                    category,
                    detailed_description,
                    key_features
                  }                
                })()
                : chooseStyle(name as IconStyleEnum)
              }
              cursor="pointer"
              borderRadius="2xl"
              className="transition-all select-none dark:bg-[#101010]"
              backgroundColor="gray.200"
              shadow="2xl"
              style={{

                transform:
                  chosenStyle === name
                    ? "scale(1.1)"
                    : "scale(1)",
                borderBottom: 
                  chosenStyle === name
                  ? `6px solid ${category.color}`
                  : "2px solid transparent"
                }}
                >
              <CardHeader display="flex" flexDirection="column" gap="0.3rem">
                <Flex alignItems="center" justifyContent="space-between">
                  <Heading
                    fontFamily="Poppins, sans-serif"
                    fontWeight="extrabold"
                    fontSize="2.5rem"
                    textColor="gray.700"
                    className="dark:text-gray-200"
                  >
                    {name}
                  </Heading>
                  <div className="dark:hover:bg-black hover:bg-gray-300 dark:text-gray-100 text-gray-500 p-1 rounded-md transition-all">
                    <Icon 
                    as={HamburgerIcon} 
                    onClick={onOpen}
                    onMouseEnter={() => setDetailsButtonHovered(true)}
                    onMouseLeave={() => setDetailsButtonHovered(false)}
                    />
                  </div>
                </Flex>
                <Text
                width="fit-content"
                fontSize="2xs"
                paddingY="0.1rem"
                paddingX="0.5rem"
                borderRadius="md" 
                backgroundColor={`${category.color}.400`}
                textColor={`${category.color}.900`}>
                  {category.name}
                </Text>
                {description && (
                  <Text textColor="gray.600" fontSize="sm">
                    {description}
                  </Text>
                )}
              </CardHeader>
            </Card>
          ))}
        </Flex>
      </FormControl>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
        padding="1rem"
        backgroundColor={isDarkMode ? "gray.900" : "gray.300"}
        fontFamily="Poppins, sans-serif"
        >
          <ModalHeader>
                <Heading 
                fontFamily="Poppins, sans-serif"
                fontSize="6xl"
                textColor={isDarkMode ? "gray.200" : "gray.800"}
                >
                  {styleInfos.current?.name}
                </Heading>
                <Text
                  backgroundColor={`${styleInfos.current?.category.color as string}.400`}
                  paddingY="0.3rem"
                  paddingX="1rem"
                  borderRadius="md"
                  fontSize="sm"
                  width="fit-content"
                  textColor={`${styleInfos.current?.category.color as string}.900`}>
                  {styleInfos.current?.category.name}
                </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="2rem" marginTop="0.8em">
            <Stack gap="1rem">
              <Heading 
              fontFamily="Poppins, sans-serif"
              fontSize="4xl"
              fontWeight="normal" textColor={isDarkMode ? "gray.200" : "gray.800"}>
                Detailed description
              </Heading>
              <Text fontSize="sm" textColor={isDarkMode ? "gray.500" : "gray.600"}>
                {styleInfos.current?.detailed_description}
              </Text>
            </Stack>
            <Stack gap="1rem">
              <Heading 
              fontFamily="Poppins, sans-serif" 
              fontSize="3xl"
              fontWeight="normal" textColor={isDarkMode ? "gray.200" : "gray.800"}>
                Key features
              </Heading>
              <Stack display="flex" flexDirection="column" gap="0.5rem">
                {styleInfos.current?.key_features.map(feature => {
                  return (
                    <Text 
                    className="bg-gradient-to-r from-blue-900 to-blue-500" 
                    display="flex"
                    gap={2}
                    px="1rem" 
                    py="0.3rem" 
                    borderRadius="lg"
                    alignItems="center"
                    textColor="white"
                    >
                      <Icon as={CheckIcon} className="bg-blue-700 p-1 rounded-md" />
                      <span>{feature}</span>
                    </Text>
                  )
                })}
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </DarkMode>
  );
};

export default IconStyles;
