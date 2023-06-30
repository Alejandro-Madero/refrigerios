export const validateForm = function (form) {
  const errors = {};

  let totalShifts = 0;
  let totalHolidays = 0;

  for (const key in form) {
    const value = form[key];

    switch (key) {
      case "morning": {
        if (+value < 0)
          errors.morning = ["⛔ La cantidad de turnos no puede ser menor a 0"];
        if (+value > 31)
          errors.morning = ["⛔ La cantidad de turnos no puede ser mayor a 31"];
        totalShifts += Number(value);
        break;
      }

      case "night": {
        if (+value < 0)
          errors.night = ["⛔ La cantidad de turnos no puede ser menor a 0"];
        if (+value > 31)
          errors.night = ["⛔ La cantidad de turnos no puede ser mayor a 31"];
        totalShifts += Number(value);
        break;
      }

      case "month": {
        if (value === "") errors.month = ["⛔ Debes seleccionar un mes"];
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

  if (form.workedHolidays && totalHolidays === 0) {
    errors.holidays = [
      "⛔ Si trabajaste algún domingo o feriado debés seleccionar la cantidad.",
    ];
  }

  if (totalShifts > 31)
    errors.shifts = ["⛔ No podés trabajar mas días de los que tiene el mes"];

  if (totalShifts < 1) {
    errors.shifts = [
      "⛔ ¿No trabajaste ningún día y estás calculando refrigerios? 😂",
    ];
  }
  console.log(errors);
  return errors;
};
