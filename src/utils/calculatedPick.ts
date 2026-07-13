import { combinationToIndex, indexToCombination, MAX_NUMBER, PICK_COUNT, randomCombination } from "./combinations";

export type CalculatedPickResult = {
  numbers: number[];
  index: number;
  score: number;
  baseScore: number;
  diversityPenalty: number;
  candidateCount: number;
  averageNumberFrequency: number;
  averagePairFrequency: number;
};

export type CalculatedPickOptions = {
  diversityMemory?: number[][];
  diversityPenaltyWeight?: number;
};

type HistoryStats = {
  numberFrequency: number[];
  pairFrequency: Map<string, number>;
  maxNumberFrequency: number;
  maxPairFrequency: number;
};

const DEFAULT_CANDIDATE_COUNT = 12_345;
const DEFAULT_DIVERSITY_PENALTY_WEIGHT = 0.18;

function pairKey(a: number, b: number) {
  return `${a}:${b}`;
}

function buildHistoryStats(importedIndexes: Set<number>): HistoryStats {
  const numberFrequency = Array.from({ length: MAX_NUMBER + 1 }, () => 0);
  const pairFrequency = new Map<string, number>();

  for (const index of importedIndexes) {
    const numbers = indexToCombination(index);
    for (const number of numbers) {
      numberFrequency[number] += 1;
    }
    for (let i = 0; i < numbers.length; i += 1) {
      for (let j = i + 1; j < numbers.length; j += 1) {
        const key = pairKey(numbers[i], numbers[j]);
        pairFrequency.set(key, (pairFrequency.get(key) ?? 0) + 1);
      }
    }
  }

  return {
    numberFrequency,
    pairFrequency,
    maxNumberFrequency: Math.max(1, ...numberFrequency),
    maxPairFrequency: Math.max(1, ...pairFrequency.values()),
  };
}

function scoreCombination(numbers: number[], stats: HistoryStats) {
  let numberFrequencyTotal = 0;
  for (const number of numbers) {
    numberFrequencyTotal += stats.numberFrequency[number];
  }

  let pairFrequencyTotal = 0;
  let pairCount = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      pairFrequencyTotal += stats.pairFrequency.get(pairKey(numbers[i], numbers[j])) ?? 0;
      pairCount += 1;
    }
  }

  const averageNumberFrequency = numberFrequencyTotal / PICK_COUNT;
  const averagePairFrequency = pairFrequencyTotal / pairCount;
  const coldNumberScore = 1 - averageNumberFrequency / stats.maxNumberFrequency;
  const lowPairScore = 1 - averagePairFrequency / stats.maxPairFrequency;
  const spreadScore = (numbers[numbers.length - 1] - numbers[0]) / (MAX_NUMBER - 1);

  return {
    score: coldNumberScore * 0.58 + lowPairScore * 0.34 + spreadScore * 0.08 + Math.random() * 0.0001,
    averageNumberFrequency,
    averagePairFrequency,
  };
}

function calculateDiversityPenalty(numbers: number[], memory: number[][], weight: number) {
  if (memory.length === 0 || weight <= 0) return 0;
  const candidate = new Set(numbers);
  const maxOverlap = Math.max(
    ...memory.map((previousPick) => previousPick.filter((number) => candidate.has(number)).length),
  );
  return (maxOverlap / PICK_COUNT) * weight;
}

export function calculatedPick(
  importedIndexes: Set<number>,
  candidateCount = DEFAULT_CANDIDATE_COUNT,
  options: CalculatedPickOptions = {},
): CalculatedPickResult {
  if (importedIndexes.size === 0) {
    const numbers = randomCombination();
    return {
      numbers,
      index: combinationToIndex(numbers),
      score: 0,
      baseScore: 0,
      diversityPenalty: 0,
      candidateCount: 1,
      averageNumberFrequency: 0,
      averagePairFrequency: 0,
    };
  }

  const stats = buildHistoryStats(importedIndexes);
  const diversityMemory = options.diversityMemory ?? [];
  const diversityPenaltyWeight = options.diversityPenaltyWeight ?? DEFAULT_DIVERSITY_PENALTY_WEIGHT;
  let bestNumbers = randomCombination();
  let bestIndex = combinationToIndex(bestNumbers);
  let bestScore = Number.NEGATIVE_INFINITY;
  let bestBaseScore = Number.NEGATIVE_INFINITY;
  let bestDiversityPenalty = 0;
  let bestAverageNumberFrequency = 0;
  let bestAveragePairFrequency = 0;
  const seenCandidates = new Set<number>();

  for (let i = 0; i < candidateCount; i += 1) {
    const numbers = randomCombination();
    const index = combinationToIndex(numbers);
    if (seenCandidates.has(index) || importedIndexes.has(index)) continue;
    seenCandidates.add(index);

    const result = scoreCombination(numbers, stats);
    const diversityPenalty = calculateDiversityPenalty(numbers, diversityMemory, diversityPenaltyWeight);
    const finalScore = result.score - diversityPenalty;
    if (finalScore > bestScore) {
      bestNumbers = numbers;
      bestIndex = index;
      bestScore = finalScore;
      bestBaseScore = result.score;
      bestDiversityPenalty = diversityPenalty;
      bestAverageNumberFrequency = result.averageNumberFrequency;
      bestAveragePairFrequency = result.averagePairFrequency;
    }
  }

  return {
    numbers: bestNumbers,
    index: bestIndex,
    score: bestScore,
    baseScore: bestBaseScore,
    diversityPenalty: bestDiversityPenalty,
    candidateCount: seenCandidates.size,
    averageNumberFrequency: bestAverageNumberFrequency,
    averagePairFrequency: bestAveragePairFrequency,
  };
}
