export interface IPurchaseContextValues {
    isPaymentSuccessful: boolean,
    setIsPaymentSuccessful: React.Dispatch<React.SetStateAction<boolean>>
    creditsPurchased: number | null,
    setCreditsPurchased: React.Dispatch<React.SetStateAction<number | null>> 
}