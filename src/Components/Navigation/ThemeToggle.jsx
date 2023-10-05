import styles from './ThemeToggle.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import Tooltip from '../Tooltip/Tooltip';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const switchPosition = theme === 'dark' ? styles.left : styles.right;
  const handleShowTooltip = () => {
    console.log('hola');
    setShowTooltip(true);
  };
  const handleHideTooltip = () => setShowTooltip(false);
  return (
    <div
      className={styles['theme-container']}
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
      onClick={toggleTheme}
      role='switch'
    >
      <span className={`${styles.switch} ${switchPosition}`}>
        {theme === 'light' && (
          <Sun
            className={`${styles.sun} ${styles['theme-svg']}`}
            onClick={e => {
              e.stopPropagation();
              toggleTheme();
            }}
          />
        )}
        {theme === 'dark' && (
          <Moon
            className={`${styles.moon} ${styles['theme-svg']}`}
            onClick={e => {
              e.stopPropagation();
              toggleTheme();
            }}
          />
        )}
      </span>
      <Tooltip
        classes={`${styles['theme-tooltip']} ${
          showTooltip ? styles.visible : ''
        }`}
      >
        Cambiar a modo {theme === 'dark' ? 'claro' : 'oscuro'}
      </Tooltip>
    </div>
  );
};

export default ThemeToggle;
