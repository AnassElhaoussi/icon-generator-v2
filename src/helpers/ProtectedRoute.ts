import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props: {children: React.ReactNode, currentPath: string, redirectPath: string, user: object}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if(props.currentPath === "/signin" 
        && props.user !== null) {
            navigate(props.redirectPath)
        }
        
        if(props.currentPath.startsWith("/dashboard") 
        && props.user === null) {
            navigate(props.redirectPath)
        }
    }, [])
    
    return props.children
}

export default ProtectedRoute