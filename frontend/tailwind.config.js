/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3e2',
          100: '#fde7c5',
          200: '#fbcf8b',
          300: '#f9b751',
          400: '#f79f17',
          500: '#dd8700',
          600: '#ad6900',
          700: '#7d4b00',
          800: '#4d2d00',
          900: '#1d0f00',
        },
        game: {
          sky: '#87CEEB',
          grass: '#7EC850',
          ground: '#C4A464',
          water: '#4F9FDE',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
}
