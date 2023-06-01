/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        bg1: 'url("../assets/bg1.jpg")',
      },
    },
  },
  plugins: [],
};
