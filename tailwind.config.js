module.exports = {
  content: [
    "./*.html",
    "./*/*/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        abc:"64px",
        xyz: "32px"
      },
      Color: {
        custom: {
          50: "#F4F5F7",
          100: "FFFFFF"
        }
      }

      }

        
      }
     }
      
  },
  variants: {
    extend: {},
  },
  plugins: [],
}