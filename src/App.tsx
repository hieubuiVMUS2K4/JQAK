import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { CombinationGrid } from "./components/CombinationGrid";
import { ImportPanel } from "./components/ImportPanel";
import { LoginPage } from "./components/LoginPage";
import { LogPanel } from "./components/LogPanel";
import { SearchBox } from "./components/SearchBox";
import { StatsPanel } from "./components/StatsPanel";
import { Toolbar } from "./components/Toolbar";
import type { GridMode, LogEntry, SelectedCombination } from "./types";
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
import defaultPower655Data from "../data/power655.jsonl?raw";

const LOG_SERVER_URL = "http://127.0.0.1:8787/logs";

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
  const [importedIndexes, setImportedIndexes] = useState<Set<number>>(() => new Set());
  const [selected, setSelected] = useState<Map<number, SelectedCombination>>(() => new Map());
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [mode, setMode] = useState<GridMode>("grid");
  const [zoom, setZoom] = useState(1.4);
  const [randomIndex, setRandomIndex] = useState<number | null>(null);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);

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
      const result = parseImportedText(defaultPower655Data, "power655.jsonl");
      setImportedIndexes(new Set(result.combinations.map((item) => item.index)));
      addLog("success", `Auto-loaded data/power655.jsonl: ${result.combinations.length.toLocaleString("en-US")} bộ hợp lệ.`);
      if (result.errors.length > 0) {
        result.errors.slice(0, 8).forEach((error) => addLog("warn", error));
        if (result.errors.length > 8) addLog("warn", `Auto-load còn ${result.errors.length - 8} lỗi khác đã rút gọn.`);
      }
    } catch (error) {
      addLog("error", `Auto-load data/power655.jsonl thất bại: ${error instanceof Error ? error.message : "không đọc được dữ liệu"}.`);
    }
  }, []);

  function focusCell(index: number, nextZoom = Math.max(zoom, 3.2)) {
    setZoom(Math.min(8, Math.max(0.8, nextZoom)));
    setFocusIndex(null);
    requestAnimationFrame(() => setFocusIndex(index));
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
      const result = parseImportedText(text, file.name);
      setImportedIndexes((current) => {
        const next = new Set(current);
        result.combinations.forEach((item) => next.add(item.index));
        return next;
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
    const numbers = indexToCombination(index);
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
    if (!validateCombination(numbers)) {
      addLog("error", `Search lỗi: "${value}" không phải bộ 6 số hợp lệ.`);
      return;
    }
    const index = combinationToIndex(numbers);
    addLog("info", `Search ${formatCombination(numbers)} tại #${index.toLocaleString("en-US")}.`);
    focusCell(index);
  }

  function handleRandomPick() {
    const numbers = randomCombination();
    const index = combinationToIndex(numbers);
    setRandomIndex(index);
    addLog("success", `Random Pick: ${formatCombination(numbers)} tại #${index.toLocaleString("en-US")}.`);
    focusCell(index, Math.max(zoom, 3.6));
  }

  function handleCalculatedPick() {
    if (importedIndexes.size === 0) {
      addLog("warn", "Calculated Pick cần dữ liệu import; đang dùng random fallback.");
    }

    const result = calculatedPick(importedIndexes);
    setRandomIndex(result.index);
    addLog(
      "success",
      `Calculated Pick: ${formatCombination(result.numbers)} tại #${result.index.toLocaleString("en-US")} | score ${result.score.toFixed(4)} | avg number freq ${result.averageNumberFrequency.toFixed(2)} | avg pair freq ${result.averagePairFrequency.toFixed(2)} | ${result.candidateCount.toLocaleString("en-US")} candidates.`,
    );
    focusCell(result.index, Math.max(zoom, 3.6));
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
    setFocusIndex(0);
    addLog("info", "Reset View về đầu không gian tổ hợp.");
  }

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Vietlott Power 6/55</p>
          <h1>Combination Space Dashboard</h1>
        </div>
        <div className="header-actions">
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
          addLog("info", "Clear Imported Data hoàn tất.");
        }}
        onClearSelected={() => {
          setSelected(new Map());
          addLog("info", "Clear Selected Cells hoàn tất.");
        }}
        onExportSelected={handleExportSelected}
        onRandomPick={handleRandomPick}
        onCalculatedPick={handleCalculatedPick}
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
            importedIndexes={importedIndexes}
            selectedIndexes={selectedIndexes}
            randomIndex={randomIndex}
            focusIndex={focusIndex}
            mode={mode}
            zoom={zoom}
            onZoomChange={setZoom}
            onSelect={handleSelect}
          />
        </section>

        <aside className="side-panel">
          <StatsPanel importedCount={importedIndexes.size} selectedCount={selected.size} />
          <LogPanel entries={logs} />
        </aside>
      </div>

      <ImportPanel inputRef={fileInputRef} onFileChange={handleFileChange} />
    </main>
  );
}

export default App;
