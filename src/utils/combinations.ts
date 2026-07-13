import { PRODUCT_CONFIGS, type LotteryProductConfig } from "../config/products";

export const DEFAULT_COMBINATION_CONFIG = PRODUCT_CONFIGS.power655;

const binomialCache = new Map<string, number>();

export function choose(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  const normalizedK = Math.min(k, n - k);
  const key = `${n}:${normalizedK}`;
  const cached = binomialCache.get(key);
  if (cached !== undefined) return cached;

  let result = 1;
  for (let i = 1; i <= normalizedK; i += 1) {
    result = (result * (n - normalizedK + i)) / i;
  }
  const rounded = Math.round(result);
  binomialCache.set(key, rounded);
  return rounded;
}

export function normalizeCombination(numbers: number[]): number[] {
  return [...numbers].sort((a, b) => a - b);
}

export function validateCombination(numbers: number[], config: LotteryProductConfig = DEFAULT_COMBINATION_CONFIG): boolean {
  if (numbers.length !== config.pickCount) return false;
  const unique = new Set(numbers);
  if (unique.size !== config.pickCount) return false;
  return numbers.every((number) => Number.isInteger(number) && number >= 1 && number <= config.maxNumber);
}

export function combinationToIndex(numbers: number[], config: LotteryProductConfig = DEFAULT_COMBINATION_CONFIG): number {
  const sorted = normalizeCombination(numbers);
  if (!validateCombination(sorted, config)) {
    throw new Error(`Combination must contain ${config.pickCount} unique integers from 1 to ${config.maxNumber}.`);
  }

  let rank = 0;
  let previous = 0;
  for (let position = 0; position < config.pickCount; position += 1) {
    const current = sorted[position];
    for (let candidate = previous + 1; candidate < current; candidate += 1) {
      rank += choose(config.maxNumber - candidate, config.pickCount - position - 1);
    }
    previous = current;
  }
  return rank;
}

export function indexToCombination(index: number, config: LotteryProductConfig = DEFAULT_COMBINATION_CONFIG): number[] {
  if (!Number.isInteger(index) || index < 0 || index >= config.totalCombinations) {
    throw new Error(`Index must be an integer from 0 to ${config.totalCombinations - 1}.`);
  }

  const result: number[] = [];
  let remainingRank = index;
  let previous = 0;

  for (let position = 0; position < config.pickCount; position += 1) {
    for (let candidate = previous + 1; candidate <= config.maxNumber; candidate += 1) {
      const count = choose(config.maxNumber - candidate, config.pickCount - position - 1);
      if (remainingRank < count) {
        result.push(candidate);
        previous = candidate;
        break;
      }
      remainingRank -= count;
    }
  }

  return result;
}

export function formatCombination(numbers: number[]): string {
  return numbers.map((number) => String(number).padStart(2, "0")).join(" ");
}

export function parseCombinationInput(value: string): number[] {
  const tokens = value
    .trim()
    .split(/[\s,;-]+/)
    .filter(Boolean);
  return tokens.map((token) => Number(token));
}

export function randomCombination(config: LotteryProductConfig = DEFAULT_COMBINATION_CONFIG): number[] {
  const pool = Array.from({ length: config.maxNumber }, (_, index) => index + 1);
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return normalizeCombination(pool.slice(0, config.pickCount));
}
