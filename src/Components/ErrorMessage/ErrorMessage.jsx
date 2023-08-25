import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ children }) => {
  return <span className={styles.error}>{children}</span>;
};

export default ErrorMessage;
