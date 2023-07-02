import styles from "./ResultDetails.module.css";
import Detail from "./Detail";

const ResultDetails = ({ details, refrigerio, movility }) => {
  const curedDetails = Object.entries(details).filter((detail) => {
    return detail[1].total > 0;
  });
  console.log(details);
  return (
    <ul className={styles.details}>
      {curedDetails.map((detail) => {
        return (
          <Detail
            key={detail[0]}
            type={detail[0]}
            total={detail[1].total}
            units={detail[1].units}
            refrigerio={refrigerio}
            movility={movility}
          />
        );
      })}
    </ul>
  );
};

export default ResultDetails;
