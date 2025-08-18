import styles from './Form.module.css';
import { useState } from 'react';
import { validateForm } from '../../Utils/validateForm';
import formUpdate from '../../Utils/formUpdate';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Input from '../Input/Input';
import Years from '../Date selection/Years';
import Months from '../Date selection/Months';

const initialFormValues = {
  month: '',
  year: '',
  paymentMonth: '',
  paymentYear: '',
  isPaymentNextYear: '',
  morning: '',
  night: '',
  saturdays: '',
  sundays: '',
  holidays: '',
  virtual: '',
  live: '',
  CMA: '',
  opening: '',
};

const initialErrors = {
  year: [],
  month: [],
  shifts: [],
  holidays: [],
  courses: [],
  CMA: [],
  opening: [],
};

const Form = ({ onSubmmitedForm, onReset }) => {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ errors, setErrors ] = useState(initialErrors);

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
    formUpdate(e, formValues, setFormValues, setErrors);
  };

  const handleFormReset = () => {
    setFormValues(initialFormValues);
    setErrors(initialErrors);
    onReset();
  };

  return (
    <main className={styles['form-section']}>
      <Card classes={styles['form-card']}>
        <form className={styles.form} onSubmit={handleForm}>
          <div className={styles['input-container']}>
            <p className={styles['form-question']}>
              Calcular el refrigerio compuesto de:
            </p>
            <div className={styles['time-selector']}>
              <Months
                onSelect={handleFormChange}
                classes={errors.month.length > 0 ? styles['has-errors'] : ''}
              />
              <Years
                onSelect={handleFormChange}
                classes={errors.year.length > 0 ? styles['has-errors'] : ''}
              />
            </div>

            <p>
              que se cobra en{' '}
              {formValues.month && formValues.year && (
                <strong style={{ fontWeight: 'var(--fw-800)' }}>
                  {formValues.paymentMonth} de{' '}
                  {formValues.isPaymentNextYear
                    ? Number(formValues.year) + 1
                    : formValues.year}
                </strong>
              )}
            </p>

            {errors?.month?.length !== 0 && errors?.month.map(err => err)}
            {errors?.year?.length !== 0 && errors?.year.map(err => err)}
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
              <Input
                type='number'
                id='opening'
                label='Extensión de servicio'
                value={formValues.opening}
                min={0}
                onChange={handleFormChange}
                placeholder='0'
                hasTooltip
                errors={errors.opening}
              />
            </div>

            {errors.shifts?.length !== 0 && errors.shifts?.map(err => err)}
            {errors.CMA?.length !== 0 && errors.CMA.map(err => err)}
            {errors.courses?.length !== 0 && errors.courses.map(err => err)}
            {errors.opening?.length !== 0 && errors.opening.map(err => err)}
          </div>

          <div className={styles['input-container']}>
            <p className={styles['form-question']}>
              De los días ingresados anteriormente: ¿Cúantos fueron sábados
              noche, domingos o feriados?
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
            {errors.holidays?.length !== 0 && errors.holidays.map(err => err)}
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
    </main>
  );
};

export default Form;
