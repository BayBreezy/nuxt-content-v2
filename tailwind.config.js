const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["'DM Serif Text'", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: colors.emerald[500],
          ...colors.emerald,
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
