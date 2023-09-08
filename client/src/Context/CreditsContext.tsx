import {useState, createContext} from "react"

export const CreditContext = createContext()

export const CreditsContextProvider = ({children}: {children: React.ReactNode}) => {
    const [credits, setCredits] = useState()
    
    return (
        <CreditContext.Provider value={{}}>
            {children}
        </CreditContext.Provider>
    )
}