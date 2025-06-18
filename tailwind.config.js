/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899' },
          '50%': { textShadow: '0 0 20px #ec4899, 0 0 40px #ec4899' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        'fade-up': 'fadeUp 1s ease-out',
        'fade-in': 'fadeIn 2s ease-in',
      },
    },
  },
  
  plugins: [],
};
