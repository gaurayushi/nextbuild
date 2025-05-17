import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class', 
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        pulseBorder: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.3)' },
          '70%': { boxShadow: '0 0 0 8px rgba(255, 255, 255, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)' },
        },
        neonPulse: {
          '0%': { boxShadow: '0 0 0px rgba(34, 255, 122, 0.6)' },
          '50%': { boxShadow: '0 0 15px rgba(34, 255, 122, 0.9)' },
          '100%': { boxShadow: '0 0 0px rgba(34, 255, 122, 0.6)' },
        },
      },
      animation: {
        pulseBorder: 'pulseBorder 1s ease-in-out infinite',
        neonPulse: 'neonPulse 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [
  require('tailwind-scrollbar-hide')
]
}
