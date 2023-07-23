import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { ReactComponent as Refrigerios } from "../../assets/refrigerios.svg";
import styles from "./Logo.module.css";

const Logo = ({ classes }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles["logo-container"]} ${classes}`}>
      <Refrigerios className={`${styles.logo} ${styles[`logo-${theme}`]}`} />
    </div>
  );
};

export default Logo;
