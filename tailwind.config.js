/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: { min: "375px", max: "767px" },
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "rose-white": "hsl(330, 100%, 98%)",
        eggshell: "hsl(30, 54%, 90%)",
        "light-grey": "hsl(30, 18%, 87%)",
        "wenge-brown": "hsl(30, 10%, 34%)",
        "dark-charcoal": "hsl(24, 5%, 18%)",
        "dark-raspberry": "hsl(332, 51%, 32%)",
        nutmeg: "hsl(14, 45%, 36%)",
      },
      fontFamily: {
        "Young-Serif": ["Young Serif", "serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
