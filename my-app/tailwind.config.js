/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000814',
      'marigold': '#ffc300',
      'yellow': '#ffd60a',
      'gray': '#d3d3d3',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [],
};

