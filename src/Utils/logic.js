const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export const getPaymentMonth = function (month) {
  if (month === "diciembre") return months[0];
  const index = months.indexOf(month);
  const nextMonth = months.at(index + 1);

  return nextMonth;
};
