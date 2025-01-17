/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,tsx,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ['DM-Sans', 'sans-serif']
      },
      backgroundImage: {
        "background-radial": "radial-gradient(circle, #230D37 15%, #0D0316 50%)",
        "corner": "radial-gradient(closest-corner at 50% 50%, transparent 64%, rgba(13, 3, 22, 1) 79%)",
        "vignetter-linear": "linear-gradient(to right, #0D0316 0%, rgba(13, 3, 22, 0.15) 25%, rgba(13, 3, 22, 0) 50%, rgba(13, 3, 22, 0.15) 75%, #0D0316 100%)",
        "Linear": "linear-gradient(to right, #D387FF, rgba(211, 135, 255, 0))",
        'accent-linear': 'linear-gradient(to bottom, #49235F 0%, #D387FF 100%)',
        'accent-linear-2': 'linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.2) 100%)',
        'header-circle': "url(\"/images/Planet.png\")",
        "vignette-radial": "radial-gradient(50% 50% at 80%, #320D37 0%, #0D0316 80%)",
        'services-text': "linear-gradient(to bottom, #49235F 0%, #D387FF 100%)",
        'accent-light-linear-1': "linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%)",
      },
      backgroundColor: {
        'normal': "#0D0316",
        "main": "#230D37",
        'about-us': "#0D0316",
      },
      colors: {
        "accent": "#D387FF",
        'accent-dark': "#8F6DA3",
        "stroke": "#2B1B38"
      },
      borderColor: {
        'accent-light-linear-1': "linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%)"
      },
      dropShadow: {
        "service-shape": "drop-shadow(0px 16px 28px rgba(13, 3, 22, 0.3))"
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

