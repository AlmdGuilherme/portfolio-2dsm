/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '0xl': '0 0 60px -20px rgba(255, 255, 255, 0.5)',
    },
      screens:{
        'ss': '320px',
        '1xl': '1440px'
      }
  },
  plugins: [],
  }
}
