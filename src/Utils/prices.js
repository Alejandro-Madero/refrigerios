export const PRICES = {
  2023: {
    enero: { refrigerio: 2500, movilidad: 0 },
    febrero: { refrigerio: 2700, movilidad: 0 },
    marzo: { refrigerio: 3000, movilidad: 0 },
    abril: { refrigerio: 3000, movilidad: 2000 },
    mayo: { refrigerio: 3000, movilidad: 2000 },
    junio: { refrigerio: 3000, movilidad: 3000 },
    julio: { refrigerio: 3000, movilidad: 3000 },
    agosto: { refrigerio: 4000, movilidad: 3000 },
    septiembre: { refrigerio: 4000, movilidad: 4000 },
    octubre: { refrigerio: 4000, movilidad: 4000 },
    noviembre: { refrigerio: 4000, movilidad: 5000 },
    diciembre: { refrigerio: 4000, movilidad: 5000 },
  },
  2024: {
    enero: { refrigerio: 6000, movilidad: 6000 },
    febrero: { refrigerio: 6000, movilidad: 6000 },
    marzo: { refrigerio: 8000, movilidad: 7000 },
    abril: { refrigerio: 8000, movilidad: 7000 },
    mayo: { refrigerio: 8000, movilidad: 7000 },
    junio: { refrigerio: 9000, movilidad: 8000 },
    julio: { refrigerio: 9000, movilidad: 8000 },
    agosto: { refrigerio: 9000, movilidad: 8000 },
    septiembre: { refrigerio: 9000, movilidad: 8000 },
    octubre: { refrigerio: 9000, movilidad: 8000 },
    noviembre: { refrigerio: 9000, movilidad: 8000 },
    diciembre: { refrigerio: 10500, movilidad: 10000 },
  },
  // nuevos valores
  2025: {
    enero: { refrigerio: 10500, movilidad: 10000 },
    febrero: { refrigerio: 10500, movilidad: 10000 },
    marzo: { refrigerio: 10500, movilidad: 10000 },
    abril: { refrigerio: 10500, movilidad: 10000 },
    mayo: { refrigerio: 10500, movilidad: 10000 },
    junio: { refrigerio: 10500, movilidad: 10000 },
    julio: { refrigerio: 10500, movilidad: 10000 },
    agosto: { refrigerio: 10500, movilidad: 10000 },
    septiembre: { refrigerio: 10500, movilidad: 10000 },
    octubre: { refrigerio: 10500, movilidad: 10000 },
    noviembre: { refrigerio: 10500, movilidad: 10000 },
    diciembre: { refrigerio: 10500, movilidad: 10000 },
  },
  2026: {
    enero: { refrigerio: 10500, movilidad: 10000 },
    febrero: { refrigerio: 10500, movilidad: 10000 },
    marzo: { refrigerio: 0, movilidad: 0 },
    abril: { refrigerio: 0, movilidad: 0 },
    mayo: { refrigerio: 0, movilidad: 0 },
    junio: { refrigerio: 0, movilidad: 0 },
    julio: { refrigerio: 0, movilidad: 0 },
    agosto: { refrigerio: 0, movilidad: 0 },
    septiembre: { refrigerio: 0, movilidad: 0 },
    octubre: { refrigerio: 0, movilidad: 0 },
    noviembre: { refrigerio: 0, movilidad: 0 },
    diciembre: { refrigerio: 0, movilidad: 0 },
  },
};

export const INITIAL_REFRIGERIO_COMPUESTO_VALUE = 12000;
export const INITIAL_REFRIGERIO_VALUE = 6000;
export const INITIAL_MOVILITY_VALUE = 6000;

