import { formatNumber } from "../Utils/formatNumber";

const concepts = new Map([
  ["shifts", "Turnos"],
  ["movility", "Movilidad"],
  ["nights", "Nocturnidad"],
  ["holiday", "Feriados"],
  ["sundays", "Domingos"],
]);

const Detail = ({ total, units, type, refrigerio, movility }) => {
  const concept = concepts.get(type);

  console.log(total);
  const [formattedTotal, formattedRefrigerio, formattedMovility] = formatNumber(
    total,
    refrigerio,
    movility
  );

  console.log(formattedTotal, formattedRefrigerio, formattedMovility);

  return (
    <li>
      ⚪ {concept}: {formattedTotal} ({units}{" "}
      {units > 1 ? "unidades" : "unidad"} x{" "}
      {concept === "Movilidad" ? formattedMovility : formattedRefrigerio}
      {units > 1 ? " c/u" : ""})
    </li>
  );
};

export default Detail;
