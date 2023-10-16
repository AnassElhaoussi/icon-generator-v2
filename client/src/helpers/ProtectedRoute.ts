import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

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
        && props.credits > 0
        ) {
            navigate(`${props.redirectPath}?credits=true`)
        }
        
    }, [props.credits])
    
    return props.children
}

export default ProtectedRoute