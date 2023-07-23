import { useState, useEffect, useRef, useContext } from "react";
import { formatNumber } from "../../Utils/formatNumber";
import { ThemeContext } from "../../context/ThemeProvider";
import styles from "./Result.module.css";
import ResultDetails from "./ResultsDetails";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Result = ({ results }) => {
  const { theme } = useContext(ThemeContext);
  const [showDetails, setShowDetails] = useState(false);
  const [formattedMoney] = formatNumber(results.total);
  const resultRef = useRef(null);

  useEffect(() => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }, [resultRef]);

  return (
    <>
      <Card classes={styles["result-container"]}>
        <div
          className={`${styles.result} ${styles[`result-${theme}`]}`}
          ref={resultRef}
        >
          <h3 className={styles["result-header"]}>
            En {results.paymentMonth} vas a cobrar un refrigerio de
          </h3>
          <p className={styles["result-payment"]}>{formattedMoney}</p>
        </div>

        <ResultDetails
          classes={`${styles["result-details"]} ${
            showDetails ? styles.visible : ""
          }`}
          theme={theme}
          details={results}
          refrigerio={results.REFRIGERIO}
          movility={results.MOVILIDAD}
        />
      </Card>
      <Button
        onClick={() => setShowDetails((prev) => !prev)}
        classes={`${styles["details-btn"]} ${styles[`details-btn--${theme}`]}`}
      >
        {showDetails ? "Cerrar detalles" : "Ver detalles"}
      </Button>
    </>
  );
};

export default Result;
