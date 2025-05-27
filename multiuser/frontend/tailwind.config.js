/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  animation: {
    'slide-in': 'slideIn 0.5s ease-out forwards',
    'neon-spin': 'neonSpin 4s linear infinite',
  },
  keyframes: {
    slideIn: {
      '0%': { opacity: 0, transform: 'translateX(20px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' },
    },
    neonSpin: {
      '0%': {
        transform: 'rotate(0deg)',
        boxShadow: '0 0 5px #0f0, 0 0 10px #0ff, 0 0 20px #0f0',
      },
      '50%': {
        boxShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff',
      },
      '100%': {
        transform: 'rotate(360deg)',
        boxShadow: '0 0 5px #0f0, 0 0 10px #0ff, 0 0 20px #0f0',
      },
    },
  },
}
,},
  plugins: [],
}
