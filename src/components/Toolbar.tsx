import {
  Crosshair,
  Download,
  Eraser,
  Grid2X2,
  Minus,
  RotateCcw,
  Shuffle,
  ThermometerSun,
  Upload,
  ZoomIn,
} from "lucide-react";
import type { GridMode } from "../types";

type ToolbarProps = {
  mode: GridMode;
  onImportClick: () => void;
  onClearImported: () => void;
  onClearSelected: () => void;
  onExportSelected: () => void;
  onRandomPick: () => void;
  onResetView: () => void;
  onToggleMode: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export function Toolbar({
  mode,
  onImportClick,
  onClearImported,
  onClearSelected,
  onExportSelected,
  onRandomPick,
  onResetView,
  onToggleMode,
  onZoomIn,
  onZoomOut,
}: ToolbarProps) {
  return (
    <div className="toolbar">
      <button className="primary" onClick={onImportClick} title="Import Data">
        <Upload size={16} />
        Import Data
      </button>
      <button onClick={onClearImported} title="Clear Imported Data">
        <Eraser size={16} />
        Clear Imported
      </button>
      <button onClick={onClearSelected} title="Clear Selected Cells">
        <Minus size={16} />
        Clear Selected
      </button>
      <button onClick={onExportSelected} title="Export Selected Cells">
        <Download size={16} />
        Export Selected
      </button>
      <button onClick={onRandomPick} title="Random Pick">
        <Shuffle size={16} />
        Random Pick
      </button>
      <button onClick={onResetView} title="Reset View">
        <RotateCcw size={16} />
        Reset View
      </button>
      <button onClick={onToggleMode} title="Toggle Grid / Heatmap Mode">
        {mode === "grid" ? <ThermometerSun size={16} /> : <Grid2X2 size={16} />}
        {mode === "grid" ? "Heatmap" : "Grid"}
      </button>
      <button onClick={onZoomIn} title="Zoom In">
        <ZoomIn size={16} />
        Zoom In
      </button>
      <button onClick={onZoomOut} title="Zoom Out">
        <Crosshair size={16} />
        Zoom Out
      </button>
    </div>
  );
}
