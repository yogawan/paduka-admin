/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image-gradient': "url('/bg.png')",
      },
      screens: {
        'mobile': { 'max': '400px' },
      },
    },
  },
  plugins: [],
}
