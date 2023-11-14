import { UserContext } from "../Context/UserContextProvider"
import { UserContextState } from "../types/Context/signin"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { abstract_shape1 } from "../images"
import { Image } from "@chakra-ui/react"

export const About = () => {
    const {user} = useContext(UserContext) as UserContextState
    return (
        <section 
        id="about"
        className="relative flex flex-col gap-8 items-center justify-center xl:px-20 px-10 md:mx-20 mx-10 py-10 text-center bg-gray-100 dark:bg-gray-900 rounded-2xl">
            <Image src={abstract_shape1} className="absolute sm:w-1/2 w-0 -z-1 md:top-10 top-44 md:-left-44 -left-20 rotate-45" />
            <div className="lg:w-2/3 w-full space-y-6">
                <h5 className="text-blue-600">About</h5>
                <h2 className="text-[12vmin] leading-[12vmin] font-semibold text-black dark:text-white">
                    Take your <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text">
                        design
                    </span> projects to the next level
                </h2>
                <p className="text-gray-500 md:text-base text-sm dark:text-gray-600">
                    IconizeAI is the creative toolkit you've been waiting for. Our AI-powered icon generation tool simplifies the design process, saving you time and effort. Whether you're a designer, developer, or business owner, IconizeAI can help you bring your creative ideas to life in an instant.
                </p>
            </div>
            <Link to={user ? "/pricing" : "/signin"} 
            className="bg-blue-700 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] shadow-blue-600 hover:bg-transparent hover:border-blue-700 border-4 border-transparent rounded-xl py-3 px-6 text-xl transition-all text-white hover:text-black dark:hover:text-white">
                {user ? "Go to pricing" : "Sign in"}
            </Link>
        </section>
    )
}