/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ace-blue': {
          '100': '#0E172A',
          '150': '#A78BFA',
          '200': '#8B5CF6',
          '300': '#C3B5FD',
          '400': '#92C5FD',
        },
        'ace-gray': {
          '100': '#CBD5E1'
        }
      }
    }
  },
  plugins: []
}

