/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#1e3a5f",
          600: "#2d5a87",
          500: "#3b6ea5",
        },
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};