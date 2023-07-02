import { formatNumber } from "../Utils/formatNumber";
import styles from "./Result.module.css";
import ResultDetails from "./ResultsDetails";
import Button from "./UI/Button";
const Result = ({ children, results }) => {
  console.log(results);

  const [formattedMoney] = formatNumber(results.total);

  return (
    <>
      {" "}
      <div className={styles["result-container"]}>
        <h3 className={styles["result-header"]}>
          En {results.paymentMonth} vas a cobrar un refrigerio de
        </h3>
        <p className={styles["result-payment"]}>{formattedMoney}</p>
      </div>
      <Button classes={styles["details-btn"]}>Ver detalle</Button>
      <ResultDetails
        details={{
          shifts: results.shifts,
          movility: results.movility,
          nights: results.nights,
          sundays: results.sundays,
          holiday: results.holiday,
        }}
        refrigerio={results.REFRIGERIO}
        movility={results.MOVILIDAD}
      ></ResultDetails>
    </>
  );
};

export default Result;
