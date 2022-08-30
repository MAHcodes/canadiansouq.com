/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "rgb(230, 230, 230)",
        fff: "rgb(255, 255, 255)",
        gray: "rgb(145, 145, 145)",
        black: "rgb(36, 36, 36)",
        success: "rgb(39, 174, 96)",
        danger: "rgb(233, 90, 90)",
      },
      gridTemplateColumns: {
        productSliderAndInfo: "40% auto",
        productInfo: "auto 1fr",
        productsGridM: "repeat(auto-fill, minmax(10rem, 1fr))",
        productsGridD: "repeat(auto-fill, minmax(14rem, 1fr))",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(25%)",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        slideDownIn: {
          from: {
            transform: "scale(.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        slideDownIn: "slideDownIn 250ms ease-in-out",
      }
    },
  },
  plugins: [],
};
