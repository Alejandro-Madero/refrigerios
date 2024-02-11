import { PRICES } from '../Utils/prices';
import { MONTHS } from '../Utils/constants';

export const useChartConfig = (theme, selectedYear) => {
  const fontFamily = 'Nunito, sans-serif';

  const { refrigerioSimple, movility, refrigerioCompuesto } = Object.entries(
    PRICES[selectedYear] ?? PRICES[new Date().getFullYear()]
  ).reduce(
    (acc, month) => {
      return {
        refrigerioSimple: [...acc.refrigerioSimple, month[1].refrigerio],
        movility: [...acc.movility, month[1].movilidad],
        refrigerioCompuesto: [
          ...acc.refrigerioCompuesto,
          month[1].refrigerio + month[1].movilidad,
        ],
      };
    },
    {
      refrigerioSimple: [],
      movility: [],
      refrigerioCompuesto: [],
    }
  );

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
        data: refrigerioSimple,
        fill: false,
        borderColor: 'rgb(50,220,150)',
        backgroundColor: 'rgb(50,220,150)',
        pointRadius: 4.5,
        pointHoverRadius: 9,
      },
      {
        label: 'Movilidad ($)',
        data: movility,
        fill: true,
        borderColor: 'rgb(160, 160, 245)',
        backgroundColor: 'rgb(160, 160, 245)',
        pointRadius: 4.5,
        pointHoverRadius: 9,
      },
      {
        label: 'Refrigerio compuesto ($)',
        data: refrigerioCompuesto,
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
