import ErrorMessage from '../Components/ErrorMessage/ErrorMessage';

export const validateForm = function (form) {
  const errors = {
    year: [],
    month: [],
    shifts: [],
    holidays: [],
    courses: [],
    CMA: [],
    opening: [],
  };

  let totalShifts = 0;
  let totalHolidays = 0;
  let totalCourses = 0;

  for (const key in form) {
    const value = form[key];

    switch (key) {
      case 'year':
        if (value === '')
          errors.year.push(
            <ErrorMessage key='no year selected'>
              ⛔ Debés seleccionar un año.
            </ErrorMessage>
          );
        break;

      case 'month': {
        if (value === '')
          errors.month.push(
            <ErrorMessage key='no month selected'>
              ⛔ Debés seleccionar un mes.
            </ErrorMessage>
          );
        break;
      }

      case 'morning':
      case 'night': {
        if (+value < 0) {
          errors.shifts.push(
            <ErrorMessage key={`negative-${key} shifts`}>
              ⛔ La cantidad de turnos no puede ser menor a 0.
            </ErrorMessage>
          );
        }

        if (
          (+value > 31 && key === 'morning') ||
          (+value > 31 && key === 'night')
        ) {
          errors.shifts.push(
            <ErrorMessage key={key}>
              ⛔ No se puede trabajar {+value} turnos{' '}
              {key === 'morning' ? 'mañana / tarde ' : 'noche'} en un mes.
            </ErrorMessage>
          );
        }
        totalShifts += Number(value);
        break;
      }

      case 'live':
      case 'virtual': {
        if (+value < 0) {
          errors.courses.push(
            <ErrorMessage key={`negative-${key} shifts`}>
              ⛔ La cantidad de cursos{' '}
              {key === 'live' ? 'presenciales' : 'virtuales'} no puede ser menor
              a 0.
            </ErrorMessage>
          );
        }

        if (
          (+value > 31 && key === 'live') ||
          (+value > 31 && key === 'virtual')
        ) {
          errors.courses.push(
            <ErrorMessage key={key}>
              ⛔ No se puede hacer {+value} cursos
              {key === 'virtual' ? ' virtuales ' : ' presenciales'} en un mes.
            </ErrorMessage>
          );
        }
        totalShifts += Number(value);
        totalCourses += Number(value);
        break;
      }

      case 'saturdays':
      case 'sundays': {
        totalHolidays += Number(value);
        break;
      }

      case 'CMA':
        if (value > 1)
          errors.CMA.push(
            <ErrorMessage key={key}>
              ⛔ El CMA no puede ser mayor a 1
            </ErrorMessage>
          );

        if (value < 0)
          errors.CMA.push(
            <ErrorMessage key={key}>
              ⛔ El CMA no puede ser un número negativo.
            </ErrorMessage>
          );
        totalShifts += Number(value);
        break;

      case 'opening':
        if (value > totalShifts) {
          errors.opening.push(
            <ErrorMessage key={key}>
              ⛔ La cantidad de aperturas anticipadas y extensiones de servicio
              no puede ser mayor a la cantidad total de turnos trabajados
            </ErrorMessage>
          );
        }
        break;

      default:
    }
  }

  if (totalShifts > 31)
    errors.shifts.push(
      <ErrorMessage key='high total shifts'>
        ⛔ No se puede trabajar {totalShifts} turnos totales en un mes.
      </ErrorMessage>
    );

  if (totalShifts < 1) {
    errors.shifts.push(
      <ErrorMessage key='low total shifts'>
        ⛔ Si no trabajaste ningún turno en el mes, no vas a cobrar ningún
        refrigerio.
      </ErrorMessage>
    );
  }

  if (totalHolidays > totalShifts) {
    errors.holidays.push(
      <ErrorMessage key='holidays sum'>
        ⛔ La suma de sábados noche, domingos y feriados no puede ser mayor a la
        cantidad de turnos totales.
      </ErrorMessage>
    );
  }

  if (totalCourses > 31)
    errors.courses.push(
      <ErrorMessage key='high total courses'>
        ⛔ No se puede hacer {totalCourses} cursos totales en un mes.
      </ErrorMessage>
    );

  return errors;
};
