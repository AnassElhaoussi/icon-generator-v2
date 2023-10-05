import {useState, createContext} from "react"
import { useContext, useEffect } from "react"
import { UserContext } from "./UserContextProvider"
import { useQuery } from "@tanstack/react-query"
import { getUserCredits } from "../api"
import { CreditsContextType } from "../types/Context/credits"

export const CreditContext = createContext<CreditsContextType>(null)

export const CreditsContextProvider = ({children}: {children: React.ReactNode}) => {
    const {user} = useContext(UserContext)
    const intervalMs = 1000
    const {data, isLoading, isError, isSuccess} = useQuery({
        queryKey: ["credits"],
        queryFn: () => getUserCredits(user.id),
        refetchInterval: intervalMs
    })
    
    return (
        <CreditContext.Provider value={{credits: data?.data.credits.amount, isLoading, isError, isSuccess}}>
            {children}
        </CreditContext.Provider>
    )
}