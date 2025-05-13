/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg) scale(100%)', color:'#FF0000' },
          '50%': { transform: 'rotate(6deg) scale(110%)',color:'#00FF00' },
        },
        rotate: {
          '0%': { transform:'rotate(0deg)' },
          '50%': { transform:'rotate(180deg)' },
          '100%': { transform:'rotate(360deg)' },
        },
        textcolor: {
          '0%': { color:'#FF0000' },
          '50%': { color:'#00FF00' },
          '100%': { color:'#FFA500' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        rotate: 'rotate 2s   infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}