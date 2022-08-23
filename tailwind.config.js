/** @type {import('tailwindcss').Config} */
const tailwind = {
  darkMode: ['class'],
  // purge: ['./src/**/*.{js,ts,jsx,tsx}', "./pages/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '960px',
        xl: '1140px',
        '2xl': '1200px',
      },
      padding: '15px'
    },
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}

module.exports = tailwind