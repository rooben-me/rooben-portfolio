/** @type {import('tailwindcss').Config} */

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1/1": "100%",
      },
      boxShadow: {
        highlight: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      screens: {
        narrow: { raw: "(max-aspect-ratio: 3 / 2)" },
        wide: { raw: "(min-aspect-ratio: 3 / 2)" },
        "taller-than-854": { raw: "(min-height: 854px)" },
      },

      colors: {
        "primary-main": "#5F2EEA",
        "primary-dark": "#2A00A2",
        title: "#14142B",
        body: "#4E4B66",
        line: "#D9DBE9",
        link: "#716C8D",
        background: "#F7F7FC",
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
