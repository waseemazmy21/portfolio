'use client';

import { useState, useEffect, createContext, useContext } from 'react';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type Theme = 'light' | 'dark';
// context
const ThemeContext = createContext<ThemeContextType | null>(null);

// context hook
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
}

// context provider
const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  function toggleTheme() {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') {
        localStorage.setItem('theme', 'dark');
        return 'dark';
      } else {
        localStorage.setItem('theme', 'light');
        return 'light';
      }
    });
  }

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme') as Theme | null;
    if (localStorageTheme) {
      setTheme(localStorageTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
