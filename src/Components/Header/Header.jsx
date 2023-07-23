import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import styles from "./Header.module.css";
import { ReactComponent as Fingers } from "../../assets/fingers.svg";
const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <h1 className={`${styles.title} ${styles[`title-${theme}`]}`}>
        ¿Cúanto voy a cobrar?
      </h1>
      <Fingers className={styles.fingers} />
    </header>
  );
};

export default Header;
