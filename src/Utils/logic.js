import { MONTHS } from "./constants";
import { PRICES2023 } from "./prices";

export const getPaymentMonth = function (month) {
  if (month === "diciembre") return MONTHS[0];
  const index = MONTHS.indexOf(month);
  const nextMonth = MONTHS.at(index + 1);

  return nextMonth;
};

export const calculatePayment = function (form) {
  const REFRIGERIO = PRICES2023[form.month].refrigerio;
  const MOVILIDAD = PRICES2023[form.month].movilidad;
  console.log(form);
  const mornings = Number(form.morning);
  const nights = Number(form.night);
  const sundays = Number(form.sundays);
  const holidays = Number(form.holidays);
  const totalShifts = nights + mornings;

  const movilityPayment = MOVILIDAD * totalShifts;
  const sundayPayment = REFRIGERIO * sundays;
  const holidayPayment = REFRIGERIO * holidays;
  const nightsPayment = REFRIGERIO * nights;
  const daytimePayment = REFRIGERIO * mornings;
  const shiftsPayment = daytimePayment + nightsPayment;
  const totalPayment =
    shiftsPayment +
    movilityPayment +
    sundayPayment +
    holidayPayment +
    nightsPayment;

  return {
    month: form.month,
    paymentMonth: form.paymentMonth,
    total: totalPayment,
    shifts: { total: shiftsPayment, units: totalShifts },
    movility: { total: movilityPayment, units: totalShifts },
    nights: { total: nightsPayment, units: nights },
    sundays: { total: sundayPayment, units: sundays },
    holiday: { total: holidayPayment, units: holidays },
    REFRIGERIO,
    MOVILIDAD,
  };
};
