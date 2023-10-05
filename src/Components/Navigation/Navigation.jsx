import styles from './Navigation.module.css';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

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
