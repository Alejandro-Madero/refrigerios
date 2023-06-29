import { MONTHS } from "./constants";
import { PRICES2023 } from "./prices";

export const getPaymentMonth = function (month) {
  if (month === "diciembre") return MONTHS[0];
  const index = MONTHS.indexOf(month);
  const nextMonth = MONTHS.at(index + 1);

  return nextMonth;
};

export const calculatePayment = function (form) {
  console.log(form);

  const curedData = form.reduce(
    (acc, field) => {
      console.log(field);

      switch (field[0]) {
        case "months": {
          acc.month = field[1];
          return acc;
        }

        case "mañana": {
          acc.shifts = acc.shifts + Number(field[1]);
          acc.movility = acc.movility + Number(field[1]);
          return acc;
        }

        case "noche": {
          acc.shifts = acc.shifts + Number(field[1]) * 2;
          acc.movility = acc.movility + Number(field[1]);
          return acc;
        }

        case "domingos": {
          acc.shifts = acc.shifts + Number(field[1]);
          return acc;
        }

        case "feriados": {
          acc.shifts = acc.shifts + Number(field[1]);
          return acc;
        }

        default:
          return acc;
      }
    },
    { month: null, shifts: 0, movility: 0 }
  );
  const payment =
    curedData.shifts * PRICES2023[curedData.month].refrigerio +
    curedData.movility * PRICES2023[curedData.month].movilidad;
  console.log(payment);
  return payment;
};
