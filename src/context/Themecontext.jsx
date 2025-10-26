import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };