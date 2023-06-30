import styles from "./Button.module.css";

const Button = ({ children, type, onClick, classes }) => {
  return (
    <button
      className={`${styles.btn} ${classes}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
