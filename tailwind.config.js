/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        accent: '#FFD700',
        success: '#28A745',
        warning: '#FFC107',
        danger: '#DC3545',
      },
    },
  },
  plugins: [],
}
