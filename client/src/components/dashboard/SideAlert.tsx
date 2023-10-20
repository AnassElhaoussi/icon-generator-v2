import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react"

const SideAlert = ({
    description
}: {
    description: string
}) => {
    return (
        <Alert 
        status="info" position="fixed" 
        borderRadius="md" top="90vh" 
        right="1rem" backgroundColor="black" 
        textColor="white" 
        width="fit-content"
        
        >
            <AlertIcon color="white" />
            <AlertDescription>
                {description}
            </AlertDescription>
        </Alert>
    )
}

export default SideAlert