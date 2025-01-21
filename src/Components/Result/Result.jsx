import { useState, useRef, useEffect } from 'react';
import { formatNumber } from '../../Utils/formatNumber';
import styles from './Result.module.css';
import ResultDetails from './ResultsDetails';
import Card from '../UI/Card';
import { ReactComponent as DoubleArrowDown } from '../../assets/double-arrow-down.svg';
import { ReactComponent as DoubleArrowUp } from '../../assets/double-arrow-up.svg';

const Result = ({ results }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [formattedMoney] = formatNumber(results.total);
  const resultRef = useRef(null);
  const REFRIGERIO = results.REFRIGERIO;
  const MOVILIDAD = results.MOVILIDAD;
  const unknownValues = results.REFRIGERIO === 0 && results.MOVILIDAD === 0;

  useEffect(() => {
    const targetPosition = resultRef.current.getBoundingClientRect().top;

    window.scrollTo({
      top: targetPosition + window.scrollY - 96,
      behavior: 'smooth',
    });
  }, [resultRef]);

  return (
    <Card id='result' classes={styles['result-container']}>
      <div className={styles.result} ref={resultRef}>
        <h3 className={styles['result-header']}>
          En {results.paymentMonth} de {results.paymentYear} vas a cobrar un
          refrigerio de
        </h3>
        {unknownValues ? (
          <div className={`${styles['no-results']}`}>
            🔴 No se conocen los valores para el mes seleccionado
          </div>
        ) : (
          <p className={styles['result-payment']}>{formattedMoney}</p>
        )}
      </div>
      {unknownValues ? (
        ''
      ) : (
        <ResultDetails
          classes={`${styles['result-details']} ${
            showDetails ? styles.visible : ''
          }`}
          details={results}
          refrigerio={results.REFRIGERIO}
          movility={results.MOVILIDAD}
        />
      )}
      {showDetails && !unknownValues ? (
        <DoubleArrowUp
          className={`${styles.arrow} ${styles['arrow-up']}`}
          onClick={() => setShowDetails(s => !s)}
        />
      ) : (
        !showDetails &&
        !unknownValues && (
          <DoubleArrowDown
            className={`${styles.arrow} ${styles['arrow-down']}`}
            onClick={() => setShowDetails(s => !s)}
          />
        )
      )}
    </Card>
  );
};

export default Result;
