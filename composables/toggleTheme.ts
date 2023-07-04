export const toggleTheme = () => {
  useColorMode().preference =
    useColorMode().value === "dark" ? "light" : "dark";
};
