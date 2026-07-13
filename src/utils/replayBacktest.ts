import type { ImportedCombination } from "../types";
import type { LotteryProductConfig } from "../config/products";
import { calculatedPick } from "./calculatedPick";
import { combinationToIndex, normalizeCombination, randomCombination } from "./combinations";

export type ReplayStrategyName =
  | "Random"
  | "Frequency Weighted"
  | "Hot Numbers"
  | "Cold Numbers"
  | "Delay"
  | "Pair Frequency"
  | "Triple Frequency"
  | "Your Algorithm";

export type ReplayStrategyResult = {
  name: ReplayStrategyName;
  distribution: number[];
  totalMatches: number;
  exactHits: number;
  bestMatch: number;
  totalRevenue: number;
  bestPrediction: {
    index: number;
    numbers: number[];
    actual: number[];
    drawIndex: number;
  } | null;
};

export type ReplayProgress = {
  drawIndex: number;
  totalDraws: number;
  results: ReplayStrategyResult[];
};

export type StatisticalTestResult = {
  randomRuns: number;
  testedDraws: number;
  your: {
    avgMatches: number;
    hits3Plus: number;
    roi: number;
    distribution: number[];
  };
  random: {
    avgMatchesMean: number;
    avgMatchesStd: number;
    hits3PlusMean: number;
    hits3PlusStd: number;
    roiMean: number;
    roiStd: number;
  };
  avgMatchesZScore: number;
  avgMatchesPercentile: number;
  avgMatchesPValue: number;
  hits3PlusPercentile: number;
  hits3PlusPValue: number;
  roiPercentile: number;
  roiPValue: number;
};

type HistoryStats = {
  numberFrequency: number[];
  lastSeen: number[];
  pairFrequency: Map<string, number>;
  tripleFrequency: Map<string, number>;
};

export const REPLAY_STRATEGIES: ReplayStrategyName[] = [
  "Random",
  "Frequency Weighted",
  "Hot Numbers",
  "Cold Numbers",
  "Delay",
  "Pair Frequency",
  "Triple Frequency",
  "Your Algorithm",
];

function key2(a: number, b: number) {
  return a < b ? `${a}:${b}` : `${b}:${a}`;
}

function key3(a: number, b: number, c: number) {
  return [a, b, c].sort((x, y) => x - y).join(":");
}

function emptyResult(name: ReplayStrategyName, config: LotteryProductConfig): ReplayStrategyResult {
  return {
    name,
    distribution: Array.from({ length: config.pickCount + 1 }, () => 0),
    totalMatches: 0,
    exactHits: 0,
    bestMatch: -1,
    totalRevenue: 0,
    bestPrediction: null,
  };
}

function buildStats(history: ImportedCombination[], config: LotteryProductConfig): HistoryStats {
  const numberFrequency = Array.from({ length: config.maxNumber + 1 }, () => 0);
  const lastSeen = Array.from({ length: config.maxNumber + 1 }, () => -1);
  const pairFrequency = new Map<string, number>();
  const tripleFrequency = new Map<string, number>();

  history.forEach((draw, drawIndex) => {
    for (const number of draw.numbers) {
      numberFrequency[number] += 1;
      lastSeen[number] = drawIndex;
    }

    for (let i = 0; i < draw.numbers.length; i += 1) {
      for (let j = i + 1; j < draw.numbers.length; j += 1) {
        const pair = key2(draw.numbers[i], draw.numbers[j]);
        pairFrequency.set(pair, (pairFrequency.get(pair) ?? 0) + 1);

        for (let k = j + 1; k < draw.numbers.length; k += 1) {
          const triple = key3(draw.numbers[i], draw.numbers[j], draw.numbers[k]);
          tripleFrequency.set(triple, (tripleFrequency.get(triple) ?? 0) + 1);
        }
      }
    }
  });

  return { numberFrequency, lastSeen, pairFrequency, tripleFrequency };
}

function pickByScore(config: LotteryProductConfig, score: (number: number, selected: number[]) => number): number[] {
  const selected: number[] = [];
  const available = Array.from({ length: config.maxNumber }, (_, index) => index + 1);

  while (selected.length < config.pickCount) {
    let bestNumber = available[0];
    let bestScore = Number.NEGATIVE_INFINITY;
    for (const number of available) {
      const candidateScore = score(number, selected) + Math.random() * 0.000001;
      if (candidateScore > bestScore) {
        bestScore = candidateScore;
        bestNumber = number;
      }
    }
    selected.push(bestNumber);
    available.splice(available.indexOf(bestNumber), 1);
  }

  return normalizeCombination(selected);
}

