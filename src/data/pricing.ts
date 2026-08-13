export type PriceRangeRow = {
  label: string;
  values: (number | string)[];
};

export type PriceTable = {
  title: string;
  subtitle?: string;
  rowHeader: string;
  columns: string[];
  rows: PriceRangeRow[];
  accent?: 'navy' | 'blue' | 'pink' | 'yellow';
};

export type PriceCategory = {
  title: string;
  badge?: string;
  subtitle?: string;
  accent?: 'navy' | 'blue' | 'pink' | 'yellow';
  tables: PriceTable[];
};

export type PriceExtra = {
  label: string;
  value: string;
};

export type PriceEntry = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  pricingUnit?: string;
  categories: PriceCategory[];
  notes?: string[];
  extras?: PriceExtra[];
};

export const pricingCatalog: PriceEntry[] = [
  {
    id: 'nyomtatas',
    title: 'Nyomtatás',
    pricingUnit: 'A megadott árak forintban értendők és 1 lapra vonatkoznak.',
    categories: [
      {
        title: '80g normál papír',
        accent: 'blue',
        tables: [
          {
            title: 'Fekete-fehér',
            rowHeader: 'Mennyiség',
            columns: ['A5', 'A4', 'A3'],
            accent: 'navy',
            rows: [
              { label: '1–4 oldal', values: [100, 150, 250] },
              { label: '5–9 oldal', values: [70, 100, 180] },
              { label: '10–49 oldal', values: [40, 50, 100] },
              { label: '50+ oldal', values: [20, 40, 80] },
            ],
          },
          {
            title: 'Színes',
            rowHeader: 'Mennyiség',
            columns: ['A5', 'A4', 'A3'],
            accent: 'pink',
            rows: [
              { label: '1–4 oldal', values: [150, 200, 400] },
              { label: '5–9 oldal', values: [120, 180, 360] },
              { label: '10–49 oldal', values: [100, 150, 300] },
              { label: '50+ oldal', values: [80, 120, 240] },
            ],
          },
        ],
      },
      {
        title: '120g prémium papír',
        accent: 'pink',
        tables: [
          {
            title: 'Fekete-fehér',
            rowHeader: 'Mennyiség',
            columns: ['A5', 'A4', 'A3'],
            accent: 'navy',
            rows: [
              { label: '1–4 oldal', values: [150, 220, 370] },
              { label: '5–9 oldal', values: [100, 150, 270] },
              { label: '10–49 oldal', values: [60, 70, 150] },
              { label: '50+ oldal', values: [30, 60, 120] },
            ],
          },
          {
            title: 'Színes',
            rowHeader: 'Mennyiség',
            columns: ['A5', 'A4', 'A3'],
            accent: 'pink',
            rows: [
              { label: '1–4 oldal', values: [220, 300, 600] },
              { label: '5–9 oldal', values: [180, 270, 540] },
              { label: '10–49 oldal', values: [150, 220, 450] },
              { label: '50+ oldal', values: [120, 180, 360] },
            ],
          },
        ],
      },
      {
        title: '300g karton',
        accent: 'yellow',
        tables: [
          {
            title: 'Fekete-fehér',
            rowHeader: 'Mennyiség',
            columns: ['A5', 'A4', 'A3'],
            accent: 'navy',
            rows: [
              { label: '1–4 oldal', values: [200, 300, 500] },
              { label: '5–9 oldal', values: [140, 200, 360] },
              { label: '10–49 oldal', values: [80, 100, 200] },
              { label: '50+ oldal', values: [40, 80, 160] },
            ],
          },
          {
            title: 'Színes',
            rowHeader: 'Mennyiség',
            columns: ['A5', 'A4', 'A3'],
            accent: 'pink',
            rows: [
              { label: '1–4 oldal', values: [300, 400, 800] },
              { label: '5–9 oldal', values: [240, 360, 720] },
              { label: '10–49 oldal', values: [200, 300, 600] },
              { label: '50+ oldal', values: [160, 240, 480] },
            ],
          },
        ],
      },
    ],
    notes: [
      'Hozott fájlból dolgozunk: PDF, Word és JPG formátumokból is.',
      'Nagyobb mennyiségnél egyedi ajánlat is kérhető.',
    ],
  },
  {
    id: 'fenymasolas',
    title: 'Fénymásolás',
    pricingUnit: 'Az árak lapadagolóból történő másolásra és scannelésre vonatkoznak.',
    categories: [
      {
        title: 'Lapadagolóból',
        accent: 'blue',
        tables: [
          {
            title: 'Fekete-fehér',
            rowHeader: 'Mennyiség',
            columns: ['A4', 'A3'],
            accent: 'navy',
            rows: [
              { label: '1–20 oldal', values: [50, 100] },
              { label: '21–100 oldal', values: [40, 80] },
              { label: '101+ oldal', values: [30, 60] },
            ],
          },
          {
            title: 'Színes',
            rowHeader: 'Mennyiség',
            columns: ['A4', 'A3'],
            accent: 'pink',
            rows: [
              { label: '1–20 oldal', values: [180, 360] },
              { label: '21–100 oldal', values: [150, 300] },
              { label: '101+ oldal', values: [120, 240] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'scanneles',
    title: 'Scannelés',
    pricingUnit: 'Az árak lapadagolóból történő másolásra és scannelésre vonatkoznak.',
    categories: [
      {
        title: 'Lapadagolóból',
        accent: 'blue',
        tables: [
          {
            title: 'Árlista',
            rowHeader: 'Mennyiség',
            columns: ['Ár / oldal'],
            accent: 'blue',
            rows: [
              { label: '1–10 oldal', values: [150] },
              { label: '11–50 oldal', values: [90] },
              { label: '51+ oldal', values: [50] },
            ],
          },
        ],
      },
    ],
    extras: [{ label: 'Üveglapról (egyenként)', value: '250 Ft / oldal' }],
  },
  {
    id: 'spiralozas',
    title: 'Spirálozás',
    subtitle: 'Víztiszta előlap, fehér hátlap',
    categories: [
      {
        title: 'Kivitel',
        accent: 'yellow',
        tables: [
          {
            title: 'Árlista',
            rowHeader: 'Méret',
            columns: ['Ár'],
            accent: 'yellow',
            rows: [
              { label: '1–50 lap', values: [1000] },
              { label: '51–100 lap', values: [1500] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'laminalas',
    title: 'Laminálás',
    subtitle: '100 mikronos prémium lamináló fóliával',
    categories: [
      {
        title: 'Méret szerinti árak',
        accent: 'yellow',
        tables: [
          {
            title: 'Árlista',
            rowHeader: 'Mennyiség',
            columns: ['A5', 'A4', 'A3', 'Névjegy / A6'],
            accent: 'yellow',
            rows: [
              { label: '1–10 db', values: [250, 400, 800, 200] },
              { label: '11–20 db', values: [200, 300, 600, 150] },
              { label: '21+ db', values: [150, 200, 400, 150] },
            ],
          },
        ],
      },
    ],
    notes: ['Dokumentumok, igazolványok, menük és oktatási anyagok védelmére ajánlott.'],
  },
  {
    id: 'nevjegykartya',
    title: 'Névjegykártya',
    subtitle: '90 × 50 mm, 300g prémium karton',
    pricingUnit: 'A megadott árak forintban értendők és 1 darabra vonatkoznak.',
    categories: [
      {
        title: 'Nyomtatás',
        accent: 'navy',
        tables: [
          {
            title: 'Árlista',
            rowHeader: 'Mennyiség',
            columns: ['Egyoldalas', 'Kétoldalas'],
            accent: 'navy',
            rows: [
              { label: '50–99 db', values: [120, 180] },
              { label: '100–299 db', values: [90, 150] },
              { label: '300+ db', values: [80, 120] },
            ],
          },
        ],
      },
    ],
    notes: ['Az árak az ÁFA-t tartalmazzák.'],
  },
  {
    id: 'szorolap',
    title: 'Szórólap nyomtatás',
    subtitle: '120g fényes prémium papír',
    pricingUnit: 'A megadott árak forintban értendők és 1 lapra vonatkoznak.',
    categories: [
      {
        title: 'Szórólap',
        accent: 'navy',
        tables: [
          {
            title: 'A6',
            subtitle: '105 × 148 mm',
            rowHeader: 'Mennyiség',
            columns: ['Egyoldalas', 'Kétoldalas'],
            accent: 'navy',
            rows: [
              { label: '1–99 db', values: [100, 130] },
              { label: '100–299 db', values: [80, 110] },
              { label: '300+ db', values: [50, 70] },
            ],
          },
          {
            title: 'A5',
            subtitle: '210 × 148 mm',
            rowHeader: 'Mennyiség',
            columns: ['Egyoldalas', 'Kétoldalas'],
            accent: 'navy',
            rows: [
              { label: '1–99 db', values: [130, 160] },
              { label: '100–299 db', values: [100, 140] },
              { label: '300+ db', values: [70, 90] },
            ],
          },
        ],
      },
    ],
    notes: ['Az árak az ÁFA-t tartalmazzák.'],
  },
];
