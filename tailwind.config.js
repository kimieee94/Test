module.exports = {
  content: [
    "./*.html",
    "./*/*/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        H2: ["48px" , "64px"],
        body: ["18px" , "32px"],
        H3: ["40px" , "54px"]
      },
      colors: {
        custom: {
          50:"#F7F4F4",
          100: "#FFFFFF",
          120: "#C4C4C4"
        }
      },
    },
  },
  variant: {
    extend: {},
  },
  plugins: [],
}