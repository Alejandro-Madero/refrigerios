import styles from "./Month.module.css";

const Month = ({ value, children }) => {
  return (
    <option key={value} value={value} className={styles["month-option"]}>
      {children}
    </option>
  );
};

export default Month;
