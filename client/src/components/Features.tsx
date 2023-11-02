import { idea_bulb, colors, ai_icon } from "../images"
const Features = () => {
    return (
        <section id="features" className="flex flex-col gap-28 md:px-20 px-10">
            <div className="relative space-x-2">
                <div className="absolute -top-32 -z-0 -left-20 w-96 h-96 rounded-full dark:bg-gray-800 bg-gray-300 blur-3xl"></div>
                <h2 className="relative z-10 lg:text-8xl md:text-7xl text-6xl dark:text-gray-200 text-gray-800 font-semibold">Features</h2>
                <p className="relative z-10 text-gray-500">Discover the powerful capabilities of our icon-generating Tool through these key features. </p>
            </div>

            <div className="flex items-center justify-center gap-5 flex-wrap">
                <div className="relative flex w-[25rem] flex-col items-center gap-y-4 bg-gray-300 dark:bg-gradient-to-t dark:from-black dark:to-gray-900 px-10 pb-10 pt-20 rounded-2xl text-center">
                    <img src={idea_bulb} className="w-32 absolute -top-16" alt="" />
                    <h5 className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text xl:text-5xl text-3xl font-light">Icon Variety</h5>
                    <h6 className="text-blue-700 font-normal xl:text-xl text-lg">Diverse & Unique icon styles</h6>
                    <p className="dark:text-gray-400 text-gray-500 xl:text-md text-sm font-light">Choose from a wide range of icon styles, including 3D, Pixar-inspired, Pixelated, Logos, Emojis, and Metallic designs.
                    Unleash your creativity with diverse visual styles that suit your project needs.</p>
                </div>
                <div className="relative flex w-[25rem] flex-col items-center gap-y-4 bg-gray-300 dark:bg-gradient-to-t dark:from-black dark:to-gray-900 px-10 pb-10 pt-20 rounded-2xl text-center">
                    <img src={colors} alt="" className="w-32 absolute -top-14" />
                    <h5 className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text xl:text-5xl text-3xl font-light">Color Customization</h5>
                    <h6 className="text-blue-700 font-normal xl:text-xl text-lg">Freedom of choice</h6>
                    <p className="dark:text-gray-400 text-gray-500 xl:text-md text-sm font-light">Customize your icons effortlessly using our intuitive color picker or predefined color options.
                    Create eye-catching icons with a color that matches your brand or project requirements.</p>
                </div>
                <div className="relative flex w-[25rem] flex-col items-center gap-y-4 bg-gray-300 dark:bg-gradient-to-t dark:from-black dark:to-gray-900 px-10 pb-10 pt-20 rounded-2xl text-center">
                    <img src={ai_icon} alt="" className="w-32 absolute -top-14" />
                    <h5 className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-transparent bg-clip-text xl:text-5xl text-3xl font-light">AI Powered</h5>
                    <h6 className="text-blue-700 font-normal xl:text-xl text-lg">Effortless icon creation</h6>
                    <p className="dark:text-gray-400 text-gray-500 xl:text-md text-sm font-light">Experience seamless icon generation using advanced AI technology powered by DALL-E API.
                    Get high-quality icons quickly and easily based on your preferences, enhancing your design process.</p>
                </div>
            </div>
        </section>
    )
}

export default Features