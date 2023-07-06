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
        /* Light Theme */
        light: {
          primary: {
            DEFAULT: "#00ACAC",
            dark: "#00ACAC",
            darker: "#008F8F",
            darkest: "#007070",
            light: "#00ACAC",
            lighter: "#00DCDC",
            lightest: "#6965f3",
          },
        },
        /* Dark Theme */
        dark: {
          primary: {
            DEFAULT: "#00e1e1",
            dark: "#00ACAC",
            darker: "#008F8F",
            darkest: "#007070",
            light: "#00FFFF",
            lighter: "#00ECEC",
            lightest: "#00DCDC",
          },
        },
      },
    },
  },
  plugins: [],
};
