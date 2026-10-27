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

  if ((form.year >= 2026, MONTHS.indexOf(form.month) > 9))
    return calculatePaymentAfterNov2026(form);

  const mornings = Number(form.morning);
  const nights = Number(form.night);
  const fridaysNight = Number(form.fridaysNight);
  const saturdays = Number(form.saturdays);
  const saturdaysNight = Number(form.saturdaysNight);
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
  const sundayPayment = REFRIGERIO * sundays + REFRIGERIO * saturdaysNight; // se paga 2 refrigerios simples adicionales por domingo

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
      INITIAL_REFRIGERIO_VALUE * saturdaysNight * inflationFactor) +
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
    sundays: {
      total: sundayPayment,
      units: sundays + saturdaysNight,
      emoji: '🌞',
    },
    holiday: { total: holidayPayment, units: holidays, emoji: '🎉' },
    opening: { total: openingPayment, units: opening, emoji: '⏰' },
    REFRIGERIO,
    MOVILIDAD,
  };
};

export const calculatePaymentAfterNov2026 = function (form) {
  const REFRIGERIO = PRICES[form.year][form.month]?.refrigerio;
  const MOVILIDAD = PRICES[form.year][form.month]?.movilidad;
  const inflationFactor = INFLATION_FACTOR[form.year][form.month];

  console.log('estoy en el calculo nuevo');

  const mornings = Number(form.morning);
  const nights = Number(form.night);
  const fridaysNight = Number(form.fridaysNight);
  const saturdays = Number(form.saturdays);
  const saturdaysNight = Number(form.saturdaysNight);
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

  // pago sabados
  const saturdayPayment =
    REFRIGERIO * fridaysNight +
    REFRIGERIO * saturdays +
    REFRIGERIO * saturdaysNight;

  // Pago domingos
  const sundayPayment =
    REFRIGERIO * 2 * sundays + REFRIGERIO * 2 * saturdaysNight; // se paga 2 refrigerios simples adicionales por domingo

  // Pago feriados
  const holidayPayment = REFRIGERIO * holidays;

  // Pago aperturas anticipadas y extensiones de servicio
  const openingPayment = REFRIGERIO * opening;

  // Suma pago total
  const totalPayment =
    movilityPayment +
    refrigerioSimplePayment +
    nightsPayment +
    saturdayPayment +
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
      INITIAL_REFRIGERIO_VALUE * saturdaysNight * inflationFactor) +
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
    saturdays: {
      total: saturdayPayment,
      units: fridaysNight + saturdays + saturdaysNight,
      emoji: '🕺',
    },
    sundays: {
      total: sundayPayment,
      units: (sundays + saturdaysNight) * 2,
      emoji: '🌞',
    },
    holiday: { total: holidayPayment, units: holidays, emoji: '🎉' },
    opening: { total: openingPayment, units: opening, emoji: '⏰' },
    REFRIGERIO,
    MOVILIDAD,
  };
};
