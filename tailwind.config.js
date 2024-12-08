/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif']
      },
      backgroundImage: {
        "background-radial": "radial-gradient(circle, #320D37 15%, #0D0316 100%)",
        "Linear": "linear-gradient(to right, #D387FF, rgba(211, 135, 255, 0))",
        'accent-linear': 'linear-gradient(to bottom, #49235F 0%, #D387FF 100%)',
        'accent-linear-2': 'linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.2) 100%)',
        'header-circle': "url(\"/images/Planet.png\")"
      },
      colors: {
        "accent": "#D387FF"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")],
}

