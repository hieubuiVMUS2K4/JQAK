import { combinationToIndex, normalizeCombination, validateCombination } from "./combinations";
import type { ImportedCombination } from "../types";

type ImportResult = {
  combinations: ImportedCombination[];
  errors: string[];
};

function buildImported(numbers: number[], source: string): ImportedCombination | string {
  const normalized = normalizeCombination(numbers);
  if (!validateCombination(normalized)) {
    return `${source}: bộ số không hợp lệ (${numbers.join(", ")})`;
  }
  return {
    index: combinationToIndex(normalized),
    numbers: normalized,
    source,
  };
}

export function parseCSV(text: string): ImportResult {
  const combinations: ImportedCombination[] = [];
  const errors: string[] = [];
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

  lines.forEach((line, lineIndex) => {
    const columns = line.split(",").map((column) => column.trim());
    const isHeader = lineIndex === 0 && columns.some((column) => /[a-z_]/i.test(column));
    if (isHeader) return;

    const numericColumns = columns.map((column) => Number(column));
    const numbers = numericColumns.length >= 7 ? numericColumns.slice(1, 7) : numericColumns.slice(0, 6);
    if (numbers.some((number) => !Number.isFinite(number))) {
      errors.push(`CSV dòng ${lineIndex + 1}: không đọc được số.`);
      return;
    }

    const imported = buildImported(numbers, `CSV dòng ${lineIndex + 1}`);
    if (typeof imported === "string") {
      errors.push(imported);
      return;
    }
    combinations.push(imported);
  });

  return { combinations, errors };
}

export function parseJSON(text: string): ImportResult {
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
      numbers = record.map((value) => Number(value)).slice(0, 6);
    } else if (record && typeof record === "object") {
      const value = (record as { result?: unknown; numbers?: unknown }).result ?? (record as { numbers?: unknown }).numbers;
      if (Array.isArray(value)) {
        numbers = value.map((entry) => Number(entry)).slice(0, 6);
      }
    }

    if (!numbers) {
      errors.push(`JSON bản ghi ${recordIndex + 1}: không tìm thấy mảng result/numbers.`);
      return;
    }

    const imported = buildImported(numbers, `JSON bản ghi ${recordIndex + 1}`);
    if (typeof imported === "string") {
      errors.push(imported);
      return;
    }
    combinations.push(imported);
  });

  return { combinations, errors };
}

export function parseImportedText(text: string, fileName: string): ImportResult {
  const lowerName = fileName.toLowerCase();
  if (lowerName.endsWith(".csv")) return parseCSV(text);
  if (lowerName.endsWith(".json") || lowerName.endsWith(".jsonl")) return parseJSON(text);

  const csvResult = parseCSV(text);
  if (csvResult.combinations.length > 0) return csvResult;
  return parseJSON(text);
}
