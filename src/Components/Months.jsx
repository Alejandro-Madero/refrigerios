import styles from "./Months.module.css";
import { useRef } from "react";
import { MONTHS } from "../Utils/constants";
import Month from "./Month";

const Months = ({ onSelectMonth, id }) => {
  return (
    <select
      className={styles.months}
      name={id}
      id={id}
      onChange={(e) => onSelectMonth(e)}
    >
      <option value="">Seleccione un mes</option>
      {MONTHS.map((month) => {
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
