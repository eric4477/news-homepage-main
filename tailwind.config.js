/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    screens: {
      xsm: "375px",
      sm: "480px",
      nav: "540px",
      article: "490px",
      md: "1100px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      width: {
        heroImg: "70%",
        items: "30%",
        item2: "40%",
      },
      colors: {
        softOrange: "hsl(35, 77%, 62%)",
        SoftRed: "hsl(5, 85%, 63%)",
        OffWhite: "hsl(36, 100%, 99%)",
        grayisBlue: "hsl(233, 8%, 79%)",
        DarkGrayishBlue: "hsl(236, 13%, 42%)",
        VeryDarkBlue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
