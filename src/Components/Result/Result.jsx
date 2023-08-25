import { useState, useEffect, useRef } from 'react';
import { formatNumber } from '../../Utils/formatNumber';

import styles from './Result.module.css';
import ResultDetails from './ResultsDetails';
import Button from '../UI/Button';
import Card from '../UI/Card';

const Result = ({ results }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [formattedMoney] = formatNumber(results.total);
  const resultRef = useRef(null);

  useEffect(() => {
    resultRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [resultRef]);

  return (
    <>
      <Card classes={styles['result-container']}>
        <div className={styles.result} ref={resultRef}>
          <h3 className={styles['result-header']}>
            En {results.paymentMonth} vas a cobrar un refrigerio de
          </h3>
          <p className={styles['result-payment']}>{formattedMoney}</p>
        </div>

        <ResultDetails
          classes={`${styles['result-details']} ${
            showDetails ? styles.visible : ''
          }`}
          details={results}
          refrigerio={results.REFRIGERIO}
          movility={results.MOVILIDAD}
        />
      </Card>
      <Button
        onClick={() => setShowDetails(prev => !prev)}
        classes={styles['details-btn']}
      >
        {showDetails ? 'Cerrar detalles' : 'Ver detalles'}
      </Button>
    </>
  );
};

export default Result;
