import styles from './Form.module.css';
import { useState } from 'react';
import { getPaymentMonth } from '../../Utils/logic';
import { validateForm } from '../../Utils/validateForm';
import { fixNumber } from '../../Utils/fixNumber';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Months from '../Months/Months';
import Input from '../Input/Input';

const initialFormValues = {
  month: '',
  morning: '',
  night: '',
  paymentMonth: '',
  saturdays: '',
  sundays: '',
  holidays: '',
  virtual: '',
  live: '',
  CMA: '',
};

const initialErrors = {
  month: [],
  shifts: [],
  holidays: [],
  courses: [],
  CMA: [],
};

const Form = ({ onSubmmitedForm, onReset }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);

  const handleForm = e => {
    e.preventDefault();

    const formErrors = validateForm(formValues);
    const hasErrors = Object.entries(formErrors).some(
      err => err[1].length !== 0
    );

    if (!hasErrors) return onSubmmitedForm(formValues);
    setErrors(formErrors);
  };

  const handleFormChange = e => {
    const value =
      e.target.value.startsWith('0') && e.target.value.length > 1
        ? fixNumber(e.target.value)
        : e.target.value;

    const updateValues = () =>
      setFormValues(prevValues => {
        return { ...prevValues, [e.target.name]: value };
      });

    switch (e.target.name) {
      case 'months': {
        const month = value;
        if (!month) {
          return setFormValues(prevValues => {
            return {
              ...prevValues,
              paymentMonth: '',
              month: '',
            };
          });
        }
        setErrors(prevErr => {
          return { ...prevErr, month: [] };
        });
        const nextMonth = getPaymentMonth(month);
        return setFormValues(prevValues => {
          return { ...prevValues, paymentMonth: nextMonth, month };
        });
      }

      case 'morning':
      case 'night':
        setErrors(prevErr => {
          return { ...prevErr, shifts: [] };
        });
        return updateValues();

      case 'saturdays':
      case 'sundays':
      case 'holidays':
        setErrors(prevErr => {
          return { ...prevErr, holidays: [] };
        });
        return updateValues();

      case 'virtual':
      case 'live':
        setErrors(prevErr => {
          return { ...prevErr, courses: [] };
        });
        return updateValues();

      case 'CMA':
        setErrors(prevErr => {
          return { ...prevErr, CMA: [] };
        });
        return updateValues();
    }
  };

  const handleFormReset = () => {
    setFormValues(initialFormValues);
    setErrors(initialErrors);
    onReset();
  };

  return (
    <Card classes={styles['form-card']}>
      <form className={styles.form} onSubmit={handleForm}>
        <div className={styles['input-container']}>
          <div className={styles['months-container']}>
            <p className={styles['form-question']}>
              Calcular el refrigerio compuesto del mes de:
            </p>
            <Months id='months' onSelectMonth={handleFormChange} />
          </div>

          <span className={styles['form-question']}>
            que se cobra en{' '}
            {formValues.paymentMonth && (
              <span className={styles['months-payment']}>
                {formValues.paymentMonth}.
              </span>
            )}
          </span>
          {errors.month?.length !== 0 && errors.month?.map(err => err)}
        </div>
        <div className={styles['input-container']}>
          <p className={styles['form-question']}>
            Completá los campos con la cantidad de días correspondiente:
          </p>
          <div className={styles.shifts}>
            <Input
              type='number'
              id='morning'
              label='Turnos mañana - tarde'
              value={formValues.morning}
              min={0}
              onChange={handleFormChange}
              placeholder='0'
              errors={errors.shifts}
            />
            <Input
              type='number'
              id='night'
              label='Turnos noche'
              value={formValues.night}
              min={0}
              onChange={handleFormChange}
              placeholder='0'
              errors={errors.shifts}
            />
            <Input
              type='number'
              id='virtual'
              label='Curso virtual'
              value={formValues.virtual}
              min={0}
              onChange={handleFormChange}
              placeholder='0'
              hasTooltip
              errors={errors.courses}
            />
            <Input
              type='number'
              id='live'
              label='Curso presencial'
              value={formValues.live}
              min={0}
              onChange={handleFormChange}
              placeholder='0'
              hasTooltip
              errors={errors.courses}
            />
            <Input
              type='number'
              id='CMA'
              label='CMA'
              value={formValues.CMA}
              min={0}
              max={1}
              onChange={handleFormChange}
              placeholder='0'
              hasTooltip
              errors={errors.CMA}
            />
          </div>

          {errors.shifts?.length !== 0 && errors.shifts?.map(err => err)}
          {errors.CMA.length !== 0 && errors.CMA.map(err => err)}
          {errors.courses.length !== 0 && errors.courses.map(err => err)}
        </div>

        <div className={styles['input-container']}>
          <p className={styles['form-question']}>
            De los días ingresados anteriormente: ¿Cúantos fueron sábados noche,
            domingos o feriados?
          </p>
          <div className={styles.shifts}>
            <Input
              type='number'
              id='saturdays'
              label='Sábados noche '
              value={formValues.saturdays}
              min={0}
              onChange={handleFormChange}
              placeholder='0'
              hasTooltip
              errors={errors.holidays}
            />
            <Input
              type='number'
              id='sundays'
              label='Domingos'
              value={formValues.sundays}
              min={0}
              onChange={handleFormChange}
              placeholder='0'
              errors={errors.holidays}
            />
            <Input
              type='number'
              id='holidays'
              label='Feriados'
              value={formValues.holidays}
              min={0}
              onChange={handleFormChange}
              placeholder='0'
              hasTooltip
              errors={errors.holidays}
            />
          </div>
          {errors.holidays.length !== 0 && errors.holidays.map(err => err)}
        </div>
        <div className={styles['button-container']}>
          <Button
            type='reset'
            classes={`${styles['form-btns']} ${styles['reset-btn']}`}
            onClick={handleFormReset}
          >
            Reset
          </Button>
          <Button type='submit' classes={styles['form-btns']}>
            Calcular!
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
