import styles from './Navigation.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import Logo from '../Logo/Logo';
import Tooltip from '../Tooltip/Tooltip';

export default function Navigation() {
  return (
    <header className={styles['nav-header']}>
      <nav className={styles.nav} role='navigation'>
        <Logo classes={styles.logo} />
        <ThemeToggle />
      </nav>
    </header>
  );
}

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const switchPosition = theme === 'dark' ? styles.left : styles.right;
  const handleShowTooltip = () => setShowTooltip(true);
  const handleHideTooltip = () => setShowTooltip(false);

  return (
    <div
      className={styles['theme-container']}
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      <span className={`${styles.switch} ${switchPosition}`}>
        {theme === 'light' && (
          <Sun
            className={`${styles.sun} ${styles['theme-svg']}`}
            onClick={toggleTheme}
          />
        )}
        {theme === 'dark' && (
          <Moon
            className={`${styles.moon} ${styles['theme-svg']}`}
            onClick={toggleTheme}
          />
        )}
      </span>
    </div>
  );
};
