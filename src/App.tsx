import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { CombinationGrid } from "./components/CombinationGrid";
import { ImportPanel } from "./components/ImportPanel";
import { LoginPage } from "./components/LoginPage";
import { LogPanel } from "./components/LogPanel";
import { ProductSelector } from "./components/ProductSelector";
import { SearchBox } from "./components/SearchBox";
import { StatsPanel } from "./components/StatsPanel";
import { Toolbar } from "./components/Toolbar";
import { DEFAULT_PRODUCT_ID, PRODUCT_CONFIGS, type LotteryProductId } from "./config/products";
import type { GridMode, ImportedCombination, LogEntry, SelectedCombination } from "./types";
import {
  combinationToIndex,
  formatCombination,
  indexToCombination,
  normalizeCombination,
  parseCombinationInput,
  randomCombination,
  validateCombination,
} from "./utils/combinations";
import { calculatedPick } from "./utils/calculatedPick";
import { parseImportedText } from "./utils/importers";
import { runRandomStatisticalTest, runReplayBacktest, summarizeReplayResult } from "./utils/replayBacktest";
import power535Data from "../data/power535.jsonl?raw";
import power645Data from "../data/power645.jsonl?raw";
import power655Data from "../data/power655.jsonl?raw";

const LOG_SERVER_URL = "http://127.0.0.1:8787/logs";
const RANDOM_STAT_TEST_RUNS = 500;
const CALCULATED_PICK_MEMORY_SIZE = 12;

const PRODUCT_DATA: Record<LotteryProductId, string> = {
  power655: power655Data,
  power645: power645Data,
  power535: power535Data,
};

let logId = 0;

