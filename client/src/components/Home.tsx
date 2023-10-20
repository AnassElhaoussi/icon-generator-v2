import React, {useContext} from 'react'
import { diamond_icon } from '../images'
import { Image } from '@chakra-ui/react'
import {motion} from "framer-motion"
import { UserContext } from '../Context/UserContextProvider'
import { UserContextType } from '../types/Context/signin'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const {user} = useContext(UserContext) as UserContextType
  const navigate = useNavigate()
  return (
    <section id="home" className="flex w-full items-center justify-center  p-10">
        <div className="relative flex flex-col gap-6 items-center lg:w-3/4 w-full text-center ">
              <Image as={motion.img} animate={{rotate: [-10, 40, 40, -10]}} src={diamond_icon} position="absolute" top="-6rem" width="10rem" zIndex="0" />
              <div className="absolute -top-20 w-32 h-32 rounded-2xl blur-3xl bg-pink-500"></div>
            <h1  className="md:text-[6.8rem] relative z-1 text-7xl font-black text-gray-200">
                Generate your icons with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">IconAI</span>
            </h1>
            <span className="absolute md:block hidden left-14 -top-3 -rotate-12 bg-yellow-500 py-2 px-5 rounded-md">
              Join us now
            </span>
            <p className="text-gray-400 w-2/3 md:text-normal text-sm">
                Use artificial intelligence to generate icons, with the help of our guide we suggest the best prompts for the best outcome.
            </p>
            <button onClick={() => {
              user ? navigate("/dashboard") : navigate("/signin")
            }} className="py-3 px-8 bg-gradient-to-r from-blue-700 to-purple-700 rounded-md text-gray-200 text-xl font-light hover:bg-gradient-to-l hover:scale-110 transition-all">
              {user ? "Dashboard" : "Get started"}
            </button>
        </div>
    </section>
  )
}

export default Home