import React, {useContext} from 'react'
import { circle, diamond_icon, g_img1, g_img2, g_img3 } from '../images'
import { Badge, Image } from '@chakra-ui/react'
import {motion} from "framer-motion"
import { UserContext } from '../Context/UserContextProvider'
import { UserContextType } from '../types/Context/signin'
import { useNavigate } from 'react-router-dom'
import { iconStyles } from '../constants/iconstyles'

const Home = () => {
  const {user} = useContext(UserContext) as UserContextType
  const navigate = useNavigate()
  
  return (
    <section id="home" className="flex flex-col items-center justify-center p-10">
        <div className="relative flex flex-col gap-6 items-center lg:w-3/4 w-full text-center w-full">
              <Image 
              as={motion.img} 
              animate={{rotate: [-10, 40, 40, -10]}} 
              src={diamond_icon} 
              position="absolute" 
              className="md:w-44 md:-top-28 -top-20 w-32" 
              zIndex="0" />
              <div className="absolute -z-1 -top-20 w-32 h-32 rounded-2xl blur-3xl bg-pink-500"></div>
            <h1 className="md:text-[7rem] relative z-1 text-7xl font-extrabold dark:text-gray-200 text-gray-800">
                Generate your icons with <span className="relative z-5 text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-blue-700 dark:to-purple-700 bg-gradient-to-r from-blue-800 to-blue-600">
                  IconAI
                  <Image src={circle} alt="homepage_circle" className="absolute md:w-72 w-44 -z-1 top-2 w-62 right-10 dark:w-0" />
                </span>
            </h1>
            <p className="dark:text-gray-400 text-gray-600 w-2/3 md:text-normal text-sm">
                Use artificial intelligence to generate icons, with the help of our guide we suggest the best prompts for the best outcome.
            </p>
            <button onClick={() => {
              user ? navigate("/dashboard") : navigate("/signin")
            }} className="py-2 lg:px-10 px-8 bg-blue-700 rounded-xl dark:text-white hover:text-black shadow-[0_20px_35px_-15px_rgba(0,0,0,0.3)] shadow-blue-600 text-white border-4 border-transparent hover:bg-transparent hover:border-blue-600 lg:text-xl text-md font-light transition-all">
              {user ? "Dashboard" : "Get started"}
            </button>
        </div>        
    </section>
  )
}

export default Home