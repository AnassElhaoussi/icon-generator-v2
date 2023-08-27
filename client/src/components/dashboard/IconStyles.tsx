import React from "react";
import { FormControl, FormLabel, Flex, Card, CardHeader, Heading, Image, Text } from "@chakra-ui/react";
import { iconStyles } from "../../constants/iconstyles";
import { DarkMode } from "@chakra-ui/react";

const IconStyles = () => {
  return (
    <DarkMode>
        <FormControl>
            <FormLabel fontSize="lg" className="bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">Choose your icon style</FormLabel>
            <Flex display="flex" flexWrap="wrap" rowGap="1rem" columnGap="2rem">
                {iconStyles.map(({name, description, imgUrl}) => (
                    <Card backgroundColor="#1A1A1A" className="hover:scale-110 transition-all bg-gradient-to-t" dropShadow="dark-lg" cursor="pointer" borderRadius="2xl">
                        <CardHeader>
                            <Heading fontFamily="Poppins, sans-serif" fontWeight="normal" fontSize="2rem" textColor="gray.200">{name}</Heading>
                            {description && <Text textColor="gray.600" fontSize="sm">{description}</Text>}
                        </CardHeader>
                    </Card>
                ))}
            </Flex>
        </FormControl>
    </DarkMode>
  );
};

export default IconStyles;