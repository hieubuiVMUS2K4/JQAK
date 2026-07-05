export const MAX_NUMBER = 55;
export const PICK_COUNT = 6;
export const TOTAL_COMBINATIONS = 28_989_675;

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

export function validateCombination(numbers: number[]): boolean {
  if (numbers.length !== PICK_COUNT) return false;
  const unique = new Set(numbers);
  if (unique.size !== PICK_COUNT) return false;
  return numbers.every((number) => Number.isInteger(number) && number >= 1 && number <= MAX_NUMBER);
}

export function combinationToIndex(numbers: number[]): number {
  const sorted = normalizeCombination(numbers);
  if (!validateCombination(sorted)) {
    throw new Error("Combination must contain 6 unique integers from 1 to 55.");
  }

  let rank = 0;
  let previous = 0;
  for (let position = 0; position < PICK_COUNT; position += 1) {
    const current = sorted[position];
    for (let candidate = previous + 1; candidate < current; candidate += 1) {
      rank += choose(MAX_NUMBER - candidate, PICK_COUNT - position - 1);
    }
    previous = current;
  }
  return rank;
}

export function indexToCombination(index: number): number[] {
  if (!Number.isInteger(index) || index < 0 || index >= TOTAL_COMBINATIONS) {
    throw new Error(`Index must be an integer from 0 to ${TOTAL_COMBINATIONS - 1}.`);
  }

  const result: number[] = [];
  let remainingRank = index;
  let previous = 0;

  for (let position = 0; position < PICK_COUNT; position += 1) {
    for (let candidate = previous + 1; candidate <= MAX_NUMBER; candidate += 1) {
      const count = choose(MAX_NUMBER - candidate, PICK_COUNT - position - 1);
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

export function randomCombination(): number[] {
  const pool = Array.from({ length: MAX_NUMBER }, (_, index) => index + 1);
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return normalizeCombination(pool.slice(0, PICK_COUNT));
}
