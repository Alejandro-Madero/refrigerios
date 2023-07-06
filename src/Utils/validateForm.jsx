import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";

export const validateForm = function (form) {
  const errors = {
    month: [],
    shifts: [],
    holidays: [],
  };

  let totalShifts = 0;
  let totalHolidays = 0;

  for (const key in form) {
    const value = form[key];

    switch (key) {
      case "morning": {
        if (+value < 0)
          errors.shifts.push(
            <ErrorMessage key={0}>
              ⛔ La cantidad de turnos no puede ser menor a 0.
            </ErrorMessage>
          );

        if (+value > 31)
          errors.shifts.push(
            <ErrorMessage key={1}>
              ⛔ No se puede trabajar {+value} turnos mañana/tarde en un mes.
            </ErrorMessage>
          );

        totalShifts += Number(value);
        break;
      }

      case "night": {
        if (+value < 0)
          errors.shifts.push(
            <ErrorMessage key={2}>
              ⛔ La cantidad de turnos no puede ser menor a 0.
            </ErrorMessage>
          );

        if (+value > 31)
          errors.shifts.push(
            <ErrorMessage key={3}>
              ⛔ No se puede trabajar {+value} turnos noche en un mes.
            </ErrorMessage>
          );

        totalShifts += Number(value);
        break;
      }

      case "month": {
        if (value === "")
          errors.month.push(
            <ErrorMessage key={4}>⛔ Debés seleccionar un mes.</ErrorMessage>
          );
        break;
      }

      case "sundays": {
        totalHolidays += Number(value);
        break;
      }

      case "holidays": {
        totalHolidays += Number(value);
        break;
      }

      default:
    }
  }

  if (totalShifts > 31)
    errors.shifts.push(
      <ErrorMessage key={5}>
        ⛔ No se puede trabajar {totalShifts} turnos en un mes.
      </ErrorMessage>
    );

  if (totalShifts < 1) {
    errors.shifts.push(
      <ErrorMessage key={6}>
        ⛔ Si no trabajaste ningún día en el mes, no vas a cobrar ningún
        refrigerio.
      </ErrorMessage>
    );
  }

  if (totalHolidays > totalShifts) {
    errors.holidays.push(
      <ErrorMessage key={8}>
        ⛔ La suma de domingos y feriados no puede ser mayor a la cantidad de
        turnos totales.
      </ErrorMessage>
    );
  }

  return errors;
};
