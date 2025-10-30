// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line includes all relevant files in your src folder
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
              "primary": "#ecb613",
              "background-light": "#f8f8f6",
              "background-dark": "#121212",
              "surface-dark": "#221e11",
              "text-primary-dark": "#F5F5F5",
              "text-secondary-dark": "#c9bb92",
            },
            fontFamily: {
              "display": ["Epilogue", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.5rem", "lg": "0.75rem", "xl": "1rem", "full": "9999px"},
    },
  },
  plugins: [],
}