import {useState, createContext } from "react"
import { IPricingAccessContextValues } from "../types/Context/pricing_access"

export const PricingAccessContext = createContext<null | IPricingAccessContextValues>(null) 

export const PricingAccessContextProvider = ({children}: {children: React.ReactNode}) => {
    const [isAccessDenied, setIsAccessDenied] = useState(false)
    return (
        <PricingAccessContext.Provider value={{isAccessDenied, setIsAccessDenied}}>
            {children}
        </PricingAccessContext.Provider>
    )
}