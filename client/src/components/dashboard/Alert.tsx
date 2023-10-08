import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react"
import { getAlertStatus } from "../../hooks/getAlertStatus"
import { getAlertDescription } from "../../hooks/getAlertDescription"

type statusType = "error" | "success"

export const DashboardAlert = (
    {error, isSuccess}: {
        error: {
            errorType: string, 
            message: string
        },
        isSuccess: boolean
    }) => {
    const status = getAlertStatus(
        error?.errorType,
        isSuccess
    )
    const description = getAlertDescription(
        error, 
        isSuccess
    )
    return (
        <Alert 
        position="absolute" 
        left="20%"
        width="fit-content"
        status={status as statusType} 
        >
            <AlertIcon />
            <AlertDescription>
                {description}
            </AlertDescription>
        </Alert>
    )
}

export default Alert