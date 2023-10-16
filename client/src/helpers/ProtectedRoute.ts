import React, {useEffect, useContext} from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { CreditContext } from '../Context/CreditsContext'
import { ICreditsContextValues } from '../types/Context/credits'

const ProtectedRoute = (props: {children: React.ReactNode, currentPath: string, redirectPath: string, user: object}) => {
    const navigate = useNavigate()
    const {credits} = useContext(CreditContext) as ICreditsContextValues

    useEffect(() => {
        if(props.currentPath === "/signin" 
        && props.user) {
            navigate(props.redirectPath)
        }
        
        if(props.currentPath.startsWith("/dashboard") 
        && !props.user) {
            navigate(props.redirectPath)
        }

        if(props.currentPath === "/pricing"  
        && props.user
        && (credits as number) > 0) {
            navigate(`${props.redirectPath}?credits=true`)
        }
    }, [])
    
    return props.children
}

export default ProtectedRoute