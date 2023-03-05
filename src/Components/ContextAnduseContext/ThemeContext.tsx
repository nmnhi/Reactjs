import { useState, createContext } from "react";

// Context
// CompA => CompB => CompC
// Them: Dark/Light

// 1. Create Context
// 2. Provider
// 3. Consumer

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
