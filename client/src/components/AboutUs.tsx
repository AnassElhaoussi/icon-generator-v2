import React from "react"
import { aboutus_decoration, rising_icon } from "../images"


const AboutUs = () => {
    return (
        <section className="relative flex flex-col justify-center gap-10 px-20 py-10">
            <div className="absolute -top-20 -left-10 w-96 h-96 rounded-full bg-gray-800 blur-3xl"></div>
            <div className="absolute -top-20 -right-44 md:w-96 w-0 h-96 rounded-full bg-gray-800 blur-3xl"></div>
            <div className="relative flex sm:flex-nowrap gap-5 flex-wrap-reverse justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-8xl text-gray-200">About Us</h2>
                    <p className="text-gray-400 text-2xl font-light lg:w-1/2 w-full">
                        Our mission is to provide a seamless platform for generating a diverse range of stunning icons tailored to your preferences.
                    </p>
                </div>
                <img 
                src={aboutus_decoration} 
                alt="decoration_icon" 
                className="lg:w-44 sm:w-32 w-32 " />
            </div>
            
                <div className="space-y-4">
                    <h4 className="text-4xl font-semibold text-gray-300">Our vision</h4>
                    <p className="text-sm font-light text-gray-400 lg:w-1/2 w-full">We envision a world where design is made effortless through cutting-edge technology. Our goal is to revolutionize the way icons are created, offering a simple and efficient solution for designers, developers, and enthusiasts alike.</p>
                    <button className="bg-blue-600 shadow-lg shadow-blue-900 rounded-lg py-2 px-5 text-white font-normal text-md">
                        See our pricing plan
                    </button>
                </div>
        
        </section>
    )
}

export default AboutUs