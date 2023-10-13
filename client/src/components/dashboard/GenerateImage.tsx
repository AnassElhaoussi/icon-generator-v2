import React, { useState, useContext, useEffect } from "react";
import { Stack, Flex, Card, Text, Image, Spinner } from "@chakra-ui/react";
import { openai } from "../../helpers/openai_sdk";
import { getPrompt } from "../../hooks/getPrompt";
import { IconStyleEnum } from "../../types/icon_styles";
import { useMutation } from "@tanstack/react-query";
import { generateDalleIcons } from "../../api";
import { CreditContext } from "../../Context/CreditsContext";
import { ICreditsContextValues } from "../../types/Context/credits";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context/signin";
import { DashboardAlert } from "./Alert";
import { AlertMountingStateContext } from "../../Context/AlertMountingStateContext";

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
  const [error, setError] = useState<null | {errorType: string, message: string}>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
  const {credits, creditsId} = useContext(CreditContext) as ICreditsContextValues
  const {user} = useContext(UserContext) as UserContextType
  const {isAlertMounted} = useContext(AlertMountingStateContext) as {
    isAlertMounted: boolean,
    setIsAlertMounted: React.Dispatch<React.SetStateAction<boolean>>
  }

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
    setIsSuccess(mutation.isSuccess)
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
          n: numberOfGenerations,
          email: user?.email as string,
          creditsId,
          prevCreditsAmt: credits as number
        });
        setError(null);
      } else {
        setError({
          errorType: "Out of credits",
          message: "You're out of credits!"
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
      <Flex alignItems="center" gap="1rem" opacity={isAlertMounted ? "0.2" : "1"}>
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
      {(error && error.errorType !== "Out of credits") && 
      <Text textColor="red.700">
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
      {
      (error?.errorType === "Out of credits" || isSuccess) 
        && 
        <div className="alert">
            <DashboardAlert 
              error={error as {errorType: string, message: string}} 
              setError={setError}
              isSuccess={isSuccess}
              setIsSuccess={setIsSuccess}
            />
        </div>
      }      
      <Flex flexWrap="wrap" gap="0.8rem" marginTop="1rem">
        {mutation.isSuccess && <Text>Generations</Text>}
        {mutation.isSuccess && mutationData.map((url, id) => {
            return (
                <Image
                  src={url}
                  key={id}
                  borderRadius="2xl"
                  width={80}
                  height={80}
                />
            );
          })}
      </Flex>
    </Stack>
  );
};

export default GenerateImage;
