import styles from './Header.module.css';
import { ReactComponent as Fingers } from '../../assets/fingers.svg';
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>¿Cúanto voy a cobrar?</h1>
        <Fingers className={styles.fingers} />
      </header>
      <p className={styles.cumple}>
        🎉🎊 ¡Feliz cumpleaños sin aumento del refrigerio! 🎊🎉
      </p>
    </div>
  );
};

export default Header;
