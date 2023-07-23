import { useContext, useState } from "react";
import styles from "./Navigation.module.css";
import Logo from "../Logo/Logo";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ThemeContext } from "../../context/ThemeProvider";

export default function Navigation() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleShowTooltip = () => setShowTooltip(true);
  const handleHideTooltip = () => setShowTooltip(false);

  return (
    <header className={`${styles["nav-header"]} ${styles[`shadow-${theme}`]}`}>
      <nav className={styles.nav}>
        <Logo classes={styles.logo} />
        <div
          className={styles["theme-container"]}
          onMouseEnter={handleShowTooltip}
          onMouseLeave={handleHideTooltip}
        >
          {theme === "dark" && (
            <Sun
              className={`${styles.sun} ${styles["theme-svg"]}`}
              onClick={toggleTheme}
            />
          )}
          {theme === "light" && (
            <Moon
              className={`${styles.moon} ${styles["theme-svg"]}`}
              onClick={toggleTheme}
            />
          )}{" "}
          {showTooltip && (
            <div className={styles["theme-tooltip"]}>
              <p>Modo {theme === "dark" ? "claro" : "oscuro"}</p>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
