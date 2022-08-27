/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {},
    extend: {
      colors: {
        white: "rgb(230, 230, 230)",
        fff: "rgb(255, 255, 255)",
        gray: "rgb(145, 145, 145)",
        black: "rgb(36, 36, 36)",
        success: "rgb(39, 174, 96)",
        danger: "rgb(233, 90, 90)",
      },
    },
    keyframes: {
      bounce: {
        "0%, 100%": {
          "transform": "none",
          "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          "transform": "translateY(25%)",
          "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
        }
      }
    },
    gridTemplateColumns: {
      "productInfo": "auto 1fr"
    }
  },
  plugins: [],
};
