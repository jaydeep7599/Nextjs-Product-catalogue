"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ThemeContextType {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext =
  createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored =
      localStorage.getItem("theme") === "dark";

    setDark(stored);

    if (stored) {
      document.documentElement.classList.add(
        "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;

      if (next) {
        document.documentElement.classList.add(
          "dark"
        );
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove(
          "dark"
        );
        localStorage.setItem("theme", "light");
      }

      return next;
    });
  };

  return (
    <ThemeContext.Provider
      value={{ dark, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider"
    );
  }

  return context;
};