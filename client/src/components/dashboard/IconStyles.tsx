import React, { useState } from "react";
import { IconStyleEnum } from "../../types/icon_styles";
import {
  FormControl,
  FormLabel,
  Flex,
  Card,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { iconStyles } from "../../constants/iconstyles";
import { DarkMode } from "@chakra-ui/react";
import { IconStyle } from "@fortawesome/fontawesome-svg-core";

const IconStyles = ({chosenStyle, setChosenStyle}: {
  chosenStyle: IconStyleEnum | null,
  setChosenStyle: React.Dispatch<React.SetStateAction<IconStyleEnum | null>>
}) => {

  const chooseStyle = (name: IconStyleEnum) => {
    setChosenStyle(name);
  };
  return (
    <DarkMode>
      <FormControl>
        <FormLabel
          fontSize="lg"
          className="bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text"
        >
          Choose your icon style
        </FormLabel>
        <Flex display="flex" flexWrap="wrap" rowGap="1rem" columnGap="2rem" alignItems="stretch">
          {iconStyles.map(({ name, description, imgUrl }) => (
            <Card
              onClick={() => chooseStyle(name as IconStyleEnum)}
              backgroundColor="#1A1A1A"
              dropShadow="dark-lg"
              cursor="pointer"
              borderRadius="2xl"
              className="transition-all"
              style={{
                borderBottom:
                  chosenStyle === name
                    ? "8px solid black"
                    : "2px solid transparent",
              }}
            >
              <CardHeader>
                <Heading
                  fontFamily="Poppins, sans-serif"
                  fontWeight="normal"
                  fontSize="2rem"
                  textColor="gray.200"
                >
                  {name}
                </Heading>
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
    </DarkMode>
  );
};

export default IconStyles;
