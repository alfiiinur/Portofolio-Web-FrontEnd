// src/components/ThemeSwitcher.jsx
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // Gunakan ikon untuk tampilan yang lebih baik

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text transition-colors duration-300"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};
