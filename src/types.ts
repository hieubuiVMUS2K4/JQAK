export type ImportedCombination = {
  index: number;
  numbers: number[];
  source: string;
};

export type SelectedCombination = {
  index: number;
  numbers: number[];
  selectedAt: string;
};

export type LogEntry = {
  id: number;
  at: string;
  level: "info" | "warn" | "error" | "success";
  message: string;
};

export type GridMode = "grid" | "heatmap";
