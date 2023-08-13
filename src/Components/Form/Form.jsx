import styles from "./Form.module.css";
import { useState } from "react";
import { getPaymentMonth } from "../../utils/logic";
import { validateForm } from "../../utils/validateForm";
import { fixNumber } from "../../utils/fixNumber";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Months from "../Months/Months";
import Input from "../Input/Input";

const initialFormValues = {
  month: "",
  morning: "",
  night: "",
  paymentMonth: "",
  saturdays: "",
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

      case "saturdays":
        setErrors((prevErr) => {
          return { ...prevErr, holidays: [] };
        });
        return setFormValues((prevValues) => {
          return { ...prevValues, saturdays: value };
        });

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
      <form className={styles.form} onSubmit={handleForm}>
        <div className={styles["months-container"]}>
          <p className={styles["form-question"]}>
            Calcular el refrigerio compuesto del mes de :
          </p>
          <Months id="months" onSelectMonth={handleFormChange} />
          <span className={styles["form-question"]}>
            que se cobra en{" "}
            {formValues.paymentMonth && (
              <span className={styles["months-payment"]}>
                {formValues.paymentMonth}.
              </span>
            )}
          </span>
          <div>
            {errors.month?.length !== 0 && errors.month?.map((err) => err)}
          </div>
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
              value={formValues.morning}
              min={0}
              onChange={handleFormChange}
              placeholder="0"
              errors={errors.shifts}
            />
            <Input
              type="number"
              id="night"
              label="Noche"
              value={formValues.night}
              min={0}
              onChange={handleFormChange}
              placeholder="0"
              errors={errors.shifts}
            />
          </div>
          <div>
            {errors.shifts?.length !== 0 && errors.shifts?.map((err) => err)}
          </div>
        </div>

        <div className={styles["input-container"]}>
          <p className={styles["form-question"]}>
            De esos turnos, ¿Cúantos fueron sábados noche, domingos o feriados?
          </p>
          <div className={styles.shifts}>
            <Input
              type="number"
              id="saturdays"
              label="Sábados noche "
              value={formValues.saturdays}
              min={0}
              onChange={handleFormChange}
              placeholder="0"
              hasTooltip={true}
              errors={errors.holidays}
            />
            <Input
              type="number"
              id="sundays"
              label="Domingos"
              value={formValues.sundays}
              min={0}
              onChange={handleFormChange}
              placeholder="0"
              errors={errors.holidays}
            />
            <Input
              type="number"
              id="holidays"
              label="Feriados"
              value={formValues.holidays}
              min={0}
              onChange={handleFormChange}
              placeholder="0"
              hasTooltip={true}
              errors={errors.holidays}
            />
          </div>
          {errors.holidays.length !== 0 && errors.holidays.map((err) => err)}
        </div>
        <div className={styles["button-container"]}>
          <Button
            type={"reset"}
            classes={`${styles["form-btns"]} ${styles["reset-btn"]}`}
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
