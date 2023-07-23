import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import styles from "./Wrapper.module.css";
const Wrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={`${styles.wrapper} ${styles[theme]}`}>{children}</div>;
};

export default Wrapper;
