import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getDefaultTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
