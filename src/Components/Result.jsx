import styles from "./Result.module.css";

const Result = ({ children, money, month, paymentMonth }) => {
  console.log(money);
  const formattedMoney = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ars",
  }).format(money);

  console.log(formattedMoney);
  return (
    <div className={styles["result-container"]}>
      <h3 className={styles["result-header"]}>
        En {paymentMonth} vas a cobrar un refrigerio de
      </h3>
      <p>{formattedMoney}</p>
    </div>
  );
};

export default Result;
