import styles from "./Month.module.css";

const Month = ({ value, children, theme }) => {
  return (
    <option
      key={value}
      value={value}
      className={`${styles["month-option"]} ${styles[`month-${theme}`]}`}
    >
      {children}
    </option>
  );
};

export default Month;
