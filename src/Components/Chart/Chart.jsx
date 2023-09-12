import styles from './Chart.module.css';
import { useContextTheme } from '../../hooks/useContextTheme';
import { useChartConfig } from '../../hooks/useChartConfig';

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

  return (
    <section className={styles['chart-section']}>
      <p>$</p>
      <div className={styles['chart-container']}>
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default LineChart;
