import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react"
import { getAlertStatus } from "../../hooks/getAlertStatus"
import { getAlertDescription } from "../../hooks/getAlertDescription"
import { useEffect, useContext, MutableRefObject } from "react"
import { AlertMountingStateContext } from "../../Context/AlertMountingStateContext"

type statusType = "error" | "success"

export const DashboardAlert = (
    {error, setError, isSuccess, setIsSuccess}: {
        error: {
            errorType: string, 
            message: string
        },
        isSuccess: boolean | null,
        setIsSuccess: React.Dispatch<React.SetStateAction<null | boolean>>
        setError: React.Dispatch<React.SetStateAction<null | {errorType: string, message: string}>>        
    }) => {
    const {setIsAlertMounted} = useContext(AlertMountingStateContext) as {
        isAlertMounted: boolean,
        setIsAlertMounted: React.Dispatch<React.SetStateAction<boolean>>
    }
    const status = getAlertStatus(
        error?.errorType,
        isSuccess as boolean
    )
    const description = getAlertDescription(
        error, 
        isSuccess as boolean
    )

    useEffect(() => {
        setIsAlertMounted(true)
        setTimeout(() => {
            setIsAlertMounted(false)
            setError(null)
            setIsSuccess(null)            
        }, 3000)
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