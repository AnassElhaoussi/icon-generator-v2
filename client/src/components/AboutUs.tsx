import React, {useContext} from "react"
import { aboutus_decoration, rising_icon } from "../images"
import { UserContext } from "../Context/UserContextProvider"
import { UserContextType } from "../types/Context/signin"
import { Link } from "react-router-dom"

const AboutUs = () => {
    const {user} = useContext(UserContext) as UserContextType
    return (
        <section id="about" className="relative flex flex-col justify-center gap-20 md:px-20 px-10 py-10">
            <div className="absolute -top-20 -left-10 w-96 h-96 rounded-full dark:bg-gray-800 bg-gray-300 blur-3xl"></div>
            <div className="absolute -top-20 -right-44 md:w-96 w-0 h-96 rounded-full dark:bg-gray-800 bg-gray-300 blur-3xl"></div>
            <div className="relative flex sm:flex-nowrap gap-5 flex-wrap-reverse justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold lg:text-8xl md:text-7xl text-6xl dark:text-gray-200 text-gray-800">About Us</h2>
                    <p className="dark:text-gray-400 text-gray-500 sm:text-2xl text-xl font-light lg:w-1/2 w-full">
                        Our mission is to provide a seamless platform for generating a diverse range of stunning icons tailored to your preferences.
                    </p>
                </div>
                <img 
                src={aboutus_decoration} 
                alt="decoration_icon" 
                className="lg:w-44 sm:w-32 w-32 " />
            </div>
            <div className="flex flex-col gap-4 items-start">
                <h4 className="md:text-4xl text-3xl font-semibold dark:text-gray-300 text-gray-800">Our vision</h4>
                <p className="text-sm font-light text-gray-400 lg:w-1/2 w-full">We envision a world where design is made effortless through cutting-edge technology. Our goal is to revolutionize the way icons are created, offering a simple and efficient solution for designers, developers, and enthusiasts alike.</p>
                <Link to={!user ? "/signin" : "/pricing"} className="dark:bg-blue-700 bg-blue-500 shadow-2xl dark:shadow-blue-900 shadow-blue-400 rounded-lg py-2 px-5 text-white font-normal text-md">
                    {!user ? "Sign in" : "See our pricing plan"}
                </Link>
                
            </div>
        
        </section>
    )
}

export default AboutUs