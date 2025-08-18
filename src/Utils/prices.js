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
    septiembre: { refrigerio: 0, movilidad: 0 },
    octubre: { refrigerio: 0, movilidad: 0 },
    noviembre: { refrigerio: 0, movilidad: 0 },
    diciembre: { refrigerio: 0, movilidad: 0 },
  },
};

export const INITIAL_REFRIGERIO_COMPUESTO_VALUE = 9000;
export const INITIAL_REFRIGERIO_VALUE = 4000;
export const INITIAL_MOVILITY_VALUE = 5000;
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
    enero: 1.255,
    febrero: 1.5135,
    marzo: 1.7133,
    abril: 1.9017,
    mayo: 2.0691,
    junio: 2.156,
    julio: 2.2552,
    agosto: 2.3454,
    septiembre: 2.4439,
    octubre: 2.5294,
    noviembre: 2.5977,
    diciembre: 2.6608,
  },
  2025: {
    enero: 2.7319,
    febrero: 2.792,
    marzo: 2.859,
    abril: 2.9648,
    mayo: 3.0478,
    junio: 3.0935,
    julio: 3.143,
    agosto: 3.2027,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0,
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
};
