/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: {
            DEFAULT: "#4845b3",
            dark: "#282661",
            darker: "#282661",
            darkest: "#131230",
            light: "#4643ac",
            lighter: "#5450c4",
            lightest: "#6965f3",
          },
        },
        dark: {
          primary: {
            DEFAULT: "#6965f3",
            dark: "#5e5adb",
            darker: "#4a46c0",
            darkest: "#3c38b8",
            light: "#7975ff",
            lighter: "#837eff",
            lightest: "#9894ff",
          },
        },
      },
    },
  },
  plugins: [],
};
