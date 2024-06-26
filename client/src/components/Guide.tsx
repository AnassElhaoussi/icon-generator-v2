import { question_mark } from "../images"

const Guide = () => {
    return (
        <section id="guide" className="relative flex flex-col gap-16 md:px-20 px-10">
            <div className="absolute -z-0 -left-10 top-0 w-64 h-64 dark:bg-gray-800 text-gray-300 rounded-2xl blur-3xl "></div>
            <div className="flex justify-between items-center">
                <div className="relative z-10 space-y-2">
                    <h5 className="dark:text-blue-600 text-blue-500 font-normal text-lg">Guide</h5>
                    <h2 className="text-gray-800 dark:text-gray-300 font-semibold md:text-7xl text-6xl">How to generate icons?</h2>
                    <p className="text-gray-500">Straight-forward guide to start using our application safely!</p>
                </div>
                <img src={question_mark} className="md:w-20 w-10 rotate-45" alt="" />
            </div>
            <ul className="flex flex-col gap-10 px-10 lg:w-3/4 w-full">
                <li className="flex flex-col gap-5 items-start"> 
                    <span className="bg-blue-600 py-3 px-5 rounded-xl text-white">1</span>
                    <div className="space-y-2">
                        <h5 className="text-transparent bg-gradient-to-r from-gray-600 to-gray-200 bg-clip-text text-3xl font-extrabold">Describe your desired icon</h5>
                        <p className="text-gray-400 font-light text-md">Use a clear noun and adjective to describe the essence and style you envision for your icon. For example, "Vibrant Tree" or "Minimalist Globe."</p>
                    </div>
                </li>
                <li className="flex flex-col gap-5 items-start">
                    <span className="bg-blue-600 py-3 px-5 rounded-xl text-white">2</span>
                    <div className="space-y-2">
                        <h5 className="text-transparent bg-gradient-to-r from-gray-600 to-gray-200 bg-clip-text text-3xl font-extrabold">Customizing colors</h5>
                        <p className="text-gray-400 font-light text-md">Use the color picker to select specific colors that match your branding or design requirements. Alternatively, choose from a range of predefined colors provided to speed up the customization process.</p>
                    </div>
                </li>
                <li className="flex flex-col gap-5 items-start">
                    <span className="bg-blue-600 py-3 px-5 rounded-xl text-white">3</span>
                    <div className="space-y-2">
                        <h5 className="text-transparent bg-gradient-to-r from-gray-600 to-gray-200 bg-clip-text text-3xl font-extrabold">Selecting an icon style</h5>
                        <p className="text-gray-400 font-light text-md">Explore and choose an icon style that complements your desired aesthetic (e.g., 3D, Pixar, Pixelated, Logos, Emojis, Metallic). Consider the theme and context of your project.</p>
                    </div>
                </li>
                <li className="flex flex-col gap-5 items-start">
                    <span className="bg-blue-600 py-3 px-5 rounded-xl text-white">4</span>
                    <div className="space-y-2">
                        <h5 className="text-transparent bg-gradient-to-r from-gray-600 to-gray-200 bg-clip-text text-3xl font-extrabold">Generating the icon</h5>
                        <p className="text-gray-400 font-light text-md">Once you've described your icon, selected a style, and customized colors and background, hit the "Submit" or "Generate" button to create your unique icon based on your preferences.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Guide