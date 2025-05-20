/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#035591',
        secondary: '#4CA3DD',
        hover: '#023B66',
        accent: '#FFB300',
        background: '#E6F1F8',
      },
    },
  },
  plugins: [],
};
