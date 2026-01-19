/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f3',
          100: '#ffe5e0',
          200: '#ffd0c7',
          300: '#ffb3a3',
          400: '#ff8c73',
          500: '#ff6b4a',
          600: '#ff5233',
          700: '#f53d1f',
          800: '#cc3318',
          900: '#a82e18',
        },
      },
    },
  },
  plugins: [],
};
