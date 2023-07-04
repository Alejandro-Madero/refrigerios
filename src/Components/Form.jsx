import styles from "./Form.module.css";
import Card from "./UI/Card";
import { useState, useRef } from "react";
import { getPaymentMonth } from "../Utils/logic";
import { validateForm } from "../Utils/validateForm";
import Button from "./UI/Button";
import Months from "./Months";

const initialFormValues = {
  month: "",
  morning: "",
  night: "",
  paymentMonth: "",
  sundays: "",
  holidays: "",
};

const initialErrors = {
  month: [],
  shifts: [],
  holidays: [],
};

const Form = ({ onSubmmitedForm, onReset }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const formRef = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formValues);
    const hasErrors = Object.entries(formErrors).some(
      (err) => err[1].length !== 0
    );

    if (!hasErrors) return onSubmmitedForm(formValues);

    setErrors(formErrors);
  };

  const handleFormChange = (e) => {
    switch (e.target.name) {
      case "morning":
        setErrors({ ...errors, shifts: [] });
        return setFormValues({ ...formValues, morning: e.target.value });

      case "night":
        setErrors({ ...errors, shifts: [] });
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
        setErrors({ ...errors, month: [] });
        const nextMonth = getPaymentMonth(month);
        return setFormValues({ ...formValues, paymentMonth: nextMonth, month });
      }

      case "sundays":
        setErrors({ ...errors, holidays: [] });
        return setFormValues({ ...formValues, sundays: e.target.value });

      case "holidays":
        setErrors({ ...errors, holidays: [] });
        return setFormValues({ ...formValues, holidays: e.target.value });
    }
  };

  const handleFormReset = () => {
    setFormValues(initialFormValues);
    setErrors(initialErrors);
    onReset();
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleForm} ref={formRef}>
        <div className={styles["months-container"]}>
          <p className={styles["form-question"]}>
            Quiero calcular el refrigerio compuesto del mes de :
          </p>
          <Months id="months" onSelectMonth={handleFormChange} />
          <span>
            que se cobra en
            {formValues.paymentMonth && (
              <span className={styles["months-payment"]}>
                {" "}
                {formValues.paymentMonth}.
              </span>
            )}
          </span>
          {errors.month?.length !== 0 && errors.month?.map((err) => err)}
        </div>
        <div className={styles["input-container"]}>
          <p className={styles["form-question"]}>
            ¿Cúantos turnos trabajaste en el mes?
          </p>
          <div className={styles.shifts}>
            <label htmlFor="morning">Mañana / Tarde</label>
            <input
              id="morning"
              name="morning"
              className={`${styles.input} ${
                errors.shifts.length > 0 ? styles.error : ""
              } `}
              type="number"
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            ></input>
            <label htmlFor="night">Noche</label>
            <input
              id="night"
              name="night"
              className={`${styles.input} ${
                errors.shifts.length > 0 ? styles.error : ""
              } `}
              type="number"
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            ></input>
          </div>
          {errors.shifts?.length !== 0 && errors.shifts?.map((err) => err)}
        </div>

        <div className={styles["input-container"]}>
          <p className={styles["form-question"]}>
            De esos turnos, ¿Cúantos fueron domingos o feriados?
          </p>
          <div className={styles.shifts}>
            <label htmlFor="sundays">Domingos</label>
            <input
              id="sundays"
              name="sundays"
              className={`${styles.input} ${
                errors.holidays.length > 0 ? styles.error : ""
              }`}
              type="number"
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            ></input>
            <label htmlFor="holidays">Feriados</label>
            <input
              id="holidays"
              name="holidays"
              className={`${styles.input} ${
                errors.holidays.length > 0 ? styles.error : ""
              }`}
              type="number"
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            ></input>
          </div>

          {errors.holidays.length !== 0 && errors.holidays.map((err) => err)}
        </div>
        <div className={styles["button-container"]}>
          <Button
            type={"reset"}
            classes={styles["form-btns"]}
            onClick={handleFormReset}
          >
            Reset
          </Button>
          <Button type={"submit"} classes={styles["form-btns"]}>
            Calcular!
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
