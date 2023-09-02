import React, { useState, useRef } from "react";
import { Stack, Flex, Card, Text, Image } from "@chakra-ui/react";
import { openai } from "../../helpers/openai_sdk";
import { getPrompt } from "../../hooks/getPrompt";
import { IconStyleEnum } from "../../types/icon_styles";
import { useMutation } from "@tanstack/react-query";
import { generateDalleIcons } from "../../api";
import { setDefaultResultOrder } from "dns";

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
    chosenStyle,
  };
  const [numberOfGenerations, setNumberOfGenerations] = useState<number>(0);
  const incrementCount = () => setNumberOfGenerations(numberOfGenerations + 1);
  const decrementCount = () =>
    numberOfGenerations > 0 && setNumberOfGenerations(numberOfGenerations - 1);
  const [error, setError] = useState<null | string>(null)
  const prompt = Object.values(formObj).every((property) =>
    typeof property === "string"
      ? property.trim().length !== 0
      : property !== null
  )
    ? (getPrompt(
        iconObject,
        iconDescription,
        chosenColor,
        chosenStyle
      ) as string)
    : null;
  const mutation = useMutation(generateDalleIcons, {
    onError: (errorMessage: string) => {
      setError(errorMessage)
    }
  });

  const mutate = () => {
    if (
      Object.values(formObj).every((property) =>
        typeof property === "string"
          ? property?.trim()?.length !== 0
          : property !== null
      ) &&
      numberOfGenerations > 0
    ) {
      mutation.mutate({ prompt: prompt as string, n: numberOfGenerations });
    } else {
      setError("Some field are missing, try again!")
    }
  };

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
      {error && <Text textColor="red.700">{error}</Text>}      
      <button
        onClick={mutate}
        className="bg-gradient-to-r from-blue-900 to-blue-600 py-2 px-5 text-white font-light rounded-lg shadow-xl shadow-blue-900"
      >
        Generate
      </button>
      <Flex>
        {mutation.isSuccess && mutation.data?.data.map(({url}, id) => {
          return (
            <Image src={url} key={id} />
          )
        }) }
      </Flex>
    </Stack>
  );
};

export default GenerateImage;
