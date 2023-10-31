/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                body: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"]
            },
            fontSize: {
                clamp: "clamp(100px, 5vw, 200px)",
            },
        },
    },
    plugins: [],
}