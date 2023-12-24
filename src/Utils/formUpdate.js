import { fixNumber } from './fixNumber';
import { getPaymentMonth } from './logic';

const formUpdate = function (e, formValues, setFormValues, setErrors) {
  const value =
    e.target.value.startsWith('0') && e.target.value.length > 1
      ? fixNumber(e.target.value)
      : e.target.value;

  const updateValues = () =>
    setFormValues(prevValues => {
      return { ...prevValues, [e.target.name]: value };
    });

  switch (e.target.name) {
    case 'year': {
      const year = value;
      setErrors(prevErr => {
        return { ...prevErr, year: [] };
      });

      if (!year) {
        return setFormValues(prevValues => {
          return { ...prevValues, year: '', paymentYear: '' };
        });
      }

      return setFormValues(prevValues => {
        return {
          ...prevValues,
          year,
          paymentYear: (formValues.isPaymentNextYear ? 1 : 0) + Number(year),
        };
      });
    }

    case 'months': {
      const month = value;

      if (!month) {
        return setFormValues(prevValues => {
          return {
            ...prevValues,
            month: '',
            paymentMonth: '',
            isPaymentNextYear: false,
            paymentYear: formValues.year ?? '',
          };
        });
      }
      setErrors(prevErr => {
        return { ...prevErr, month: [] };
      });
      const { nextMonth, isPaymentNextYear } = getPaymentMonth(month);

      return setFormValues(prevValues => {
        return {
          ...prevValues,
          paymentMonth: nextMonth,
          isPaymentNextYear,
          paymentYear:
            (formValues.year ? Number(formValues.year) : 0) +
            Number(isPaymentNextYear),
          month,
        };
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

    case 'opening':
      setErrors(prevErr => {
        return { ...prevErr, opening: [] };
      });
      return updateValues();
  }
};

export default formUpdate;