export const INFLATION_FACTOR = {
  2023: {
    enero: 1,
    febrero: 1,
    marzo: 1,
    abril: 1,
    mayo: 1,
    junio: 1,
    julio: 1,
    agosto: 1,
    septiembre: 1,
    octubre: 1,
    noviembre: 1,
    diciembre: 1,
  },
  2024: {
    enero: 1,
    febrero: 1.206, // 20,6% inflacion enero
    marzo: 1.36519, // 13,2% inflacion febrero
    abril: 1.51536, // 11% inflacion marzo
    mayo: 1.64871, // 8,8% inflacion abril
    junio: 1.71796, // 4,2% inflacion mayo
    julio: 1.79698, // 4.6% inflacion junio
    agosto: 1.86886, // 4% inflacion julio
    septiembre: 1.94735, // 4,2% inflacion agosto
    octubre: 2.01551, // 3,5% inflacion septiembre
    noviembre: 2.06993, // 2,7% inflacion octubre
    diciembre: 2.11961, // 2,4% inflacion noviembre
  },
  2025: {
    enero: 2.17683, // 2,7% inflacion diciembre 2024
    febrero: 2.22472, // 2,2% inflacion enero
    marzo: 2.27812, // 2,4% inflacion febrero
    abril: 2.36241, // 3,7% inflacion marzo
    mayo: 2.42856, // 2,8% inflacion abril
    junio: 2.46499, // 1,5% inflacion mayo
    julio: 2.50442, // 1,6% inflacion junio
    agosto: 2.552, // 1,9% inflacion julio
    septiembre: 2.600488, // 1,9% inflacion agosto
    octubre: 2.65509, // 2,1% inflacion septiembre
    noviembre: 2.716157, // 2,3% inflacion octubre
    diciembre: 2.78406, // 2.5% inflacion noviembre
  },
  2026: {
    enero: 2.86201, // 2,8% inflacion diciembre 2025
    febrero: 2.93356, // 2.5% inflacion enero 2025,
    marzo: 2.86201,
    abril: 2.86201,
    mayo: 2.86201,
    junio: 2.86201,
    julio: 2.86201,
    agosto: 2.86201,
    septiembre: 2.86201,
    octubre: 2.86201,
    noviembre: 2.86201,
    diciembre: 2.86201,
  },
};
export const PRICES_ADJUSTED_IPC = {
  2023: {
    enero: { inflation: 1 },
    febrero: { inflation: 1 },
    marzo: { inflation: 1 },
    abril: { inflation: 1 },
    mayo: { inflation: 1 },
    junio: { inflation: 1 },
    julio: { inflation: 1 },
    agosto: { inflation: 1 },
    septiembre: { inflation: 1 },
    octubre: { inflation: 1 },
    noviembre: { inflation: 1 },
    diciembre: { inflation: 1 },
  },
  2024: {
    enero: {
      inflation:
        INFLATION_FACTOR['2024']['enero'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    febrero: {
      inflation:
        INFLATION_FACTOR['2024']['febrero'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    marzo: {
      inflation:
        INFLATION_FACTOR['2024']['marzo'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    abril: {
      inflation:
        INFLATION_FACTOR['2024']['abril'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    mayo: {
      inflation:
        INFLATION_FACTOR['2024']['mayo'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    junio: {
      inflation:
        INFLATION_FACTOR['2024']['junio'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    julio: {
      inflation:
        INFLATION_FACTOR['2024']['julio'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    agosto: {
      inflation:
        INFLATION_FACTOR['2024']['agosto'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    septiembre: {
      inflation:
        INFLATION_FACTOR['2024']['septiembre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    octubre: {
      inflation:
        INFLATION_FACTOR['2024']['octubre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    noviembre: {
      inflation:
        INFLATION_FACTOR['2024']['noviembre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    diciembre: {
      inflation:
        INFLATION_FACTOR['2024']['diciembre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
  },
  2025: {
    enero: {
      inflation:
        INFLATION_FACTOR['2025']['enero'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    febrero: {
      inflation:
        INFLATION_FACTOR['2025']['febrero'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    marzo: {
      inflation:
        INFLATION_FACTOR['2025']['marzo'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    abril: {
      inflation:
        INFLATION_FACTOR['2025']['abril'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    mayo: {
      inflation:
        INFLATION_FACTOR['2025']['mayo'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    junio: {
      inflation:
        INFLATION_FACTOR['2025']['junio'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    julio: {
      inflation:
        INFLATION_FACTOR['2025']['julio'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    agosto: {
      inflation:
        INFLATION_FACTOR['2025']['agosto'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    septiembre: {
      inflation:
        INFLATION_FACTOR['2025']['septiembre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    octubre: {
      inflation:
        INFLATION_FACTOR['2025']['octubre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    noviembre: {
      inflation:
        INFLATION_FACTOR['2025']['noviembre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    diciembre: {
      inflation:
        INFLATION_FACTOR['2025']['diciembre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
  },
  2026: {
    enero: {
      inflation:
        INFLATION_FACTOR['2026']['enero'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    febrero: {
      inflation:
        INFLATION_FACTOR['2026']['febrero'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    marzo: {
      inflation:
        INFLATION_FACTOR['2026']['marzo'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    abril: {
      inflation:
        INFLATION_FACTOR['2026']['abril'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    mayo: {
      inflation:
        INFLATION_FACTOR['2026']['mayo'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    junio: {
      inflation:
        INFLATION_FACTOR['2026']['junio'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    julio: {
      inflation:
        INFLATION_FACTOR['2026']['julio'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    agosto: {
      inflation:
        INFLATION_FACTOR['2026']['agosto'] * INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    septiembre: {
      inflation:
        INFLATION_FACTOR['2026']['septiembre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    octubre: {
      inflation:
        INFLATION_FACTOR['2026']['octubre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    noviembre: {
      inflation:
        INFLATION_FACTOR['2026']['noviembre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
    diciembre: {
      inflation:
        INFLATION_FACTOR['2026']['diciembre'] *
        INITIAL_REFRIGERIO_COMPUESTO_VALUE,
    },
  },
};
