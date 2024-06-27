/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm: '320px',
      sm: '640px',
      md: '1024px',
      lg: '1440px',
    },
    extend: {},
  },
  plugins: [],
}
