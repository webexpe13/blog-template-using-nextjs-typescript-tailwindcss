/** @type {import('tailwindcss').Config} */
const tailwind = {
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
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1200px',
      },
    },
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: ['class', '[data-mode="dark"]'],
}

module.exports = tailwind