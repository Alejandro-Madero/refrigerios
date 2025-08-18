import { MONTHS } from './constants';
import {
  PRICES,
  INITIAL_REFRIGERIO_VALUE,
  INITIAL_REFRIGERIO_COMPUESTO_VALUE,
  INFLATION_FACTOR,
  INITIAL_MOVILITY_VALUE,
} from './prices';

export const getPaymentMonth = function (month) {
  if (month === 'diciembre') {
    return { nextMonth: MONTHS[0], isPaymentNextYear: true };
  }
  const index = MONTHS.indexOf(month);
  const nextMonth = MONTHS.at(index + 1);

  return { nextMonth, isPaymentNextYear: false };
};

export const calculatePayment = function (form) {
  const REFRIGERIO = PRICES[form.year][form.month]?.refrigerio;
  const MOVILIDAD = PRICES[form.year][form.month]?.movilidad;
  const inflationFactor = INFLATION_FACTOR[form.year][form.month];

  const mornings = Number(form.morning);
  const nights = Number(form.night);
  const saturdays = Number(form.saturdays);
  const sundays = Number(form.sundays);
  const holidays = Number(form.holidays);
  const virtual = Number(form.virtual);
  const live = Number(form.live);
  const CMA = Number(form.CMA);
  const opening = Number(form.opening);

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

  // Pago aperturas anticipadas y extensiones de servicio
  const openingPayment = REFRIGERIO * opening;

  // Suma pago total
  const totalPayment =
    movilityPayment +
    refrigerioSimplePayment +
    nightsPayment +
    sundayPayment +
    holidayPayment +
    openingPayment;

  // Suma pago total ajustada por IPC
  // Pago refrigerio simple y movilidad ajustado por IPC
  const totalPaymentAdjusted =
    INITIAL_REFRIGERIO_VALUE * inflationFactor * totalShiftsRefrigerioSimple +
    INITIAL_MOVILITY_VALUE * inflationFactor * totalShiftsMovility +
    INITIAL_REFRIGERIO_VALUE * nights * inflationFactor +
    (INITIAL_REFRIGERIO_VALUE * sundays * inflationFactor +
      INITIAL_REFRIGERIO_VALUE * saturdays * inflationFactor) +
    INITIAL_REFRIGERIO_VALUE * holidays * inflationFactor +
    INITIAL_REFRIGERIO_VALUE * opening * inflationFactor;

  return {
    year: form.year,
    paymentYear: form.paymentYear,
    month: form.month,
    paymentMonth: form.paymentMonth,
    total: totalPayment,
    totalAdjusted: totalPaymentAdjusted,
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
    opening: { total: openingPayment, units: opening, emoji: '⏰' },
    REFRIGERIO,
    MOVILIDAD,
  };
};
