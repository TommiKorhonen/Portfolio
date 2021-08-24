module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{html,js}',
     './src/components/**/*.{html,js}',
     './src/layouts/**/*.{html,js}',
     './src/index.html',
    "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlack: "#0f0f0f",
        twitchPurple: "#6441a5",
      },
      fontFamily: {
        "roboto": ['Roboto', "sans-serif"]
      },
      boxShadow: {
        orange: "0 0 1px #ed9f4b",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
