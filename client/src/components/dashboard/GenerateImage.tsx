import React, { useState, useContext, useEffect } from "react";
import { Stack, Flex, Card, Text, Image, Spinner, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button } from "@chakra-ui/react";
import { openai } from "../../helpers/openai_sdk";
import { getPrompt } from "../../hooks/getPrompt";
import { IconStyleEnum } from "../../types/icon_styles";
import { useMutation } from "@tanstack/react-query";
import { generateDalleIcons } from "../../api";
import { CreditContext } from "../../Context/CreditsContext";
import { ICreditsContextValues } from "../../types/Context/credits";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context/signin";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

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
  const toast = useToast()
  const formObj = {
    chosenColor,
    iconObject,
    iconDescription,
    chosenStyle,
  };
  const [numberOfGenerations, setNumberOfGenerations] = useState<number>(0);
  const incrementCount = () => numberOfGenerations < 5 && setNumberOfGenerations(numberOfGenerations + 1);
  const decrementCount = () => numberOfGenerations > 0 && setNumberOfGenerations(numberOfGenerations - 1);
  const [error, setError] = useState<null | {errorType: string, message: string}>(null);
  const {credits, creditsId} = useContext(CreditContext) as ICreditsContextValues
  const {user} = useContext(UserContext) as UserContextType
  const {isOpen, onClose, onOpen} = useDisclosure()

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
      setError({
        errorType: "API Error",
        message: errorMessage
      });
    }
  });
  useEffect(() => {
    if(mutation.isSuccess) {
      toast({
        title: "Successfully Generated!",
        description: "More details on the activity page",
        status: "success",
        duration: 9000,
        isClosable: true
      })
      onOpen()
    }
  }, [mutation.isSuccess])

  const mutationData = mutation.data?.data.URLs as string[]

  const mutate = () => {
    if (
      Object.values(formObj).every((property) =>
        typeof property === "string"
          ? property?.trim()?.length !== 0
          : property !== null
      ) 
      && numberOfGenerations > 0
    ) {
      if(numberOfGenerations <= (credits as number)) {
        mutation.mutate({ 
          prompt: prompt as string,
          iconObject: iconObject as string,
          iconDescription: iconDescription as string,
          color: chosenColor as string,
          style: chosenStyle as string,
          n: numberOfGenerations,
          email: user?.email as string,
          creditsId,
          prevCreditsAmt: credits as number
        });
        setError(null);
      } else {
        toast({
          title: "Out of credits",
          description: "Visit our pricing page to buy more credits",
          status: "error",
          duration: 9000,
          isClosable: true
        })
      }
    } else {
      setError({
        errorType: "Missing fields",
        message: "Some field are missing, try again!"
      });
    }
  };

  return (
    <Stack 
    display="flex" 
    gap="1.5rem" 
    alignItems="start" 
    width="full" 
    >
      <Flex alignItems="center" gap="1rem">
        <Card
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="gray.200"
          padding="1rem"
          fontSize="3xl"
          borderRadius="2xl"
          height="3.5rem"
          textColor="black"
          className="dark:bg-gray-900 dark:text-white"
          fontWeight="light"
          width="3.5rem"
          cursor="pointer"
          userSelect="none"
          onClick={decrementCount}
        >
          -
        </Card>
        <Text fontSize="3xl" textColor="black" className="dark:text-white" fontWeight="thin">
          {numberOfGenerations}
        </Text>
        <Card
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="gray.200"
          padding="1rem"
          fontSize="3xl"
          borderRadius="2xl"
          height="3.5rem"
          textColor="black"
          className="dark:bg-gray-900 dark:text-white"
          fontWeight="light"
          width="3.5rem"
          cursor="pointer"
          userSelect="none"
          onClick={incrementCount}
        >
          +
        </Card>
      </Flex>
      {(error && error.errorType !== "Out of credits") && 
        <Text textColor="red.700" onClick={onOpen}>
          {error.message}
        </Text>
      }
      <button
        onClick={mutate}
        className="bg-gradient-to-r from-blue-900 to-blue-600 py-2 px-5 text-white font-light rounded-lg shadow-xl shadow-blue-900 "
      >
        {mutation.isLoading ? (
          <div className="flex items-center gap-x-2">
            <Spinner />
            Generating...
          </div>
        ) : (
          "Generate"
          )}
      </button>
      <Drawer isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent display="flex" flexDirection="column" alignItems="center" textColor="white" fontFamily="Poppins, sans-serif" backgroundColor="black">
            <DrawerCloseButton />
            <DrawerHeader>Generation</DrawerHeader>
            <DrawerBody display="flex" flexDirection="column" gap="1rem">
              {mutationData?.map((url) => (
                  <Image 
                  src={url} 
                  width={40} 
                  height={40}
                  borderRadius="lg" 
                  border={`4px solid #7e14ff
                  `} />
              ))}
            </DrawerBody>
            <DrawerFooter justifyContent="space-between" width="full">
                <Link to="activity">
                  <Button
                  colorScheme="blue">
                      More details
                  </Button>
                </Link>
                <Button colorScheme="gray" 
                onClick={onClose}>
                  Cancel
                </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    </Stack>
  );
};

export default GenerateImage;
