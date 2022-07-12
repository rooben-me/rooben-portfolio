/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-main": "#5F2EEA",
        "primary-dark": "#2A00A2",
        "title": "#14142B",
        "body": "#4E4B66",
        "line": "#D9DBE9",
        "link": "#716C8D",
        "background": "#F7F7FC"
      },
      fontFamily: {
        monda: ["Monda", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
