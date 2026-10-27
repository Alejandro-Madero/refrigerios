import styles from './Form.module.css';
import { useState } from 'react';
import { validateForm } from '../../Utils/validateForm';
import formUpdate from '../../Utils/formUpdate';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Input from '../Input/Input';
import Years from '../Date selection/Years';
import Months from '../Date selection/Months';
import { MONTHS } from '../../Utils/constants';

const initialFormValues = {
  month: '',
  year: '',
  paymentMonth: '',
  paymentYear: '',
  isPaymentNextYear: '',
  morning: '',
  night: '',
  fridaysNight: '',
  saturdays: '',
  saturdaysNight: '',
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
          <fieldset className={styles['sub-card']}>
            <legend className={styles['sub-card-header']}>
              <span>📅</span> Período
            </legend>
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
          </fieldset>

          <fieldset className={styles['sub-card']}>
            <legend className={styles['sub-card-header']}>
              <span>🕔</span> Días trabajados
            </legend>
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
          </fieldset>

          <fieldset className={styles['sub-card']}>
            <legend className={styles['sub-card-header']}>
              <span>🌙</span> Adicionales y fines de semana
            </legend>
            <p className={styles['form-question']}>
              De los días ingresados anteriormente: ¿Cuántos corresponden a
              estos adicionales?
            </p>
            <div className={styles.shifts}>
              <Input
                type='number'
                id='fridaysNight'
                label='Viernes noche'
                value={formValues.fridaysNight}
                min={0}
                onChange={handleFormChange}
                placeholder='0'
                hasTooltip
                errors={errors.holidays}
                disabled={
                  formValues.year < 2026 ||
                  (formValues.year == 2026 &&
                    MONTHS.indexOf(formValues.month) < 10)
                }
              />
              <Input
                type='number'
                id='saturdays'
                label='Sábados'
                value={formValues.saturdays}
                min={0}
                onChange={handleFormChange}
                placeholder='0'
                hasTooltip
                errors={errors.holidays}
                disabled={
                  formValues.year < 2026 ||
                  (formValues.year == 2026 &&
                    MONTHS.indexOf(formValues.month) < 10)
                }
              />
              <Input
                type='number'
                id='saturdaysNight'
                label='Sábados noche '
                value={formValues.saturdaysNight}
                min={0}
                onChange={handleFormChange}
                placeholder='0'
                hasTooltip
                errors={errors.holidays}
                disabled={false}
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
                disabled={false}
                hasTooltip
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
                disabled={false}
              />
            </div>
            {errors.holidays?.length !== 0 && errors.holidays.map(err => err)}
          </fieldset>

          <div className={styles['input-container']}></div>
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
