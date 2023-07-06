import styles from "./Form.module.css";
import Card from "../UI/Card";
import { useState, useRef } from "react";
import { getPaymentMonth } from "../../Utils/logic";
import { validateForm } from "../../Utils/validateForm";
import { fixNumber } from "../../Utils/fixNumber";
import Button from "../UI/Button";
import Months from "../Months/Months";
import Input from "../Input/Input";

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
    const value =
      e.target.value.startsWith("0") && e.target.value.length > 1
        ? fixNumber(e.target.value)
        : e.target.value;

    switch (e.target.name) {
      case "morning":
        setErrors((prevErr) => {
          return { ...prevErr, shifts: [] };
        });
        return setFormValues((prevValues) => {
          return { ...prevValues, morning: value };
        });

      case "night":
        setErrors({ ...errors, shifts: [] });
        return setFormValues((prevValues) => {
          return { ...prevValues, night: value };
        });

      case "months": {
        const month = value;
        if (!month) {
          return setFormValues((prevValues) => {
            return {
              ...prevValues,
              paymentMonth: "",
              month: "",
            };
          });
        }
        setErrors((prevErr) => {
          return { ...prevErr, month: [] };
        });
        const nextMonth = getPaymentMonth(month);
        return setFormValues((prevValues) => {
          return { ...prevValues, paymentMonth: nextMonth, month };
        });
      }

      case "sundays":
        setErrors((prevErr) => {
          return { ...prevErr, holidays: [] };
        });
        return setFormValues((prevValues) => {
          return { ...prevValues, sundays: value };
        });

      case "holidays":
        setErrors((prevErr) => {
          return { ...prevErr, holidays: [] };
        });
        return setFormValues((prevValues) => {
          return { ...prevValues, holidays: value };
        });
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
            <Input
              type="number"
              id="morning"
              label="Mañana / Tarde"
              classes={`${styles.input} ${
                errors.shifts.length > 0 ? styles.error : ""
              } `}
              value={formValues.morning}
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            />
            <Input
              type="number"
              id="night"
              label="Noche"
              classes={`${styles.input} ${
                errors.shifts.length > 0 ? styles.error : ""
              } `}
              value={formValues.night}
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            />
          </div>
          {errors.shifts?.length !== 0 && errors.shifts?.map((err) => err)}
        </div>

        <div className={styles["input-container"]}>
          <p className={styles["form-question"]}>
            De esos turnos, ¿Cúantos fueron domingos o feriados?
          </p>
          <div className={styles.shifts}>
            <Input
              type="number"
              id="sundays"
              label="Domingos"
              classes={`${styles.input} ${
                errors.holidays.length > 0 ? styles.error : ""
              } `}
              value={formValues.sundays}
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            />
            <Input
              type="number"
              id="holidays"
              label="Feriados"
              classes={`${styles.input} ${
                errors.holidays.length > 0 ? styles.error : ""
              } `}
              value={formValues.holidays}
              min={0}
              onChange={handleFormChange}
              placeholder="0"
            />
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
