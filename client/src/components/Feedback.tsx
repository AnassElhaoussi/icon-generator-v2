import React from "react";
import { Image } from "@chakra-ui/react";
import { abstract_shape3 } from "../images";

const Feedback = () => {
    return (
        <section className="relative bg-gray-100 dark:bg-gray-900 p-10 mx-20 rounded-xl border-4 border-yellow-400 shadow-2xl shadow-yellow-100 dark:shadow-yellow-800">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-y-2">
                    <h3 className="text-5xl font-semibold text-black dark:text-white">How would you rate this product?</h3>
                    <p className="text-gray-400 dark:text-gray-600">Your opinion matters! Share your rating with us and let us know about your degree of satisfaction.</p>
                </div>
                <div className="flex items-center gap-5">
                    <span className="bg-yellow-300 p-2 rounded-md text-2xl">😁</span>
                    <span className="bg-yellow-300 p-2 rounded-md text-2xl">😃</span>
                    <span className="bg-yellow-300 p-2 rounded-md text-2xl">😐</span>
                    <span className="bg-yellow-300 p-2 rounded-md text-2xl">😤</span>
                </div>
            </div>
        </section>
    )
}
export default Feedback