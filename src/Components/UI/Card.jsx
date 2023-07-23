import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import styles from "./Card.module.css";

const Card = ({ children, classes }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.card} ${styles[`card-${theme}`]} ${classes ?? ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
