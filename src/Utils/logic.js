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

  const mornings = Number(form.morning);
  const nights = Number(form.night);
  const totalShifts = nights + mornings;
  const holidays = Number(form.sundays) + Number(form.holidays);

  const movilityPayment = MOVILIDAD * totalShifts;
  const holidayPayment = REFRIGERIO * holidays;
  const shiftsPayment = REFRIGERIO * mornings + REFRIGERIO * 2 * nights;

  return movilityPayment + holidayPayment + shiftsPayment;
};
