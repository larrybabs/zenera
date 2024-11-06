/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#830B0D',
        'secondary': '#323232',
        'white': '#ffffff',
        'gray': '#EBE8E8',
        'danger': '#ff0000',
      },
    },
  },
  plugins: [],
}

