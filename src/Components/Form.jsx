import styles from "./Form.module.css";
import Card from "./UI/Card";
import { useState, useRef } from "react";
import { getPaymentMonth, calculatePayment } from "../Utils/logic";
import { validateForm } from "../Utils/validateForm";
import Button from "./UI/Button";
import Months from "./Months";

const initialFormValues = {
  month: "",
  morning: "",
  night: "",
  workedHolidays: false,
  paymentMonth: "",
  sundays: "",
  holidays: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formValues);
    const hasErrors = Object.entries(formErrors).length === 0 ? false : true;
    if (!hasErrors) {
      //form

      //calcular refrigerios
      const totalPayment = calculatePayment(formValues);
      console.log(totalPayment);
      // Resetear UI del form y del estado inicial del form
      formRef.current.reset();
      setFormValues(initialFormValues);
    }
    setErrors(formErrors);
  };

  const handleFormChange = (e) => {
    switch (e.target.name) {
      case "morning":
        return setFormValues({ ...formValues, morning: e.target.value });

      case "night":
        return setFormValues({ ...formValues, night: e.target.value });

      case "months": {
        const month = e.target.value;
        if (!month) {
          return setFormValues({
            ...formValues,
            paymentMonth: null,
            month: "",
          });
        }
        const nextMonth = getPaymentMonth(month);
        setFormValues({ ...formValues, paymentMonth: nextMonth, month });
        return setErrors((prevErrors) =>
          prevErrors.filter((err) => err !== "")
        );
      }

      case "option": {
        return setFormValues({
          ...formValues,
          workedHolidays: Boolean(+e.target.value),
        });
      }

      case "sundays":
        return setFormValues({ ...formValues, sundays: e.target.value });

      case "holidays":
        return setFormValues({ ...formValues, holidays: e.target.value });
    }
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleForm} ref={formRef}>
        <div className={styles["months-container"]}>
          <label htmlFor="months">
            Quiero calcular el refrigerio compuesto del mes de :
          </label>
          <Months id="months" onSelectMonth={handleFormChange} />
          <span>que se cobra en</span>
          {formValues.paymentMonth && <span>{formValues.paymentMonth}.</span>}
          {errors.month &&
            errors.month.map((err) => {
              return (
                <span key={"month"} className={styles.error}>
                  {err}
                </span>
              );
            })}
        </div>

        <div className={styles["input-container"]}>
          <p className={styles["form-question"]}>¿Cúantos turnos trabajaste?</p>
          <div className={styles.shifts}>
            <label htmlFor="morning">Mañana/tarde</label>
            <input
              id="morning"
              name="morning"
              className={styles.input}
              type="number"
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            ></input>
            <label htmlFor="night">Noche</label>
            <input
              id="night"
              name="night"
              className={styles.input}
              type="number"
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            ></input>
          </div>
          {errors.shifts &&
            errors.shifts.map((err) => (
              <span key={"shifts"} className={styles.error}>
                {err}
              </span>
            ))}
        </div>

        <div className={styles["input-container"]}>
          <p className={styles["form-question"]}>
            De esos turnos, ¿alguno fue domingo o feriado?
          </p>
          <div className={styles.shifts}>
            <label htmlFor="no">No</label>
            <input
              id="no"
              value={0}
              name="option"
              type="radio"
              onChange={handleFormChange}
            />
            <label htmlFor="yes">Si</label>
            <input
              id="yes"
              value={1}
              name="option"
              type="radio"
              onChange={handleFormChange}
            />
          </div>

          {formValues.workedHolidays && (
            <div className={styles.shifts}>
              <label htmlFor="sundays">domingos</label>
              <input
                id="sundays"
                name="sundays"
                className={styles.input}
                type="number"
                min={0}
                onChange={handleFormChange}
                placeholder="0"
              ></input>
              <label htmlFor="holidays">Feriados</label>
              <input
                id="holidays"
                name="holidays"
                className={styles.input}
                type="number"
                min={0}
                onChange={handleFormChange}
                placeholder="0"
              ></input>
            </div>
          )}
        </div>
        <Button>Calcular!</Button>
      </form>
    </Card>
  );
};

export default Form;
