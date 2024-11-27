/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {
      backgroundImage: {},
      colors: {
        rugged: "#115E59",
        simple: "#E17654",
        luxury: "#161616",
      },
    },
  },

  plugins: [],
};
