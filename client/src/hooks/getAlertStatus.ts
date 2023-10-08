
export const getAlertStatus = (errorType: string, isSuccess: boolean) => {
    let status
    if(errorType === "Out of credits") status = "error"
    if(isSuccess) status = "success" 
    return status 
}