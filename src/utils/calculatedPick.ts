import type { LotteryProductConfig } from "../config/products";
import { combinationToIndex, indexToCombination, randomCombination } from "./combinations";

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

type ScoringProfile = {
  coldNumberWeight: number;
  hotNumberWeight: number;
  lowPairWeight: number;
  hotPairWeight: number;
  spreadWeight: number;
  balanceWeight: number;
  repeatNumberPenaltyWeight: number;
  clusterPenaltyWeight: number;
};

const DEFAULT_DIVERSITY_PENALTY_WEIGHT = 0.18;

function getDefaultCandidateCount(config: LotteryProductConfig) {
  if (config.id === "power535") return 40_000;
  if (config.id === "power645") return 20_000;
  return 12_345;
}

function getScoringProfile(config: LotteryProductConfig): ScoringProfile {
  if (config.id === "power535") {
    return {
      coldNumberWeight: 0.24,
      hotNumberWeight: 0.16,
      lowPairWeight: 0.22,
      hotPairWeight: 0.12,
      spreadWeight: 0.12,
      balanceWeight: 0.1,
      repeatNumberPenaltyWeight: 0.08,
      clusterPenaltyWeight: 0.08,
    };
  }

  if (config.id === "power645") {
    return {
      coldNumberWeight: 0.36,
      hotNumberWeight: 0.08,
      lowPairWeight: 0.28,
      hotPairWeight: 0.1,
      spreadWeight: 0.1,
      balanceWeight: 0.08,
      repeatNumberPenaltyWeight: 0.06,
      clusterPenaltyWeight: 0.06,
    };
  }

  return {
    coldNumberWeight: 0.48,
    hotNumberWeight: 0.04,
    lowPairWeight: 0.3,
    hotPairWeight: 0.06,
    spreadWeight: 0.08,
    balanceWeight: 0.04,
    repeatNumberPenaltyWeight: 0.04,
    clusterPenaltyWeight: 0.05,
  };
}

function pairKey(a: number, b: number) {
  return `${a}:${b}`;
}

function buildHistoryStats(importedIndexes: Set<number>, config: LotteryProductConfig): HistoryStats {
  const numberFrequency = Array.from({ length: config.maxNumber + 1 }, () => 0);
  const pairFrequency = new Map<string, number>();

  for (const index of importedIndexes) {
    const numbers = indexToCombination(index, config);
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

function scoreCombination(numbers: number[], stats: HistoryStats, config: LotteryProductConfig) {
  let numberFrequencyTotal = 0;
  let maxCandidateNumberFrequency = 0;
  for (const number of numbers) {
    numberFrequencyTotal += stats.numberFrequency[number];
    maxCandidateNumberFrequency = Math.max(maxCandidateNumberFrequency, stats.numberFrequency[number]);
  }

  let pairFrequencyTotal = 0;
  let maxCandidatePairFrequency = 0;
  let pairCount = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      const pairFrequency = stats.pairFrequency.get(pairKey(numbers[i], numbers[j])) ?? 0;
      pairFrequencyTotal += pairFrequency;
      maxCandidatePairFrequency = Math.max(maxCandidatePairFrequency, pairFrequency);
      pairCount += 1;
    }
  }

  const profile = getScoringProfile(config);
  const averageNumberFrequency = numberFrequencyTotal / config.pickCount;
  const averagePairFrequency = pairFrequencyTotal / pairCount;
  const coldNumberScore = 1 - averageNumberFrequency / stats.maxNumberFrequency;
  const hotNumberScore = averageNumberFrequency / stats.maxNumberFrequency;
  const lowPairScore = 1 - averagePairFrequency / stats.maxPairFrequency;
  const hotPairScore = averagePairFrequency / stats.maxPairFrequency;
  const spreadScore = (numbers[numbers.length - 1] - numbers[0]) / (config.maxNumber - 1);
  const oddCount = numbers.filter((number) => number % 2 === 1).length;
  const idealOddCount = config.pickCount / 2;
  const balanceScore = 1 - Math.abs(oddCount - idealOddCount) / idealOddCount;
  const repeatNumberPenalty = maxCandidateNumberFrequency / stats.maxNumberFrequency;
  const clusterPenalty = maxCandidatePairFrequency / stats.maxPairFrequency;

  return {
    score:
      coldNumberScore * profile.coldNumberWeight +
      hotNumberScore * profile.hotNumberWeight +
      lowPairScore * profile.lowPairWeight +
      hotPairScore * profile.hotPairWeight +
      spreadScore * profile.spreadWeight +
      balanceScore * profile.balanceWeight -
      repeatNumberPenalty * profile.repeatNumberPenaltyWeight -
      clusterPenalty * profile.clusterPenaltyWeight +
      Math.random() * 0.0001,
    averageNumberFrequency,
    averagePairFrequency,
  };
}

function calculateDiversityPenalty(numbers: number[], memory: number[][], weight: number, config: LotteryProductConfig) {
  if (memory.length === 0 || weight <= 0) return 0;
  const candidate = new Set(numbers);
  const maxOverlap = Math.max(
    ...memory.map((previousPick) => previousPick.filter((number) => candidate.has(number)).length),
  );
  return (maxOverlap / config.pickCount) * weight;
}

export function calculatedPick(
  importedIndexes: Set<number>,
  config: LotteryProductConfig,
  candidateCount?: number,
  options: CalculatedPickOptions = {},
): CalculatedPickResult {
  const effectiveCandidateCount = candidateCount ?? getDefaultCandidateCount(config);

  if (importedIndexes.size === 0) {
    const numbers = randomCombination(config);
    return {
      numbers,
      index: combinationToIndex(numbers, config),
      score: 0,
      baseScore: 0,
      diversityPenalty: 0,
      candidateCount: 1,
      averageNumberFrequency: 0,
      averagePairFrequency: 0,
    };
  }

  const stats = buildHistoryStats(importedIndexes, config);
  const diversityMemory = options.diversityMemory ?? [];
  const diversityPenaltyWeight = options.diversityPenaltyWeight ?? DEFAULT_DIVERSITY_PENALTY_WEIGHT;
  let bestNumbers = randomCombination(config);
  let bestIndex = combinationToIndex(bestNumbers, config);
  let bestScore = Number.NEGATIVE_INFINITY;
  let bestBaseScore = Number.NEGATIVE_INFINITY;
  let bestDiversityPenalty = 0;
  let bestAverageNumberFrequency = 0;
  let bestAveragePairFrequency = 0;
  const seenCandidates = new Set<number>();

  for (let i = 0; i < effectiveCandidateCount; i += 1) {
    const numbers = randomCombination(config);
    const index = combinationToIndex(numbers, config);
    if (seenCandidates.has(index) || importedIndexes.has(index)) continue;
    seenCandidates.add(index);

    const result = scoreCombination(numbers, stats, config);
    const diversityPenalty = calculateDiversityPenalty(numbers, diversityMemory, diversityPenaltyWeight, config);
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
