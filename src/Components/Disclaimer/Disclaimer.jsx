import styles from "./Disclaimer.module.css";

const Disclaimer = () => {
  return (
    <p className={styles.disclaimer}>
      Todos los valores publicados en este sitio web son a fines informativos y
      tienen un carácter orientativo, por lo que deben ser tomados únicamente a
      modo de referencia.
    </p>
  );
};

export default Disclaimer;
