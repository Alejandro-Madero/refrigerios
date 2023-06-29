import styles from "./Form.module.css";
import Card from "./UI/Card";
import { useState } from "react";
import { getPaymentMonth } from "../Utils/logic";
import Button from "./UI/Button";

const Form = () => {
  const [paymentMonth, setPaymentMonth] = useState(null);
  const [workedHolidays, setWorkedHolidays] = useState(false);

  const handleSelectedMonth = (e) => {
    if (!e.target.value) {
      return setPaymentMonth(null);
    }
    const selectedMonth = e.target.value;
    const nextMonth = getPaymentMonth(selectedMonth);
    setPaymentMonth(nextMonth);
  };

  const handleHolidayOption = (e) => {
    const workedHolidays = Boolean(+e.target.value);
    console.log(workedHolidays);
    console.log(e.target.value);
    setWorkedHolidays(workedHolidays);
  };
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles["months-container"]}>
          <label htmlFor="months">
            Quiero calcular el refrigerio compuesto del mes de
          </label>
          <select
            className={styles.months}
            name="months"
            id="months"
            onChange={handleSelectedMonth}
          >
            <option value="">Seleccione un mes</option>
            <option value="enero">enero</option>
            <option value="febrero">febrero</option>
            <option value="marzo">marzo</option>
            <option value="abril">abril</option>
            <option value="mayo">mayo</option>
            <option value="junio">junio</option>
            <option value="julio">julio</option>
            <option value="agosto">agosto</option>
            <option value="septiembre">septiembre</option>
            <option value="octubre">octubre</option>
            <option value="noviembre">noviembre</option>
            <option value="diciembre">diciembre</option>
          </select>
          <p>que se cobran en</p>
          {paymentMonth && <p>{paymentMonth}.</p>}
        </div>
        <div className={styles["shifts-container"]}>
          <p>¿Cúantos turnos trabajaste?</p>
          <div className={styles.shifts}>
            <label htmlFor="mañana">Mañana / tarde</label>
            <input
              id="mañana"
              className={styles.input}
              type="number"
              min={0}
              max={31}
              placeholder="0"
            ></input>
            <label htmlFor="noche">Noche</label>
            <input
              id="noche"
              className={styles.input}
              type="number"
              min={0}
              max={31}
              placeholder="0"
            ></input>
          </div>
        </div>

        <div className={styles["holidays-container"]}>
          <p>De esos turnos, ¿alguno fue domingo o feriado?</p>
          <div className={styles.holidays}>
            <label htmlFor="no">No</label>
            <input
              id="no"
              value={0}
              name="option"
              type="radio"
              onChange={handleHolidayOption}
            />
            <label htmlFor="yes">Si</label>
            <input
              id="yes"
              value={1}
              name="option"
              type="radio"
              onChange={handleHolidayOption}
            />
          </div>
          {workedHolidays && (
            <div>
              <div className={styles.shifts}>
                <label htmlFor="domingos">Domingos</label>
                <input
                  id="domingos"
                  className={styles.input}
                  type="number"
                  min={0}
                  max={31}
                  placeholder="0"
                ></input>
                <label htmlFor="feriados">Feriados</label>
                <input
                  id="feriados"
                  className={styles.input}
                  type="number"
                  min={0}
                  max={31}
                  placeholder="0"
                ></input>
              </div>
            </div>
          )}
        </div>

        <Button>Calcular!</Button>
      </form>
    </Card>
  );
};

export default Form;
