import styles from "./Disclaimer.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const Disclaimer = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <footer className={`${styles.disclaimer} ${styles[`disclaimer-${theme}`]}`}>
      <p>
        Todos los valores publicados en este sitio web son a fines informativos
        y tienen un carácter orientativo, por lo que deben ser tomados
        únicamente a modo de referencia.
      </p>
    </footer>
  );
};

export default Disclaimer;
