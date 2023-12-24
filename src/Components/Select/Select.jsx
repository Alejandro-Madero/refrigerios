import styles from './Select.module.css';

const Select = ({
  onSelect,
  id,
  tooltip,
  selectedValue,
  classes,
  children,
}) => {
  return (
    <select
      className={`${styles.selection} ${classes ?? ''}`}
      name={id}
      id={id}
      onChange={e => onSelect(e)}
      aria-label='Selecciona un mes'
      value={selectedValue}
    >
      <option value='' className={styles.option}>
        {tooltip}
      </option>
      {children}
    </select>
  );
};

export default Select;