function weightedFrequencyPick(stats: HistoryStats, config: LotteryProductConfig): number[] {
  const selected: number[] = [];
  const available = Array.from({ length: config.maxNumber }, (_, index) => index + 1);

  while (selected.length < config.pickCount) {
    const totalWeight = available.reduce((sum, number) => sum + stats.numberFrequency[number] + 1, 0);
    let ticket = Math.random() * totalWeight;
    let chosen = available[0];
    for (const number of available) {
      ticket -= stats.numberFrequency[number] + 1;
      if (ticket <= 0) {
        chosen = number;
        break;
      }
    }
    selected.push(chosen);
    available.splice(available.indexOf(chosen), 1);
  }

  return normalizeCombination(selected);
}

function pickForStrategy(
  name: ReplayStrategyName,
  history: ImportedCombination[],
  historyIndexes: Set<number>,
  config: LotteryProductConfig,
): number[] {
  if (history.length === 0 || name === "Random") return randomCombination(config);

  const stats = buildStats(history, config);

  if (name === "Frequency Weighted") return weightedFrequencyPick(stats, config);

  if (name === "Hot Numbers") {
    return pickByScore(config, (number) => stats.numberFrequency[number]);
  }

  if (name === "Cold Numbers") {
    const maxFrequency = Math.max(...stats.numberFrequency);
    return pickByScore(config, (number) => maxFrequency - stats.numberFrequency[number]);
  }

  if (name === "Delay") {
    return pickByScore(config, (number) => (stats.lastSeen[number] === -1 ? history.length + 1 : history.length - stats.lastSeen[number]));
  }

  if (name === "Pair Frequency") {
    return pickByScore(config, (number, selected) => {
      if (selected.length === 0) return stats.numberFrequency[number] + 1;
      const pairScore = selected.reduce((sum, picked) => sum + (stats.pairFrequency.get(key2(number, picked)) ?? 0), 0);
      return pairScore / selected.length + 0.05 * stats.numberFrequency[number];
    });
  }

  if (name === "Triple Frequency") {
    return pickByScore(config, (number, selected) => {
      let tripleScore = 0;
      let tripleCount = 0;
      for (let i = 0; i < selected.length; i += 1) {
        for (let j = i + 1; j < selected.length; j += 1) {
          tripleScore += stats.tripleFrequency.get(key3(number, selected[i], selected[j])) ?? 0;
          tripleCount += 1;
        }
      }
      const pairScore = selected.reduce((sum, picked) => sum + (stats.pairFrequency.get(key2(number, picked)) ?? 0), 0);
      return (tripleCount > 0 ? tripleScore / tripleCount : 0) + 0.25 * pairScore + 0.03 * stats.numberFrequency[number];
    });
  }

  return calculatedPick(historyIndexes, config, 5_000).numbers;
}

