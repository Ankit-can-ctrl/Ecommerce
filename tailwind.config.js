/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "serif"],
      },
      colors: {
        red: "#FF5252",
        bgcolor: "#F5F0F0",
        lightButton: "#c2bdbd",
        darkButton: "#FF5252",
      },
    },
  },
  plugins: [],
};