function nowLabel() {
  return new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function downloadCsv(fileName: string, rows: string[]) {
  const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

function persistLog(entry: LogEntry & { user: string }) {
  fetch(LOG_SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  }).catch(() => {
    console.debug("Log server is not running; skipped file history write.");
  });
}

function App() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(() => localStorage.getItem("power655_user"));
  const [currentProductId, setCurrentProductId] = useState<LotteryProductId>(DEFAULT_PRODUCT_ID);
  const [importedIndexes, setImportedIndexes] = useState<Set<number>>(() => new Set());
  const [importedHistory, setImportedHistory] = useState<ImportedCombination[]>([]);
  const [selected, setSelected] = useState<Map<number, SelectedCombination>>(() => new Map());
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [mode, setMode] = useState<GridMode>("grid");
  const [zoom, setZoom] = useState(1.4);
  const [randomIndex, setRandomIndex] = useState<number | null>(null);
  const [focusRequest, setFocusRequest] = useState<{ index: number; id: number } | null>(null);
  const [isBacktesting, setIsBacktesting] = useState(false);
  const [isStatTesting, setIsStatTesting] = useState(false);
  const [recentCalculatedPicks, setRecentCalculatedPicks] = useState<number[][]>([]);

  const currentProduct = PRODUCT_CONFIGS[currentProductId];
  const selectedIndexes = useMemo(() => new Set(selected.keys()), [selected]);

  function addLog(level: LogEntry["level"], message: string) {
    const entry = { id: ++logId, at: nowLabel(), level, message };
    setLogs((current) => [entry, ...current].slice(0, 120));
    persistLog({ ...entry, user: currentUser ?? "anonymous" });
  }

  function handleLogin(username: string) {
    localStorage.setItem("power655_user", username);
    setCurrentUser(username);
  }

  function handleLogout() {
    localStorage.removeItem("power655_user");
    setCurrentUser(null);
  }

  useEffect(() => {
    try {
      const result = parseImportedText(PRODUCT_DATA[currentProductId], currentProduct.dataFileName, currentProduct);
      setImportedIndexes(new Set(result.combinations.map((item) => item.index)));
      setImportedHistory(result.combinations);
      setSelected(new Map());
      setRandomIndex(null);
      setRecentCalculatedPicks([]);
      setFocusRequest({ index: 0, id: Date.now() + Math.random() });
      addLog("success", `Auto-loaded data/${currentProduct.dataFileName} for ${currentProduct.label}: ${result.combinations.length.toLocaleString("en-US")} bộ hợp lệ.`);
      if (result.errors.length > 0) {
        result.errors.slice(0, 8).forEach((error) => addLog("warn", error));
        if (result.errors.length > 8) addLog("warn", `Auto-load còn ${result.errors.length - 8} lỗi khác đã rút gọn.`);
      }
    } catch (error) {
      addLog("error", `Auto-load data/${currentProduct.dataFileName} thất bại: ${error instanceof Error ? error.message : "không đọc được dữ liệu"}.`);
    }
  }, [currentProduct, currentProductId]);

  function focusCell(index: number, nextZoom = Math.max(zoom, 3.2)) {
    setZoom(Math.min(10, Math.max(0.55, nextZoom)));
    setFocusRequest({ index, id: Date.now() + Math.random() });
  }

  function handleImportClick() {
    fileInputRef.current?.click();
  }

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      const text = await file.text();
      const result = parseImportedText(text, file.name, currentProduct);
      setImportedIndexes((current) => {
        const next = new Set(current);
        result.combinations.forEach((item) => next.add(item.index));
        return next;
      });
      setImportedHistory((current) => {
        const known = new Set(current.map((item) => item.index));
        const additions = result.combinations.filter((item) => !known.has(item.index));
        return [...current, ...additions];
      });

      addLog("success", `Import file "${file.name}" thành công: ${result.combinations.length.toLocaleString("en-US")} bộ hợp lệ.`);
      if (result.errors.length > 0) {
        result.errors.slice(0, 12).forEach((error) => addLog("warn", error));
        if (result.errors.length > 12) addLog("warn", `Còn ${result.errors.length - 12} lỗi khác đã bị rút gọn.`);
      }
    } catch (error) {
      addLog("error", `Lỗi định dạng file: ${error instanceof Error ? error.message : "không đọc được file"}.`);
    }
  }

  function handleSelect(index: number) {
    const numbers = indexToCombination(index, currentProduct);
    setSelected((current) => {
      const next = new Map(current);
      if (next.has(index)) {
        next.delete(index);
        addLog("info", `Bỏ chọn #${index.toLocaleString("en-US")} - ${formatCombination(numbers)}.`);
      } else {
        next.set(index, { index, numbers, selectedAt: new Date().toISOString() });
        addLog("info", `Click chọn #${index.toLocaleString("en-US")} - ${formatCombination(numbers)}.`);
      }
      return next;
    });
  }

  function handleSearch(value: string) {
    const numbers = normalizeCombination(parseCombinationInput(value));
    if (!validateCombination(numbers, currentProduct)) {
      addLog("error", `Search lỗi: "${value}" không phải bộ ${currentProduct.pickCount} số hợp lệ cho ${currentProduct.label}.`);
      return;
    }
    const index = combinationToIndex(numbers, currentProduct);
    addLog("info", `Search ${formatCombination(numbers)} tại #${index.toLocaleString("en-US")}.`);
    focusCell(index);
  }

  function handleRandomPick() {
    const numbers = randomCombination(currentProduct);
    const index = combinationToIndex(numbers, currentProduct);
    setRandomIndex(index);
    addLog("success", `Random Pick: ${formatCombination(numbers)} tại #${index.toLocaleString("en-US")}.`);
    focusCell(index, Math.max(zoom, 3.6));
  }

  function handleCalculatedPick() {
    if (importedIndexes.size === 0) {
      addLog("warn", "Calculated Pick cần dữ liệu import; đang dùng random fallback.");
    }

    const result = calculatedPick(importedIndexes, currentProduct, undefined, {
      diversityMemory: recentCalculatedPicks,
    });
    setRandomIndex(result.index);
    setRecentCalculatedPicks((current) => [result.numbers, ...current].slice(0, CALCULATED_PICK_MEMORY_SIZE));
    addLog(
      "success",
      `Calculated Pick: ${formatCombination(result.numbers)} tại #${result.index.toLocaleString("en-US")} | score ${result.score.toFixed(4)} | base ${result.baseScore.toFixed(4)} | diversity penalty ${result.diversityPenalty.toFixed(4)} | avg number freq ${result.averageNumberFrequency.toFixed(2)} | avg pair freq ${result.averagePairFrequency.toFixed(2)} | ${result.candidateCount.toLocaleString("en-US")} candidates.`,
    );
    focusCell(result.index, Math.max(zoom, 3.6));
  }

  async function handleBacktestPick() {
    if (isBacktesting) {
      addLog("warn", "Replay Backtest đang chạy, hãy đợi lượt hiện tại hoàn tất.");
      return;
    }
    if (importedHistory.length < 2) {
      addLog("warn", "Replay Backtest cần ít nhất 2 bộ số lịch sử.");
      return;
    }

    setIsBacktesting(true);
    addLog("info", `Replay Backtest comparison started: ${importedHistory.length.toLocaleString("en-US")} historical draws.`);

    try {
      const results = await runReplayBacktest(importedHistory, currentProduct, ({ drawIndex, totalDraws, results: progressResults }) => {
        if (drawIndex % 100 === 0) {
          const yourProgress = progressResults.find((result) => result.name === "Your Algorithm");
          addLog(
            "info",
            `Replay progress ${drawIndex}/${totalDraws}: Your avg=${yourProgress ? (yourProgress.totalMatches / drawIndex).toFixed(3) : "n/a"}, Random avg=${(progressResults[0].totalMatches / drawIndex).toFixed(3)}.`,
          );
        }
      });

      const testedDraws = importedHistory.length - 1;
      const ranked = [...results].sort((a, b) => summarizeReplayResult(b, testedDraws).avgMatches - summarizeReplayResult(a, testedDraws).avgMatches);
      addLog(
        "success",
        `Replay Backtest done. Tested=${testedDraws.toLocaleString("en-US")} draws. Baseline included. No strategy used actual draw data before picking.`,
      );

      for (const result of ranked) {
        const summary = summarizeReplayResult(result, testedDraws);
        addLog(
          result.name === "Your Algorithm" ? "success" : "info",
          `${result.name}: avg=${summary.avgMatches.toFixed(3)} | 3=${summary.hits3 ?? 0} | 4=${summary.hits4 ?? 0} | 5=${summary.hits5 ?? 0} | exact=${summary.exactHits} | best=${result.bestMatch} | ROI=${summary.roi.toFixed(2)}% | dist [${result.distribution.map((count, matches) => `${matches}:${count}`).join(" ")}].`,
        );
      }

      const yourResult = results.find((result) => result.name === "Your Algorithm");
      const randomResult = results.find((result) => result.name === "Random");
      if (yourResult && randomResult) {
        const yourSummary = summarizeReplayResult(yourResult, testedDraws);
        const randomSummary = summarizeReplayResult(randomResult, testedDraws);
        addLog(
          yourSummary.avgMatches > randomSummary.avgMatches ? "success" : "warn",
          `Your vs Random: avg delta=${(yourSummary.avgMatches - randomSummary.avgMatches).toFixed(3)}, 3+ hits delta=${((yourSummary.hits3 ?? 0) + (yourSummary.hits4 ?? 0) + (yourSummary.hits5 ?? 0) + yourSummary.exactHits) - ((randomSummary.hits3 ?? 0) + (randomSummary.hits4 ?? 0) + (randomSummary.hits5 ?? 0) + randomSummary.exactHits)}.`,
        );
      }

      const bestOverall = ranked[0].bestPrediction;
      if (bestOverall) {
        setRandomIndex(bestOverall.index);
        focusCell(bestOverall.index, Math.max(zoom, 3.6));
        addLog(
          "info",
          `Best replay sample from top strategy ${ranked[0].name} at draw #${bestOverall.drawIndex + 1}: predicted ${formatCombination(bestOverall.numbers)} vs actual ${formatCombination(bestOverall.actual)}.`,
        );
      }
    } catch (error) {
      addLog("error", `Replay Backtest failed: ${error instanceof Error ? error.message : "unknown error"}.`);
    } finally {
      setIsBacktesting(false);
    }
  }

  async function handleStatTest() {
    if (isStatTesting) {
      addLog("warn", "Stat Test đang chạy, hãy đợi lượt hiện tại hoàn tất.");
      return;
    }
    if (importedHistory.length < 2) {
      addLog("warn", "Stat Test cần ít nhất 2 bộ số lịch sử.");
      return;
    }

    setIsStatTesting(true);
    addLog(
      "info",
      `Stat Test started: Your Algorithm vs ${RANDOM_STAT_TEST_RUNS.toLocaleString("en-US")} random replay runs on ${importedHistory.length - 1} draws.`,
    );

    try {
      const result = await runRandomStatisticalTest(importedHistory, currentProduct, RANDOM_STAT_TEST_RUNS, (drawIndex, totalDraws) => {
        if (drawIndex % 100 === 0) {
          addLog("info", `Stat Test progress: ${drawIndex}/${totalDraws} draws.`);
        }
      });

      addLog(
        "success",
        `Stat Test avg matches: Your=${result.your.avgMatches.toFixed(4)}, Random=${result.random.avgMatchesMean.toFixed(4)} ± ${result.random.avgMatchesStd.toFixed(4)}, z=${result.avgMatchesZScore.toFixed(2)}, percentile=${result.avgMatchesPercentile.toFixed(1)}%, p≈${result.avgMatchesPValue.toFixed(4)}.`,
      );
      addLog(
        result.hits3PlusPercentile >= 95 ? "success" : "info",
        `Stat Test 3+ hits: Your=${result.your.hits3Plus}, Random=${result.random.hits3PlusMean.toFixed(2)} ± ${result.random.hits3PlusStd.toFixed(2)}, percentile=${result.hits3PlusPercentile.toFixed(1)}%, p≈${result.hits3PlusPValue.toFixed(4)}.`,
      );
      addLog(
        result.roiPercentile >= 95 ? "success" : "info",
        `Stat Test ROI: Your=${result.your.roi.toFixed(2)}%, Random=${result.random.roiMean.toFixed(2)}% ± ${result.random.roiStd.toFixed(2)}%, percentile=${result.roiPercentile.toFixed(1)}%, p≈${result.roiPValue.toFixed(4)}.`,
      );
      addLog("info", `Stat Test Your distribution: [${result.your.distribution.map((count, matches) => `${matches}:${count}`).join(" ")}].`);
    } catch (error) {
      addLog("error", `Stat Test failed: ${error instanceof Error ? error.message : "unknown error"}.`);
    } finally {
      setIsStatTesting(false);
    }
  }

  function handleExportSelected() {
    if (selected.size === 0) {
      addLog("warn", "Export Selected Cells: chưa có ô nào được chọn.");
      return;
    }

    const rows = ["index,n1,n2,n3,n4,n5,n6,selected_at"];
    [...selected.values()]
      .sort((a, b) => a.index - b.index)
      .forEach((item) => rows.push([item.index, ...item.numbers, item.selectedAt].join(",")));
    downloadCsv("selected-power655-combinations.csv", rows);
    addLog("success", `Export Selected Cells: ${selected.size.toLocaleString("en-US")} dòng CSV.`);
  }

  function resetView() {
    setZoom(1.4);
    setFocusRequest({ index: 0, id: Date.now() + Math.random() });
    addLog("info", "Reset View về đầu không gian tổ hợp.");
  }

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Vietlott {currentProduct.label}</p>
          <h1>Combination Space Dashboard</h1>
        </div>
        <div className="header-actions">
          <ProductSelector value={currentProductId} onChange={setCurrentProductId} />
          <SearchBox onSearch={handleSearch} />
          <button onClick={handleLogout} title="Logout">
            Logout
          </button>
        </div>
      </header>

      <Toolbar
        mode={mode}
        zoom={zoom}
        onImportClick={handleImportClick}
        onClearImported={() => {
          setImportedIndexes(new Set());
          setImportedHistory([]);
          setRecentCalculatedPicks([]);
          addLog("info", "Clear Imported Data hoàn tất.");
        }}
        onClearSelected={() => {
          setSelected(new Map());
          addLog("info", "Clear Selected Cells hoàn tất.");
        }}
        onExportSelected={handleExportSelected}
        onRandomPick={handleRandomPick}
        onCalculatedPick={handleCalculatedPick}
        onBacktestPick={handleBacktestPick}
        onStatTest={handleStatTest}
        onResetView={resetView}
        onToggleMode={() => {
          setMode((current) => (current === "grid" ? "heatmap" : "grid"));
          addLog("info", `Toggle Grid / Heatmap Mode.`);
        }}
        onZoomIn={() => setZoom((current) => Math.min(10, Number((current * 1.22).toFixed(2))))}
        onZoomOut={() => setZoom((current) => Math.max(0.55, Number((current / 1.22).toFixed(2))))}
      />

      <div className="workspace">
        <section className="grid-section">
          <CombinationGrid
            product={currentProduct}
            importedIndexes={importedIndexes}
            selectedIndexes={selectedIndexes}
            randomIndex={randomIndex}
            focusRequest={focusRequest}
            mode={mode}
            zoom={zoom}
            onZoomChange={setZoom}
            onSelect={handleSelect}
          />
        </section>

        <aside className="side-panel">
          <StatsPanel product={currentProduct} importedCount={importedIndexes.size} selectedCount={selected.size} />
          <LogPanel entries={logs} />
        </aside>
      </div>

      <ImportPanel inputRef={fileInputRef} onFileChange={handleFileChange} />
    </main>
  );
}

export default App;
