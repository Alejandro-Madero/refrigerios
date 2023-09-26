import styles from './PaymentValues.module.css';
import { useEffect, useRef, useState } from 'react';
import { PRICES2023 } from '../../Utils/prices';
import { MONTHS } from '../../Utils/constants';
import { formatNumber } from '../../Utils/formatNumber';
import useObserver from '../../hooks/useObserver';
import Card from '../UI/Card';
import Increases from './Increases';

const PaymentValues = () => {
  const curMonthNum = new Date().getMonth();
  const curMonthName = MONTHS[curMonthNum];
  const curValues = PRICES2023[curMonthName];
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

  return (
    <section className={styles['payment-wrapper']}>
      <div className={styles['payment-section']}>
        <h3 className={styles['payment-section__header']}>
          Valores vigentes ({curMonthName})
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