function mean(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function sampleStd(values: number[], valueMean = mean(values)) {
  if (values.length < 2) return 0;
  const variance = values.reduce((sum, value) => sum + (value - valueMean) ** 2, 0) / (values.length - 1);
  return Math.sqrt(variance);
}

function percentileRank(values: number[], observed: number) {
  return (values.filter((value) => value <= observed).length / values.length) * 100;
}

function oneSidedPValue(values: number[], observed: number) {
  return (values.filter((value) => value >= observed).length + 1) / (values.length + 1);
}

function evaluatePick(picked: number[], actual: number[], config: LotteryProductConfig) {
  const matches = picked.filter((number) => actual.includes(number)).length;
  return {
    matches,
    revenue: config.prizeByMatch[matches] ?? 0,
  };
}

export async function runReplayBacktest(
  history: ImportedCombination[],
  config: LotteryProductConfig,
  onProgress?: (progress: ReplayProgress) => void,
): Promise<ReplayStrategyResult[]> {
  const results = new Map<ReplayStrategyName, ReplayStrategyResult>(
    REPLAY_STRATEGIES.map((name) => [name, emptyResult(name, config)]),
  );
  const trainingHistory: ImportedCombination[] = [history[0]];
  const trainingIndexes = new Set<number>([history[0].index]);

  for (let drawIndex = 1; drawIndex < history.length; drawIndex += 1) {
    const actual = history[drawIndex];

    for (const strategyName of REPLAY_STRATEGIES) {
      const picked = pickForStrategy(strategyName, trainingHistory, trainingIndexes, config);
      const pickedIndex = combinationToIndex(picked, config);
      const matches = picked.filter((number) => actual.numbers.includes(number)).length;
      const result = results.get(strategyName)!;

      result.distribution[matches] += 1;
      result.totalMatches += matches;
      result.totalRevenue += config.prizeByMatch[matches] ?? 0;
      if (matches === config.pickCount) result.exactHits += 1;
      if (matches > result.bestMatch) {
        result.bestMatch = matches;
        result.bestPrediction = {
          index: pickedIndex,
          numbers: picked,
          actual: actual.numbers,
          drawIndex,
        };
      }
    }

    trainingHistory.push(actual);
    trainingIndexes.add(actual.index);

    if (drawIndex % 25 === 0) {
      onProgress?.({ drawIndex, totalDraws: history.length - 1, results: [...results.values()] });
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  return [...results.values()];
}

export function summarizeReplayResult(result: ReplayStrategyResult, testedDraws: number) {
  const totalCost = testedDraws * 10_000;
  const profit = result.totalRevenue - totalCost;
  return {
    avgMatches: result.totalMatches / testedDraws,
    hits3: result.distribution[3],
    hits4: result.distribution[4],
    hits5: result.distribution[5],
    hits6: result.distribution[6],
    roi: totalCost > 0 ? (profit / totalCost) * 100 : 0,
  };
}

export async function runRandomStatisticalTest(
  history: ImportedCombination[],
  config: LotteryProductConfig,
  randomRuns = 500,
  onProgress?: (drawIndex: number, totalDraws: number) => void,
): Promise<StatisticalTestResult> {
  const testedDraws = history.length - 1;
  const totalCost = testedDraws * 10_000;
  const trainingHistory: ImportedCombination[] = [history[0]];
  const trainingIndexes = new Set<number>([history[0].index]);
  const yourDistribution = Array.from({ length: config.pickCount + 1 }, () => 0);
  const randomTotalMatches = Array.from({ length: randomRuns }, () => 0);
  const randomHits3Plus = Array.from({ length: randomRuns }, () => 0);
  const randomRevenue = Array.from({ length: randomRuns }, () => 0);
  let yourTotalMatches = 0;
  let yourHits3Plus = 0;
  let yourRevenue = 0;

  for (let drawIndex = 1; drawIndex < history.length; drawIndex += 1) {
    const actual = history[drawIndex];
    const yourPick = pickForStrategy("Your Algorithm", trainingHistory, trainingIndexes, config);
    const yourEval = evaluatePick(yourPick, actual.numbers, config);
    yourDistribution[yourEval.matches] += 1;
    yourTotalMatches += yourEval.matches;
    yourRevenue += yourEval.revenue;
    if (yourEval.matches >= 3) yourHits3Plus += 1;

    for (let run = 0; run < randomRuns; run += 1) {
      const randomEval = evaluatePick(randomCombination(config), actual.numbers, config);
      randomTotalMatches[run] += randomEval.matches;
      randomRevenue[run] += randomEval.revenue;
      if (randomEval.matches >= 3) randomHits3Plus[run] += 1;
    }

    trainingHistory.push(actual);
    trainingIndexes.add(actual.index);

    if (drawIndex % 25 === 0) {
      onProgress?.(drawIndex, testedDraws);
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  const randomAvgMatches = randomTotalMatches.map((total) => total / testedDraws);
  const randomRoi = randomRevenue.map((revenue) => ((revenue - totalCost) / totalCost) * 100);
  const yourAvgMatches = yourTotalMatches / testedDraws;
  const yourRoi = ((yourRevenue - totalCost) / totalCost) * 100;
  const randomAvgMean = mean(randomAvgMatches);
  const randomAvgStd = sampleStd(randomAvgMatches, randomAvgMean);
  const randomHitsMean = mean(randomHits3Plus);
  const randomHitsStd = sampleStd(randomHits3Plus, randomHitsMean);
  const randomRoiMean = mean(randomRoi);
  const randomRoiStd = sampleStd(randomRoi, randomRoiMean);

  return {
    randomRuns,
    testedDraws,
    your: {
      avgMatches: yourAvgMatches,
      hits3Plus: yourHits3Plus,
      roi: yourRoi,
      distribution: yourDistribution,
    },
    random: {
      avgMatchesMean: randomAvgMean,
      avgMatchesStd: randomAvgStd,
      hits3PlusMean: randomHitsMean,
      hits3PlusStd: randomHitsStd,
      roiMean: randomRoiMean,
      roiStd: randomRoiStd,
    },
    avgMatchesZScore: randomAvgStd > 0 ? (yourAvgMatches - randomAvgMean) / randomAvgStd : 0,
    avgMatchesPercentile: percentileRank(randomAvgMatches, yourAvgMatches),
    avgMatchesPValue: oneSidedPValue(randomAvgMatches, yourAvgMatches),
    hits3PlusPercentile: percentileRank(randomHits3Plus, yourHits3Plus),
    hits3PlusPValue: oneSidedPValue(randomHits3Plus, yourHits3Plus),
    roiPercentile: percentileRank(randomRoi, yourRoi),
    roiPValue: oneSidedPValue(randomRoi, yourRoi),
  };
}
