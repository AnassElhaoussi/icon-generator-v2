import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react"
import { getAlertStatus } from "../../hooks/getAlertStatus"
import { getAlertDescription } from "../../hooks/getAlertDescription"
import { useEffect, useContext, MutableRefObject } from "react"
import { AlertMountingStateContext } from "../../Context/AlertMountingStateContext"

type statusType = "error" | "success"

export const DashboardAlert = (
    {error, isSuccess}: {
        error: {
            errorType: string, 
            message: string
        },
        isSuccess: boolean,
    }) => {
    const {isAlertMounted ,setIsAlertMounted} = useContext(AlertMountingStateContext) as {
        isAlertMounted: boolean,
        setIsAlertMounted: React.Dispatch<React.SetStateAction<boolean>>
    }
    const status = getAlertStatus(
        error?.errorType,
        isSuccess
    )
    const description = getAlertDescription(
        error, 
        isSuccess
    )

    useEffect(() => {
        setIsAlertMounted(true)
        return () => {
            setIsAlertMounted(false)
        }
    }, [])

    return (
        <Alert
        width="fit-content"
        position="absolute"
        borderRadius="lg"

        className="translate-x-1/2 right-1/2 xl:top-1/2 md:top-3/4 top-[80%] "
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