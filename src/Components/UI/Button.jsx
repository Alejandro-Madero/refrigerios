import styles from "./Button.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
