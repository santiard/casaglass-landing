/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1e2753",
        "light-blue": "#344490",
        black: "#0a060b",
        gray: "#c2c2c3",
        "light-gray": "#e0e0e0",
        "dark-gray": "#3a393b",
        white: "#f9f9f9",
      },
    },
  },
  plugins: [],
};

