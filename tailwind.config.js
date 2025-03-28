/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Add this if you have an index.html
    "./src/**/*.{js,ts,jsx,tsx}",  // Scan all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
