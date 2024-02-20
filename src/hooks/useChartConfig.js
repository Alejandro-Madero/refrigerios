import { PRICES } from '../Utils/prices';
import { MONTHS } from '../Utils/constants';

const date = new Date();
const curYear = date.getFullYear();
const curMonth = date.getMonth();
const refrigerioSimple = { 2023: [], 2024: [], full: [] };
const refrigerioCompuesto = { 2023: [], 2024: [], full: [] };
const movility = { 2023: [], 2024: [], full: [] };

Object.entries(PRICES).forEach(year => {
  const months = Object.entries(year[1]);

  months.forEach((month, i) => {
    if (Number(year[0]) === curYear && i > curMonth) return;

    const refrigerio = month[1].refrigerio;
    const movilidad = month[1].movilidad;
    const sum = refrigerio + movilidad;

    refrigerioSimple[year[0]].push(refrigerio);
    movility[year[0]].push(movilidad);
    refrigerioCompuesto[year[0]].push(sum);
  });
});

export const useChartConfig = (theme, selectedYear) => {
  const fontFamily = 'Nunito, sans-serif';

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      title: {
        display: true,
        text: '',
      },
      legend: {
        labels: {
          borderRadius: 4,
          useBorderRadius: true,
          boxWidth: 45,
          font: {
            size: 16,
            family: fontFamily,
          },
        },
      },

      tooltip: {
        titleFont: {
          family: fontFamily,
          size: 16,
          weight: '800',
        },
        bodyFont: {
          family: fontFamily,
          size: 14,
          weight: '500',
        },
      },
    },

    scales: {
      x: {
        grid: {
          color:
            theme === 'dark'
              ? 'rgba(236, 236, 253, 0.05)'
              : 'rgba(16, 24, 40, 0.10)',
        },
        ticks: {
          textStrokeColor: 10,

          font: {
            size: 14,
            family: fontFamily,
          },
          color: theme === 'dark' ? '#ececfd' : '#101828',
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          color:
            theme === 'dark'
              ? 'rgba(236, 236, 253, 0.10)'
              : 'rgba(16, 24, 40, 0.10)',
        },
        ticks: {
          font: {
            size: 14,
            family: fontFamily,
          },
          color: theme === 'dark' ? '#ececfd' : '#101828',
        },
      },
    },
    color: theme === 'dark' ? '#ececfd' : '#101828',
  };

  const data = {
    labels: MONTHS,
    datasets: [
      {
        label: 'Refrigerio simple ($)',
        data: refrigerioSimple[selectedYear],
        fill: false,
        borderColor: 'rgb(50,220,150)',
        backgroundColor: 'rgb(50,220,150)',
        pointRadius: 4.5,
        pointHoverRadius: 9,
      },
      {
        label: 'Movilidad ($)',
        data: movility[selectedYear],
        fill: true,
        borderColor: 'rgb(160, 160, 245)',
        backgroundColor: 'rgb(160, 160, 245)',
        pointRadius: 4.5,
        pointHoverRadius: 9,
      },
      {
        label: 'Refrigerio compuesto ($)',
        data: refrigerioCompuesto[selectedYear],
        fill: true,
        borderColor: 'rgb(255, 100, 145)',
        backgroundColor: 'rgb(255, 100, 145)',
        pointRadius: 4.5,
        pointHoverRadius: 9,
      },
    ],
  };

  return { options, data };
};
