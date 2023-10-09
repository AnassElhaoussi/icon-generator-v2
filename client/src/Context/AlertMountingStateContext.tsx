import {useState, createContext, SetStateAction} from "react"

export const AlertMountingStateContext = createContext< {
    isAlertMounted: boolean, 
    setIsAlertMounted: React.Dispatch<SetStateAction<boolean>>
} | null>(null)

export const AlertMountingStateProvider = ({children}: {children: React.ReactNode}) => {
    const [isAlertMounted, setIsAlertMounted] = useState<boolean>(false)
    return (
        <AlertMountingStateContext.Provider 
        value={{isAlertMounted, setIsAlertMounted}}>
           {children}
        </AlertMountingStateContext.Provider>
    )
}