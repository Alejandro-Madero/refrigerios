import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export const useContextTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};
