import styles from './Months.module.css';
import { MONTHS } from '../../Utils/constants';
import Month from './Month';

const Months = ({ onSelectMonth, id }) => {
  return (
    <select
      className={styles.months}
      name={id}
      id={id}
      onChange={e => onSelectMonth(e)}
      aria-label='Selecciona un mes'
    >
      <option value='' className={styles.option}>
        Seleccioná un mes
      </option>
      {MONTHS.map(month => {
        return (
          <Month key={month} value={month}>
            {month}
          </Month>
        );
      })}
    </select>
  );
};

export default Months;
