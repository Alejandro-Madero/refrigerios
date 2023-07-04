import styles from "./Logo.module.css";
import { ReactComponent as Refrigerios } from "../assets/refrigerios.svg";

const Logo = () => {
  return (
    <div className={styles["logo-container"]}>
      <Refrigerios className={styles.logo} />
    </div>
  );
};

export default Logo;
