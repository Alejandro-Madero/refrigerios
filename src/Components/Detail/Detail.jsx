import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { formatNumber } from "../../utils/formatNumber";
import styles from "./Detail.module.css";

const concepts = new Map([
  ["shifts", "Refrigerio simple"],
  ["movility", "Movilidad"],
  ["nights", "Nocturnidad"],
  ["holiday", "Feriados"],
  ["sundays", "Domingos"],
]);

const Detail = ({ total, units, type, refrigerio, movility }) => {
  const { theme } = useContext(ThemeContext);
  const concept = concepts.get(type);
  const [formattedTotal] = formatNumber(total);

  return (
    <li className={styles["detail-title"]}>
      ✅ {concept}: {formattedTotal}
      <span className={styles["detail-description"]}>
        {theme === "dark" ? "⚪" : "🔵"} ( {units}{" "}
        {units > 1 ? "unidades " : "unidad"} x{" "}
        {concept === "Movilidad" ? movility : refrigerio}
        {units > 1 ? " c/u " : ""} )
      </span>
    </li>
  );
};

export default Detail;
