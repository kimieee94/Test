module.exports = {
  content: [
    "./*.html",
    "./*/*/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        abc:"13px",
        xyz: "25px"
      },
      Colors: {
        custom: {
          50: "#FFFF00",
          100: "#00000"
        }
      }
     }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}