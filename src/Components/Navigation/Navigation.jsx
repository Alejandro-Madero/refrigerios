import styles from './Navigation.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import Logo from '../Logo/Logo';
import Tooltip from '../Tooltip/Tooltip';

export default function Navigation() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleShowTooltip = () => setShowTooltip(true);
  const handleHideTooltip = () => setShowTooltip(false);

  return (
    <header className={styles['nav-header']}>
      <nav className={styles.nav} role='navigation'>
        <Logo classes={styles.logo} />
        <div
          className={styles['theme-container']}
          onMouseEnter={handleShowTooltip}
          onMouseLeave={handleHideTooltip}
        >
          {theme === 'dark' && (
            <Sun
              className={`${styles.sun} ${styles['theme-svg']}`}
              onClick={toggleTheme}
            />
          )}
          {theme === 'light' && (
            <Moon
              className={`${styles.moon} ${styles['theme-svg']}`}
              onClick={toggleTheme}
            />
          )}

          <Tooltip
            classes={`${styles['theme-tooltip']} ${
              showTooltip ? styles.visible : ''
            }`}
          >
            <p>Modo {theme === 'dark' ? 'claro' : 'oscuro'}</p>
          </Tooltip>
        </div>
      </nav>
    </header>
  );
}
