import styles from "./Months.module.css";
import { MONTHS } from "../../Utils/constants";
import Month from "./Month";

const Months = ({ onSelectMonth, id, theme }) => {
  return (
    <select
      className={`${styles.months} ${styles[`months-${theme}`]}`}
      name={id}
      id={id}
      onChange={(e) => onSelectMonth(e)}
    >
      <option value="" className={`${styles[`option-${theme}`]}`}>
        Seleccioná un mes
      </option>
      {MONTHS.map((month) => {
        return (
          <Month key={month} value={month} theme={theme}>
            {month}
          </Month>
        );
      })}
    </select>
  );
};

export default Months;
