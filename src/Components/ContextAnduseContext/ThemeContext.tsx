import { useState, createContext } from "react";

const ThemeContext = createContext<any>("");

function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export { ThemeProvider, ThemeContext };
