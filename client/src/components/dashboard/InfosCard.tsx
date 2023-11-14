import {
  CheckCircleIcon,
  CheckIcon,
  InfoIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import {
  List,
  Heading,
  Card,
  ListItem,
  ListIcon,
  Icon,
  VStack,
  Text,
} from "@chakra-ui/react";

const InfosCard = () => {
  return (
    <VStack
      display="flex"
      flexDirection="column"
      gap="3rem"
      alignItems="flex-start"
      marginX="4rem"
    >
      <VStack display="flex" flexDirection="column" alignItems="start">
        <Heading
          fontSize="13vmin"
          whiteSpace="nowrap"
          fontFamily="Poppins, sans-serif"
          fontWeight="semibold"
          className="text-gray-700 dark:text-gray-200"
        >
          Hi there 👋
        </Heading>
        <Text textColor="gray.500">
          Start generating your icons now with ease!
        </Text>
      </VStack>
      <Card
        display="flex"
        flexDirection="column"
        gap="1rem"
        className="bg-gradient-to-r dark:from-gray-800 dark:to-black from-gray-300 to-gray-100"
        padding="1rem"
        borderRadius="lg"
      >
        <Heading
          fontFamily="Poppins, sans-serif"
          fontSize="2xl"
          fontWeight="semibold"
          textColor="gray.700"
          className="dark:text-gray-200"
          whiteSpace="nowrap"
        >
          <Icon as={InfoIcon} marginRight="1rem" />A few things to consider :
        </Heading>
        <List textColor="gray.500" spacing="1" className="md:text-base text-sm">
          <ListItem>
            <ListIcon as={SettingsIcon} />
            Use correct vocabulary and describe your icons precisely!
          </ListItem>
          <ListItem>
            <ListIcon as={SettingsIcon} />
            The AI model is not good with generating icons that contain letters!
          </ListItem>
          <ListItem>
            <ListIcon as={SettingsIcon} />
            Use as many details as possible in your descriptions!
          </ListItem>
        </List>
      </Card>
    </VStack>
  );
};

export default InfosCard;
