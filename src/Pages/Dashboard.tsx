import React, {useContext} from 'react'
import { googleLogout } from '@react-oauth/google'
import { UserContext } from '../Context/UserContextProvider'
import { UserContextType } from '../types/Context'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const {logoutUser} = useContext(UserContext) as UserContextType
    const navigate = useNavigate()
    
    const signOut = () => {
        googleLogout()
        logoutUser()
        navigate('/')
    }
    return (
        <main className="bg-black text-white font-body">
            <button onClick={signOut}>Signout</button>
        </main>
    )   
}

export default Dashboard