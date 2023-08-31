import React, { useState } from "react";
import { Stack, Flex, Card, Text } from "@chakra-ui/react";
import { openai } from "../../helpers/openai_sdk";
import { usePrompt } from "../../hooks/usePrompt";
import { IconStyleEnum } from "../../types/icon_styles";
import { useMutation } from "@tanstack/react-query";
import { generateDalleIcons } from "../../api";

const GenerateImage = ({
  chosenColor,
  iconObject,
  iconDescription,
  chosenStyle,
}: {
  chosenColor: string | null;
  iconObject: null | string;
  iconDescription: null | string;
  chosenStyle: IconStyleEnum | null;
}) => {
  const formObj = {
    chosenColor,
    iconObject,
    iconDescription,
    chosenStyle
  }
  const [numberOfGenerations, setNumberOfGenerations] = useState<number>(0);
  const incrementCount = () => setNumberOfGenerations(numberOfGenerations + 1);
  const decrementCount = () =>
    numberOfGenerations > 0 && setNumberOfGenerations(numberOfGenerations - 1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const prompt = usePrompt(iconObject, iconDescription, chosenColor, chosenStyle) as string;
  const mutation = useMutation({
    mutationFn: async (bodyObj: {prompt: string, n: number}) => await generateDalleIcons(bodyObj) 
  }) 

  const mutate = () => {
    if(
      (Object
      .values(formObj)
      .every(
        property => (typeof property === "string") 
        ? property?.trim().length !== 0 
        : property !== null)
        &&
        numberOfGenerations > 0
      )
    ) mutation.mutate({prompt, n: numberOfGenerations})
    else {
      setErrorMessage("Some field are missing, try again!")
    }
  }

  return (
    <Stack alignItems="start" width="full">
      <Flex alignItems="center" gap="1rem">
        <Card
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="black"
          padding="1rem"
          fontSize="3xl"
          borderRadius="2xl"
          height="3.5rem"
          width="3.5rem"
          cursor="pointer"
          userSelect="none"
          onClick={decrementCount}
        >
          -
        </Card>
        <Text fontSize="3xl" textColor="white" fontWeight="thin">
          {numberOfGenerations}
        </Text>
        <Card
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="black"
          padding="1rem"
          fontSize="3xl"
          borderRadius="2xl"
          height="3.5rem"
          width="3.5rem"
          cursor="pointer"
          userSelect="none"
          onClick={incrementCount}
        >
          +
        </Card>
      </Flex>
      {errorMessage && <Text textColor="red.700">{errorMessage}</Text>}
      <button
      onClick={mutate} 
      className="bg-gradient-to-r from-blue-900 to-blue-600 py-2 px-5 text-white font-light rounded-lg shadow-xl shadow-blue-900">
        Generate
      </button>
    </Stack>
  );
};

export default GenerateImage;
