const defaultValue = require("tailwindcss");

module.exports = {
  content: [],
  theme: {
    fontFamily: {
      ...defaultValue.fontFamily,
      plus: ['"Plus Jakarta Sans"', "sans-serif"],
    },
    colors: {
      ...defaultValue.colors,
      bg_primary: "#FFFFFF",
      bg_secondary: "#FCFBFB",
      color_primary: "#000000",
      color_secondary: "#7C7070",
    },
    extend: {},
  },
  plugins: [],
};
