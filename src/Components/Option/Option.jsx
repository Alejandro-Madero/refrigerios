import styles from './Option.module.css';

const Option = ({ value, children }) => {
  return (
    <option key={value} value={value} className={styles.option}>
      {children}
    </option>
  );
};

export default Option;
