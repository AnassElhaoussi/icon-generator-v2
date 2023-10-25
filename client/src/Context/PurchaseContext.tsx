import {useState ,createContext} from "react"
import { IPurchaseContextValues } from "../types/Context/payment"

export const PurchaseContext = createContext<null | IPurchaseContextValues>(null)

export const PurchaseContextProvider= ({children}: {children: React.ReactNode}) => {
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState<boolean>(false)
    const [creditsPurchased, setCreditsPurchased] = useState<number | null>(null)
    return (
        <PurchaseContext.Provider value={{isPaymentSuccessful, setIsPaymentSuccessful, creditsPurchased, setCreditsPurchased}}>
            {children}
        </PurchaseContext.Provider> 
    )
}