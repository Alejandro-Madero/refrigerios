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
  const [ selectedYear, setSelectedYear ] = useState(new Date().getFullYear());
  const { theme } = useContextTheme();
  const { data, options } = useChartConfig(theme, selectedYear);
  const chartSectionRef = useRef(null);
  const [ isIntersected, setIsIntersected ] = useState(false);
  const [ setElement ] = useObserver({
    options: {
      root: null,
      rootMargin: '150px',
      threshold: 0.1,
    },
    setIsIntersected,
  });

  useEffect(() => {
    setElement(chartSectionRef.current);
  }, [ chartSectionRef, setElement ]);

  const handleYearChange = e => {
    setSelectedYear(Number(e.target.value));
  };

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

      <div className={styles['chart-year']}>
        <button
          className={`${styles['year-btn']}  ${
            selectedYear === 2023 ? styles['year-btn-active'] : ''
          }`}
          value={2023}
          onClick={handleYearChange}
        >
          2023
        </button>
        <button
          className={`${styles['year-btn']}  ${
            selectedYear === 2024 ? styles['year-btn-active'] : ''
          }`}
          value={2024}
          onClick={handleYearChange}
        >
          2024
        </button>
        <button
          className={`${styles['year-btn']}  ${
            selectedYear === 2025 ? styles['year-btn-active'] : ''
          }`}
          value={2025}
          onClick={handleYearChange}
        >
          2025
        </button>
      </div>
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
