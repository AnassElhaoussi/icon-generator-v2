import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { PricingAccessContext } from '../Context/PricingAccessContext'
import { IPricingAccessContextValues } from '../types/Context/pricing_access'

const ProtectedRoute = (
    props: {
        children: React.ReactNode, 
        currentPath: string, 
        redirectPath: string, 
        user: object, 
        credits: number
    }
) => {
    const navigate = useNavigate()
    const {setIsAccessDenied} = useContext(PricingAccessContext) as IPricingAccessContextValues

    useEffect(() => {
        if(props.currentPath === "/signin" 
        && props.user) {
            navigate(props.redirectPath)
        }

        if(props.currentPath.startsWith("/dashboard") 
        && !props.user) {
            navigate(props.redirectPath)
        }

        if(props.currentPath === "/pricing" && !props.user) {
           setIsAccessDenied(true)
           navigate(`${props.redirectPath}?pricing_access=denied`) 
        }
        
    }, [props.credits])
    
    return props.children
}

export default ProtectedRoute