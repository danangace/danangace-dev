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
        'ace-blue-100': '#0E172A',
        'ace-blue-150': '#A78BFA',
        'ace-blue-200': '#8B5CF6',
        'ace-blue-300': '#C3B5FD',
        'ace-blue-400': '#92C5FD'
      },
      textColor: ({ theme }) => ({
        'text-ace-blue-100': theme.colors['ace-blue-100'],
        'text-ace-blue-200': theme.colors['ace-blue-200'],
        'text-ace-blue-300': theme.colors['ace-blue-300'],
        'text-ace-blue-400': theme.colors['ace-blue-400']
      }),
      backgroundColor: ({ theme }) => ({
        'bg-ace-blue-100': theme.colors['ace-blue-100']
      })
    }
  },
  plugins: []
}

