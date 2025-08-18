module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        saira: ['Saira', 'sans-serif'],
      },
      colors: {
        primary: '#003f72',
        secondary: '#f97316',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'tada': 'tada 1s infinite',
      },
      keyframes: {
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        }
      }
    }
  },
  plugins: [],
}