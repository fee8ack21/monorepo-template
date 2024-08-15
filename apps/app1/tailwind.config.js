/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "../../packages/components/src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: {
                50: "#FFF5E6",
                100: "#FFDFB0",
                200: "#FFD495",
                300: "#FFC875",
                400: "#FFB74C",
                500: "#FFAD34",
                600: "#FF9801",
                700: "#F37D27",
                800: "#692601",
            },
        },
        extend: {},
    },
    plugins: [],
};
