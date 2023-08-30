import { MONTHS } from './constants';
import { PRICES2023 } from './prices';

export const getPaymentMonth = function (month) {
  if (month === 'diciembre') return MONTHS[0];
  const index = MONTHS.indexOf(month);
  const nextMonth = MONTHS.at(index + 1);

  return nextMonth;
};

export const calculatePayment = function (form) {
  const REFRIGERIO = PRICES2023[form.month].refrigerio;
  const MOVILIDAD = PRICES2023[form.month].movilidad;

  const mornings = Number(form.morning);
  const nights = Number(form.night);
  const saturdays = Number(form.saturdays);
  const sundays = Number(form.sundays);
  const holidays = Number(form.holidays);
  const virtual = Number(form.virtual);
  const live = Number(form.live);
  const CMA = Number(form.CMA);
  const totalShiftsMovility = mornings + nights + live + CMA;
  const totalShiftsRefrigerioSimple = mornings + nights + live + virtual + CMA;

  // Pago refrigerio simple + Movilidad
  const movilityPayment = MOVILIDAD * totalShiftsMovility;
  const refrigerioSimplePayment = REFRIGERIO * totalShiftsRefrigerioSimple;

  // Pago nocturnidad
  const nightsPayment = REFRIGERIO * nights;

  // Pago domingos
  const sundayPayment = REFRIGERIO * sundays + REFRIGERIO * saturdays;

  // Pago feriados
  const holidayPayment = REFRIGERIO * holidays;

  // Suma pago total
  const totalPayment =
    movilityPayment +
    refrigerioSimplePayment +
    nightsPayment +
    sundayPayment +
    holidayPayment;

  return {
    month: form.month,
    paymentMonth: form.paymentMonth,
    total: totalPayment,
    shifts: {
      total: refrigerioSimplePayment,
      units: totalShiftsRefrigerioSimple,
      emoji: '☕',
    },
    movility: {
      total: movilityPayment,
      units: totalShiftsMovility,
      emoji: '🚗',
    },
    nights: { total: nightsPayment, units: nights, emoji: '🌛' },
    sundays: { total: sundayPayment, units: sundays + saturdays, emoji: '🌞' },
    holiday: { total: holidayPayment, units: holidays, emoji: '🎉' },
    REFRIGERIO,
    MOVILIDAD,
  };
};
