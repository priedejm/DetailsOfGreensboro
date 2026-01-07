import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greensboro': {
          'green': '#2F3A1D',
          'cream': '#F5F2E3',
          'accent': '#5A7052',
          'button': '#6A8D8D'
        }
      },
      fontFamily: {
        'script': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
