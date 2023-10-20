
const Footer = () => {
    return (
        <footer id="footer" className="flex justify-between text-white font-light px-20 bg-gradient-to-r from-black to-gray-900 flex-wrap gap-y-10 gap-x-10 p-8 items-center ">
            <div className="space-y-1">
                <h4 className="text-xl">© 2023 <span className="text-blue-700 font-semibold">ELHAOUSSI</span> Software Solutions.</h4>
                <p className="text-gray-500 text-sm">Empowering Success Through Innovation.</p>
            </div>
            <ul className="flex flex-col gap-4">
                <li className="cursor-pointer hover:text-blue-700 transition-colors">
                    <a href="#home">Home</a>
                </li>
                <li className="cursor-pointer hover:text-blue-700 transition-colors">
                    <a href="#about">About Us</a>
                </li>
                <li className="cursor-pointer hover:text-blue-700 transition-colors">
                    <a href="#features">Features</a>
                </li>
                <li className="cursor-pointer hover:text-blue-700 transition-colors">
                    <a href="#guide">Guide</a>
                </li>
            </ul>
            <div>
                For contact:
                <h4 className="font-semibold">anassbusiness12@gmail.com</h4>
            </div>
        </footer>
    )
}

export default Footer