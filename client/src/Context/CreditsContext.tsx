import {useState, createContext} from "react"
import { useContext, useEffect } from "react"
import { UserContext } from "./UserContextProvider"

export const CreditContext = createContext(null)

export const CreditsContextProvider = ({children}: {children: React.ReactNode}) => {
    const {user} = useContext(UserContext)
    const [credits, setCredits] = useState()
    
    useEffect(() => {
        
    }, [user])

    return (
        <CreditContext.Provider value={{}}>
            {children}
        </CreditContext.Provider>
    )
}