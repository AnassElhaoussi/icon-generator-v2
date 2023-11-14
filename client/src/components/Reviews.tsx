import { Avatar, Image } from "@chakra-ui/react"
import Stars from "react-star-ratings"
import { abstract_shape2 } from "../images"

export const Reviews = () => {
    return (
        <section className="flex flex-col gap-20 items-center justfiy-center p-20">
            <div className="text-center">    
                <h2 className="text-[14vmin] font-semibold dark:text-gray-200 text-gray-800 leading-[14vmin]">Reviews</h2>
                <p className="text-gray-500">See what our users think about the platform</p>
            </div>
            <div className="relative flex gap-10 flex-wrap">
                <div className="relative z-10 flex lg:flex-1 flex-2 flex-col gap-4 items-start bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-3">
                        <Avatar name="Amelie Griffith" />
                        <div>
                            <h2 className="text-gray-800 dark:text-gray-200 text-3xl ">Amelie Griffith</h2>
                            <h4 className="text-gray-400 dark:text-gray-500">@amelie12</h4>
                        </div>
                    </div>
                    <span className="text-sm bg-blue-500 text-blue-900 rounded-md p-1">20 images generated</span>
                    <p className="text-blue-900 dark:text-blue-400 opacity-80">I was having a trouble finding specific icons. Now with this tool it became much easier for me to get suitable icons with a specific color and icon style</p>
                    <Stars numberOfStars={5} rating={4.5} starRatedColor="orange" starDimension="2rem" /> 
                </div>
                <div className="relative z-10 flex lg:flex-1 flex-2 flex-col gap-4 items-start bg-gray-100 dark:bg-gray-900 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.3)] shadow-blue-600 p-8 rounded-2xl border-4 border-blue-700">
                    <div className="flex items-center gap-3">
                        <Avatar name="Amelie Griffith" />
                        <div>
                            <h2 className="text-gray-800 dark:text-gray-200 text-3xl ">Amelie Griffith</h2>
                            <h4 className="text-gray-400 dark:text-gray-500">@amelie12</h4>
                        </div>
                    </div>
                    <span className="text-sm bg-blue-500 text-blue-900 rounded-md p-1">20 images generated</span>
                    <p className="text-blue-900 dark:text-blue-400 opacity-80">I was having a trouble finding specific icons. Now with this tool it became much easier for me to get suitable icons with a specific color and icon style</p>
                    <Stars numberOfStars={5} rating={4.5} starRatedColor="orange" starDimension="2rem" /> 
                </div>
                <div className="relative z-10 flex lg:flex-1 flex-2 flex-col gap-4 items-start bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-3">
                        <Avatar name="Amelie Griffith" />
                        <div>
                            <h2 className="text-gray-800 dark:text-gray-200 text-3xl ">Amelie Griffith</h2>
                            <h4 className="text-gray-400 dark:text-gray-500">@amelie12</h4>
                        </div>
                    </div>
                    <span className="text-sm bg-blue-500 text-blue-900 rounded-md p-1">20 images generated</span>
                    <p className="text-blue-900 dark:text-blue-400 opacity-80">I was having a trouble finding specific icons. Now with this tool it became much easier for me to get suitable icons with a specific color and icon style</p>
                    <Stars numberOfStars={5} rating={4.5} starRatedColor="orange" starDimension="2rem" /> 
                </div>
                <Image src={abstract_shape2} className="absolute -right-44 -top-32 -z-0" />
            </div>
        </section>
    )
}