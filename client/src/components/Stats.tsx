import { Image } from "@chakra-ui/react"
import { g_img1, g_img2, g_img3 } from "../images"

const Stats = () => {
    return (
            <div className="flex flex-col items-center gap-10 px-20">
                <div className="space-y-1 text-center">
                    <h3 className="text-6xl font-semibold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Latest Generated Images</h3>
                    <p className="text-xl text-gray-600">Start generating yours too!</p>
                </div>
                <div className="flex gap-5">
                    <Image src={g_img1} className="rounded-2xl shadow-2xl shadow-red-300 dark:shadow-red-800 w-1/3" />
                    <Image src={g_img2} className="rounded-2xl shadow-2xl shadow-yellow-300 dark:shadow-yellow-800 w-1/3" />
                    <Image src={g_img3} className="rounded-2xl shadow-2xl shadow-green-400 dark:shadow-green-800 w-1/3" />
                </div>
            </div> 
    )
}

export default Stats