const { addDynamicIconSelectors } = require('@iconify/tailwind')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        primary: "#ee5019",
        "primary-shade": "#d64817",   
        blue: {
          600: "#ee5019",
        },
        
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
    addDynamicIconSelectors(),
  ],
};
