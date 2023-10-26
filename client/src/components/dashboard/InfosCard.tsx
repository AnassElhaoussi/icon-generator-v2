import { CheckCircleIcon, CheckIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons"
import { List, Heading, Card, ListItem, ListIcon, Icon } from "@chakra-ui/react"

const InfosCard = () => {
    return (
        <Card display="flex" flexDirection="column" gap="1rem" className="bg-gradient-to-l from-gray-900 to-gray-800" padding="1rem" borderRadius="lg" marginX="4rem" width="fit-content" >
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
    )
}

export default InfosCard