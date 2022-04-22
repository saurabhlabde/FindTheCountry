const defaultValue = require("tailwindcss");

module.exports = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ...defaultValue.fontFamily,
      plus: ['"Plus Jakarta Sans"', "sans-serif"],
    },
    colors: {
      ...defaultValue.colors,
      bg_primary: "#FFFFFF",
      bg_secondary: "#FCFBFB",
      bg_none: "transparent",
      color_primary: "#000000",
      color_secondary: "#7C7070",
    },
    extend: {
      height: {
        50: "3.125rem",
      },
      width: {
        500: "31.25rem",
      },
      dropShadow: {
        blue: ["0 2px 30px rgba(255, 0, 255, 0.10)"],
      },
    },
  },
  plugins: [],
};
