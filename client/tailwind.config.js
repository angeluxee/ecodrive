/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eco': '#e4f3f0',
        'eco1': '#559421',
        'eco2': '#145c6b',
        'eco2.1': '#216b7c',
        
      }
    },
  },
  plugins: [],
}

