import styles from './PaymentValues.module.css';
import { useEffect, useRef, useState } from 'react';
import { PRICES } from '../../Utils/prices';
import { MONTHS } from '../../Utils/constants';
import { formatNumber } from '../../Utils/formatNumber';
import useObserver from '../../hooks/useObserver';
import Card from '../UI/Card';
import Increases from './Increases';

const PaymentValues = () => {
  const curDate = new Date();
  const curYear = curDate.getFullYear();
  const curMonthNum = curDate.getMonth();
  const curMonthName = MONTHS[curMonthNum];
  const curValues = PRICES[curYear][curMonthName];
  const [curRefrigerio] = formatNumber(curValues.refrigerio);
  const [curMovility] = formatNumber(curValues.movilidad);
  const paymentRef = useRef(null);
  const [paymentIntersected, setPaymentIntersected] = useState(false);

  const [setElement] = useObserver({
    options: {
      root: null,
      threshold: 0.25,
    },
    setIsIntersected: setPaymentIntersected,
  });

  useEffect(() => {
    setElement(paymentRef.current);
  }, [paymentRef, setElement]);

  let curMax = { ...curValues };

  const nextIncreases = MONTHS.slice(curMonthNum + 1)
    .map(month => {
      if (
        PRICES[curYear][month].refrigerio > curMax.refrigerio ||
        PRICES[curYear][month].movilidad > curMax.movilidad
      ) {
        curMax = { ...PRICES[curYear][month] };
        return {
          month,
          year: curYear,
          refrigerio: formatNumber(PRICES[curYear][month].refrigerio),
          movilidad: formatNumber(PRICES[curYear][month].movilidad),
        };
      }
      return null;
    })
    .filter(month => month !== null);

  return (
    <section className={styles['payment-wrapper']}>
      <div className={styles['payment-section']}>
        <h3 className={styles['payment-section__header']}>
          Valores vigentes ( {curMonthName} {curYear} )
        </h3>
        <article ref={paymentRef} className={`${styles['payment-container']}`}>
          <Card
            classes={`${styles['payment-section__card']}  ${
              paymentIntersected ? styles.visible : ''
            }`}
          >
            <div className={styles['values-container']}>
              <div className={styles.values}>
                <h4>☕ Refrigerio Simple</h4>
                <p>{curRefrigerio}</p>
              </div>
            </div>
          </Card>
          <Card
            classes={`${styles['payment-section__card']}  ${
              paymentIntersected ? styles.visible : ''
            }`}
          >
            <div className={styles['values-container']}>
              <div className={styles.values}>
                <h4>🚗 Movilidad</h4>
                <p>{curMovility}</p>
              </div>
            </div>
          </Card>
        </article>

        {nextIncreases.length > 0 ? (
          <>
            <h3 className={styles['payment-section__header']}>
              Próximos aumentos
            </h3>
            <article className={styles['payment-container']}>
              {nextIncreases.map((month, i) => {
                return (
                  <Increases
                    key={month.month}
                    year={month.year}
                    month={month.month}
                    refrigerio={month.refrigerio}
                    movility={month.movilidad}
                    idx={i + 1}
                  />
                );
              })}
            </article>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default PaymentValues;
