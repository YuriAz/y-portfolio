/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eceff1',
        secondary: '#333333',
        dark: '#02032b',
        easyDark: '#292929',
        basic: '#eceff1',
        light: '#9e9e9e'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
