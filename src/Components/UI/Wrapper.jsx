import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import styles from "./Wrapper.module.css";
const Wrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return <div className={`${styles.wrapper} ${styles[theme]}`}>{children}</div>;
};

export default Wrapper;
