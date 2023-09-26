import styles from './Chart.module.css';
import { useContextTheme } from '../../hooks/useContextTheme';
import { useChartConfig } from '../../hooks/useChartConfig';
import { useEffect, useState, useRef } from 'react';
import useObserver from '../../hooks/useObserver';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend
);

const LineChart = () => {
  const { theme } = useContextTheme();
  const { data, options } = useChartConfig(theme);
  const chartSectionRef = useRef(null);
  const [isIntersected, setIsIntersected] = useState(false);

  const [setElement] = useObserver({
    options: {
      root: null,
      rootMargin: '150px',
      threshold: 0.1,
    },
    setIsIntersected,
  });

  useEffect(() => {
    setElement(chartSectionRef.current);
  }, [chartSectionRef, setElement]);

  return (
    <section
      ref={chartSectionRef}
      className={`${styles['chart-section']} ${
        isIntersected ? styles.active : ''
      }`}
    >
      <h3 className={styles['chart-header']}>
        Evolución anual de los valores del refrigerio y movilidad
      </h3>
      <div className={styles['chart-wrapper']}>
        <p>$</p>
        <div className={styles['chart-container']}>
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default LineChart;
