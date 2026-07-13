export type LotteryProductId = "power655" | "power645";

export type LotteryProductConfig = {
  id: LotteryProductId;
  label: string;
  shortLabel: string;
  maxNumber: number;
  pickCount: number;
  totalCombinations: number;
  dataFileName: string;
  prizeByMatch: Record<number, number>;
};

export const PRODUCT_CONFIGS: Record<LotteryProductId, LotteryProductConfig> = {
  power655: {
    id: "power655",
    label: "Power 6/55",
    shortLabel: "6/55",
    maxNumber: 55,
    pickCount: 6,
    totalCombinations: 28_989_675,
    dataFileName: "power655.jsonl",
    prizeByMatch: {
      3: 50_000,
      4: 500_000,
      5: 5_000_000_000,
      6: 40_000_000_000,
    },
  },
  power645: {
    id: "power645",
    label: "Power 6/45",
    shortLabel: "6/45",
    maxNumber: 45,
    pickCount: 6,
    totalCombinations: 8_145_060,
    dataFileName: "power645.jsonl",
    prizeByMatch: {
      3: 30_000,
      4: 300_000,
      5: 10_000_000,
      6: 12_000_000_000,
    },
  },
};

export const DEFAULT_PRODUCT_ID: LotteryProductId = "power655";

export const PRODUCT_OPTIONS = Object.values(PRODUCT_CONFIGS);
