/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      yellow: '#FAEA48',
      spaceBlack: '#1A1B1D',
      pink: '#FF00D6',
      blue: '#20E4FF',
      white: '#FFFFFF',
      darkGrey: '#555555'

    },
    borderWidth: {
      '7': '14px' 
    },
    rotate: {
      '20': '20deg',
      '14': '14deg'
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0%)' },
        '50%': { transform: 'translateY(-5%)' }
      }
    },
    animation: {
      float: 'float 10s ease-in-out infinite'
    }
  },
  plugins: [],
}
