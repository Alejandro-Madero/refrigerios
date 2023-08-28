import Card from '../UI/Card';
import { PRICES2023 } from '../../Utils/prices';
import { MONTHS } from '../../Utils/constants';
import { formatNumber } from '../../Utils/formatNumber';
import styles from './PaymentValues.module.css';

const PaymentValues = () => {
  const curMonthNum = new Date().getMonth();
  const curMonthName = MONTHS[curMonthNum];
  const curValues = PRICES2023[curMonthName];
  const [curRefrigerio] = formatNumber(curValues.refrigerio);
  const [curMovility] = formatNumber(curValues.movilidad);

  let curMax = { ...curValues };

  const nextIncreases = MONTHS.slice(curMonthNum + 1)
    .map(month => {
      if (
        PRICES2023[month].refrigerio > curMax.refrigerio ||
        PRICES2023[month].movilidad > curMax.movilidad
      ) {
        curMax = { ...PRICES2023[month] };
        return {
          month,
          refrigerio: formatNumber(PRICES2023[month].refrigerio),
          movilidad: formatNumber(PRICES2023[month].movilidad),
        };
      }
      return null;
    })
    .filter(month => month !== null);

  console.log(nextIncreases);

  return (
    <section className={styles['payment-section']}>
      <h3 className={styles['payment-section__header']}>
        Valores vigentes ({curMonthName})
      </h3>
      <article className={styles['payment-container']}>
        <Card classes={styles['payment-container__card']}>
          <div className={styles['values-container']}>
            <div className={styles.values}>
              <h4>Refrigerio Simple</h4>
              <p>{curRefrigerio}</p>
            </div>
          </div>
        </Card>
        <Card classes={styles['payment-container__card']}>
          <div className={styles['values-container']}>
            <div className={styles.values}>
              <h4>Movilidad</h4>
              <p>{curMovility}</p>
            </div>
          </div>
        </Card>
      </article>

      <h3 className={styles['payment-section__header']}>Próximos aumentos</h3>
      <article className={styles['payment-container']}>
        {nextIncreases.map(month => {
          console.log(month);
          return (
            <Increases
              key={month.month}
              month={month.month}
              refrigerio={month.refrigerio}
              movility={month.movilidad}
            />
          );
        })}
      </article>
    </section>
  );
};

const Increases = ({ month, refrigerio, movility }) => {
  return (
    <Card classes={styles['payment-container__card']}>
      <h4 className={styles['increase-month']}>{month}</h4>
      <div className={styles['values-container']}>
        <div className={styles.values}>
          <h5>Refrigerio simple</h5>
          <p className=''>{refrigerio}</p>
        </div>
        <div className={styles.values}>
          <h5>Movilidad</h5>
          <p className=''>{movility}</p>
        </div>
      </div>
    </Card>
  );
};

export default PaymentValues;
