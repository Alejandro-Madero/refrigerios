import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({ theme: 'dark' });

export default function ThemeProvider({ children }) {
  const [ theme, setTheme ] = useState(localStorage.getItem('theme') ?? 'dark');

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
  }, [ theme ]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
