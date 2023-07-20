import React from 'react'
import { googleLogout } from '@react-oauth/google'
import { UserContext } from '../Context/UserContextProvider'
import { UserContextType } from '../types/Context'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/dashboard/Navigation'

const Dashboard = () => {
    return (
        <main className="bg-black text-white font-body h-screen">
            <Navigation />
        </main>
    )   
}

export default Dashboard