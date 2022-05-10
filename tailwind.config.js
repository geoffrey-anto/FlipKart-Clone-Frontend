
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        headerBlue: '#2874F0',
        textGreen: "#388e3c",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
