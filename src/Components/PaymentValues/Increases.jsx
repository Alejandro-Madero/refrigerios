import styles from './Increases.module.css';
import { useState, useRef, useEffect } from 'react';
import useObserver from '../../hooks/useObserver';
import Card from '../UI/Card';

const Increases = ({ year, month, refrigerio, movility, idx }) => {
  const increaseRef = useRef(null);
  const [ isIntersected, setIsIntersected ] = useState(false);

  const [ setElement ] = useObserver({
    options: {
      root: null,
      threshold: idx % 2 === 0 ? 0.8 : 0.1,
    },
    setIsIntersected,
  });

  useEffect(() => {
    setElement(increaseRef.current);
  }, [ increaseRef, setElement ]);

  return (
    <Card
      classes={`${styles['payment-container__card']} ${
        isIntersected ? styles.active : styles.hide
      } `}
    >
      <h4 className={styles['increase-month']}>
        {month} {year}
      </h4>
      <div ref={increaseRef} className={styles['values-container']}>
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

export default Increases;
