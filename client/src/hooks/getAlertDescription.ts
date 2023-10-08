
export const getAlertDescription = (
    error: {
        errorType: string, 
        message: string
    },
    isSuccess: boolean
) => {
    let description
    if(error?.errorType === "Out of credits") description = error?.message
    if(isSuccess) description = "Successfully generated your images!"
    return description
}