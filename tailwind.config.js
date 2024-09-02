/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/pages/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'sm': '4px',
        'md': '12px',
        'lg': '24px',
        'xl': '40px',
        '2xl': '64px',
      },

    },
  },
  plugins: [],
}