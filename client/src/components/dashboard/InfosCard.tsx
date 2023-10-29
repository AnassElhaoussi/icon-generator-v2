import { CheckCircleIcon, CheckIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons"
import { List, Heading, Card, ListItem, ListIcon, Icon, VStack, Text } from "@chakra-ui/react"

const InfosCard = () => {
    return (
        <VStack display="flex" flexDirection="column" gap="3rem" alignItems="flex-start" marginX="4rem">
            <VStack display="flex" flexDirection="column" alignItems="start"> 
                <Heading textColor="gray.200" fontSize="7xl" fontFamily="Poppins, sans-serif" fontWeight="extrabold">Hi there 👋</Heading>
                <Text textColor="gray.500">Start generating your icons now with ease!</Text>
            </VStack>
            <Card display="flex" flexDirection="column" gap="1rem" className="bg-gradient-to-r from-gray-800 to-black" padding="1rem" borderRadius="lg" width="fit-content" >
                <Heading fontFamily="Poppins, sans-serif" fontSize="2xl" fontWeight="semibold" textColor="white">
                    <Icon as={InfoIcon} marginRight="1rem" />
                    A few things to consider :
                </Heading>
                <List textColor="gray.500" spacing="1">
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
    )
}

export default InfosCard