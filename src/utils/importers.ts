import { combinationToIndex, normalizeCombination, validateCombination } from "./combinations";
import type { LotteryProductConfig } from "../config/products";
import type { ImportedCombination } from "../types";

type ImportResult = {
  combinations: ImportedCombination[];
  errors: string[];
};

function buildImported(numbers: number[], source: string, config: LotteryProductConfig): ImportedCombination | string {
  const normalized = normalizeCombination(numbers);
  if (!validateCombination(normalized, config)) {
    return `${source}: bộ số không hợp lệ (${numbers.join(", ")})`;
  }
  return {
    index: combinationToIndex(normalized, config),
    numbers: normalized,
    source,
  };
}

export function parseCSV(text: string, config: LotteryProductConfig): ImportResult {
  const combinations: ImportedCombination[] = [];
  const errors: string[] = [];
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

  lines.forEach((line, lineIndex) => {
    const columns = line.split(",").map((column) => column.trim());
    const isHeader = lineIndex === 0 && columns.some((column) => /[a-z_]/i.test(column));
    if (isHeader) return;

    const numericColumns = columns.map((column) => Number(column));
    const numbers =
      numericColumns.length >= config.pickCount + 1
        ? numericColumns.slice(1, config.pickCount + 1)
        : numericColumns.slice(0, config.pickCount);
    if (numbers.some((number) => !Number.isFinite(number))) {
      errors.push(`CSV dòng ${lineIndex + 1}: không đọc được số.`);
      return;
    }

    const imported = buildImported(numbers, `CSV dòng ${lineIndex + 1}`, config);
    if (typeof imported === "string") {
      errors.push(imported);
      return;
    }
    combinations.push(imported);
  });

  return { combinations, errors };
}

export function parseJSON(text: string, config: LotteryProductConfig): ImportResult {
  const combinations: ImportedCombination[] = [];
  const errors: string[] = [];
  const trimmed = text.trim();
  if (!trimmed) return { combinations, errors };

  const records: unknown[] = [];
  try {
    const parsed = JSON.parse(trimmed);
    records.push(...(Array.isArray(parsed) ? parsed : [parsed]));
  } catch {
    trimmed.split(/\r?\n/).forEach((line, lineIndex) => {
      if (!line.trim()) return;
      try {
        records.push(JSON.parse(line));
      } catch {
        errors.push(`JSON dòng ${lineIndex + 1}: lỗi định dạng.`);
      }
    });
  }

  records.forEach((record, recordIndex) => {
    let numbers: number[] | undefined;
    if (Array.isArray(record)) {
      numbers = record.map((value) => Number(value)).slice(0, config.pickCount);
    } else if (record && typeof record === "object") {
      const value = (record as { result?: unknown; numbers?: unknown }).result ?? (record as { numbers?: unknown }).numbers;
      if (Array.isArray(value)) {
        numbers = value.map((entry) => Number(entry)).slice(0, config.pickCount);
      }
    }

    if (!numbers) {
      errors.push(`JSON bản ghi ${recordIndex + 1}: không tìm thấy mảng result/numbers.`);
      return;
    }

    const imported = buildImported(numbers, `JSON bản ghi ${recordIndex + 1}`, config);
    if (typeof imported === "string") {
      errors.push(imported);
      return;
    }
    combinations.push(imported);
  });

  return { combinations, errors };
}

export function parseImportedText(text: string, fileName: string, config: LotteryProductConfig): ImportResult {
  const lowerName = fileName.toLowerCase();
  if (lowerName.endsWith(".csv")) return parseCSV(text, config);
  if (lowerName.endsWith(".json") || lowerName.endsWith(".jsonl")) return parseJSON(text, config);

  const csvResult = parseCSV(text, config);
  if (csvResult.combinations.length > 0) return csvResult;
  return parseJSON(text, config);
}
