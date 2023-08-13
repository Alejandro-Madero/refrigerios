import styles from "./ResultDetails.module.css";
import Detail from "../Detail/Detail";
import { formatNumber } from "../../Utils/formatNumber";

const ResultDetails = ({ details, classes }) => {
  const curedDetails = Object.entries(details).filter((detail) => {
    return detail[1].total > 0;
  });

  const [formattedRefrigerio, formattedMovility] = formatNumber(
    details.REFRIGERIO,
    details.MOVILIDAD
  );

  return (
    <div className={`${styles["details-container"]} ${classes}`}>
      <ul className={`${styles.details}`}>
        {curedDetails.map((detail) => {
          return (
            <Detail
              key={detail[0]}
              type={detail[0]}
              total={detail[1].total}
              units={detail[1].units}
              refrigerio={formattedRefrigerio}
              movility={formattedMovility}
            />
          );
        })}
        <div className={styles["detail-values-container"]}>
          <li className={styles["detail-values"]}>
            Valores de referencia {details.month}
            <span>Refrigerio simple: {formattedRefrigerio}</span>
            <span>Movilidad: {formattedMovility}</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default ResultDetails;
