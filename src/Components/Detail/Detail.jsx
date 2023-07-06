import { formatNumber } from "../../Utils/formatNumber";

const concepts = new Map([
  ["shifts", "Refrigerio simple"],
  ["movility", "Movilidad"],
  ["nights", "Nocturnidad"],
  ["holiday", "Feriados"],
  ["sundays", "Domingos"],
]);

const Detail = ({ total, units, type, refrigerio, movility }) => {
  const concept = concepts.get(type);
  const [formattedTotal] = formatNumber(total);

  return (
    <li>
      ✅ {concept}: {formattedTotal}
      <span>
        ⚪ ( {units} {units > 1 ? "unidades " : "unidad"} x{" "}
        {concept === "Movilidad" ? movility : refrigerio}
        {units > 1 ? " c/u " : ""} )
      </span>
    </li>
  );
};

export default Detail;