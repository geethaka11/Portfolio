/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#2563EB', // Blue-600
          background: '#F9FAFB', // Gray-50
          text: '#1F2937', // Gray-800
          card: '#FFFFFF', // White
          border: '#E5E7EB', // Gray-200
        },
        dark: {
          primary: '#3B82F6', // Blue-500
          background: '#111827', // Gray-900
          text: '#F3F4F6', // Gray-100
          card: '#1F2937', // Gray-800
          border: '#374151', // Gray-700
        },
      },
    },
  },
  plugins: [],
};