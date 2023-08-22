import React, { useState } from "react";
import {
  VStack,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { defaultColors } from "../../constants";
import { hexToRgb } from "../../helpers/hexToRgb";

const DashboardForm = () => {
  const [colorInputType, setColorInputType] = useState<string>("default");
  const [chosenColor, setChosenColor] = useState<null | string>(null);
  const [hoveredColor, setHoveredColor] = useState<null | string>(null)

  const chooseColor = (colorName: string) => setChosenColor(colorName);
  const onMouseEnter = (colorName: string) => setHoveredColor(colorName)
  const onMouseLeave = () => setHoveredColor("")
  
  return (
    <VStack width="full" alignItems="start">
      <VStack
        display="flex"
        alignItems="start"
        marginX="4rem"
        borderRadius="1rem"
        gap="1.5rem"
        width="60%"
      >
        <FormControl maxWidth="min-content">
          <FormLabel
            fontSize="2xl"
            width="max-content"
            className="bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent"
          >
            What's your icon object ?
          </FormLabel>
          <Input
            placeholder="Example : Bird"
            fontWeight="light"
            border="none"
            focusBorderColor="blue.800"
            borderRadius="full"
            textColor="gray.400"
            backgroundColor="gray.800"
            paddingLeft="2rem"
          />
        </FormControl>
        <FormControl maxWidth="min-content">
          <FormLabel
            fontSize="2xl"
            width="max-content"
            className="bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent"
          >
            Describe the state of your icon object{" "}
            <span className="text-sm text-gray-700">*optional</span>
          </FormLabel>
          <Input
            placeholder="Example : Angry, Happy, Flying.."
            border="none"
            focusBorderColor="blue.800"
            borderRadius="full"
            fontWeight="light"
            textColor="gray.400"
            backgroundColor="gray.800"
            paddingLeft="2rem"
          />
          <FormHelperText>
            Use adjectives for better results or Follow Our{" "}
            <Link to="/guide">Guide</Link>
          </FormHelperText>
        </FormControl>
        <FormControl display="flex" flexDirection="column" gap="2rem">
          <VStack alignItems="start">
            <FormLabel
              fontSize="2xl"
              width="max-content"
              className="bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent"
            >
              Choose the main color of your icon wisely{" "}
              <span className="text-gray-700 text-sm">*optional</span>
            </FormLabel>
            <Flex
              textColor="white"
              gap={2}
              className="bg-gradient-to-r from-blue-800 to-purple-800"
              width="fit-content"
              fontWeight="light"
              borderRadius="md"
              paddingX="1rem"
              height="2rem"
              alignItems="center"
            >
              <small
                className="text-sm cursor-pointer"
                onClick={() => setColorInputType("default")}
              >
                default
              </small>
              <Divider orientation="vertical" />
              <small
                className="text-sm cursor-pointer"
                onClick={() => setColorInputType("customized")}
              >
                customized
              </small>
            </Flex>
          </VStack>
          {colorInputType === "default" ? (
            <Flex gap="2rem">
              {defaultColors.map(({ name, color }, id) => (
                <VStack key={id} onClick={() => chooseColor(name)}>
                  <div
                    style={{
                      backgroundColor: color,
                      transform:
                        name === chosenColor ? "scale(1.2)" : "scale(1)",
                      borderBottomWidth: name === hoveredColor ? "7px" : "0px",
                      borderColor: name === hoveredColor
                        ? `rgb(${hexToRgb(color)?.r as number }, ${(hexToRgb(color)?.g as number) + 80}, ${(hexToRgb(color)?.b as number) + 80})`
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
          ) : (
            <div>hello</div>
          )}
        </FormControl>
      </VStack>
    </VStack>
  );
};
export default DashboardForm;
