import { MouseEvent, PointerEvent, WheelEvent, useEffect, useMemo, useRef, useState } from "react";
import type { GridMode } from "../types";
import { formatCombination, indexToCombination, TOTAL_COMBINATIONS } from "../utils/combinations";

const COLUMNS = 5_500;
const ROWS = Math.ceil(TOTAL_COMBINATIONS / COLUMNS);
const BASE_CELL_SIZE = 4;
const GAP = 1;

type CombinationGridProps = {
  importedIndexes: Set<number>;
  selectedIndexes: Set<number>;
  randomIndex: number | null;
  focusIndex: number | null;
  mode: GridMode;
  zoom: number;
  onSelect: (index: number) => void;
};

type TooltipState = {
  x: number;
  y: number;
  index: number;
  numbers: number[];
};

function colorForIndex(index: number, imported: Set<number>, selected: Set<number>, randomIndex: number | null, mode: GridMode) {
  if (randomIndex === index) return "#f7c948";
  if (selected.has(index)) return "#27a7ff";
  if (imported.has(index)) return mode === "heatmap" ? "#ff6b5f" : "#ee3f46";
  return mode === "heatmap" ? "#303338" : "#2b2b2b";
}

export function CombinationGrid({
  importedIndexes,
  selectedIndexes,
  randomIndex,
  focusIndex,
  mode,
  zoom,
  onSelect,
}: CombinationGridProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dragRef = useRef<{ x: number; y: number; left: number; top: number; active: boolean } | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const cellSize = BASE_CELL_SIZE * zoom;
  const stride = cellSize + GAP;
  const worldWidth = COLUMNS * stride;
  const worldHeight = ROWS * stride;

  const sortedImported = useMemo(() => [...importedIndexes], [importedIndexes]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || focusIndex === null) return;
    const row = Math.floor(focusIndex / COLUMNS);
    const column = focusIndex % COLUMNS;
    scroller.scrollTo({
      left: Math.max(0, column * stride - scroller.clientWidth / 2),
      top: Math.max(0, row * stride - scroller.clientHeight / 2),
      behavior: "smooth",
    });
  }, [focusIndex, stride]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scroller = scrollerRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !scroller || !wrapper) return;

    let frame = 0;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = "#121417";
      ctx.fillRect(0, 0, rect.width, rect.height);

      const startColumn = Math.max(0, Math.floor(scroller.scrollLeft / stride));
      const endColumn = Math.min(COLUMNS - 1, Math.ceil((scroller.scrollLeft + rect.width) / stride));
      const startRow = Math.max(0, Math.floor(scroller.scrollTop / stride));
      const endRow = Math.min(ROWS - 1, Math.ceil((scroller.scrollTop + rect.height) / stride));

      for (let row = startRow; row <= endRow; row += 1) {
        const y = row * stride - scroller.scrollTop;
        for (let column = startColumn; column <= endColumn; column += 1) {
          const index = row * COLUMNS + column;
          if (index >= TOTAL_COMBINATIONS) break;
          const x = column * stride - scroller.scrollLeft;
          ctx.fillStyle = colorForIndex(index, importedIndexes, selectedIndexes, randomIndex, mode);
          ctx.fillRect(x, y, Math.max(1, cellSize), Math.max(1, cellSize));

          if (cellSize >= 22) {
            ctx.fillStyle = "#d8dde6";
            ctx.font = "10px Inter, system-ui, sans-serif";
            ctx.fillText(formatCombination(indexToCombination(index)), x + 3, y + 14);
          }
        }
      }

      if (mode === "heatmap" && cellSize < 8) {
        ctx.fillStyle = "rgba(238, 63, 70, 0.9)";
        for (const index of sortedImported) {
          const column = index % COLUMNS;
          const row = Math.floor(index / COLUMNS);
          if (column < startColumn || column > endColumn || row < startRow || row > endRow) continue;
          ctx.fillRect(column * stride - scroller.scrollLeft, row * stride - scroller.scrollTop, Math.max(2, cellSize), Math.max(2, cellSize));
        }
      }

      if (tooltip) {
        const column = tooltip.index % COLUMNS;
        const row = Math.floor(tooltip.index / COLUMNS);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1;
        ctx.strokeRect(column * stride - scroller.scrollLeft - 1, row * stride - scroller.scrollTop - 1, cellSize + 2, cellSize + 2);
      }
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(wrapper);
    scroller.addEventListener("scroll", schedule, { passive: true });
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      scroller.removeEventListener("scroll", schedule);
    };
  }, [cellSize, importedIndexes, mode, randomIndex, selectedIndexes, sortedImported, stride, tooltip]);

  function eventToIndex(event: MouseEvent | PointerEvent): number | null {
    const wrapper = wrapperRef.current;
    const scroller = scrollerRef.current;
    if (!wrapper || !scroller) return null;
    const rect = wrapper.getBoundingClientRect();
    const worldX = event.clientX - rect.left + scroller.scrollLeft;
    const worldY = event.clientY - rect.top + scroller.scrollTop;
    const column = Math.floor(worldX / stride);
    const row = Math.floor(worldY / stride);
    if (column < 0 || column >= COLUMNS || row < 0 || row >= ROWS) return null;
    const index = row * COLUMNS + column;
    return index >= TOTAL_COMBINATIONS ? null : index;
  }

  function handlePointerMove(event: PointerEvent<HTMLCanvasElement>) {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (drag?.active && scroller) {
      scroller.scrollLeft = drag.left - (event.clientX - drag.x);
      scroller.scrollTop = drag.top - (event.clientY - drag.y);
      return;
    }

    const index = eventToIndex(event);
    if (index === null) {
      setTooltip(null);
      return;
    }
    setTooltip({ x: event.clientX, y: event.clientY, index, numbers: indexToCombination(index) });
  }

  function handlePointerDown(event: PointerEvent<HTMLCanvasElement>) {
    const scroller = scrollerRef.current;
    if (!scroller || event.button !== 0) return;
    dragRef.current = { x: event.clientX, y: event.clientY, left: scroller.scrollLeft, top: scroller.scrollTop, active: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event: PointerEvent<HTMLCanvasElement>) {
    const drag = dragRef.current;
    const moved = drag ? Math.abs(event.clientX - drag.x) + Math.abs(event.clientY - drag.y) : 0;
    dragRef.current = null;
    if (moved > 8) return;
    const index = eventToIndex(event);
    if (index !== null) onSelect(index);
  }

  function handlePointerLeave() {
    setTooltip(null);
    dragRef.current = null;
  }

  function handleWheel(event: WheelEvent<HTMLCanvasElement>) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    event.preventDefault();
    scroller.scrollLeft += event.shiftKey ? event.deltaY : event.deltaX;
    scroller.scrollTop += event.shiftKey ? event.deltaX : event.deltaY;
  }

  function handlePointerDrag(event: PointerEvent<HTMLCanvasElement>) {
    if (dragRef.current) {
      const moved = Math.abs(event.clientX - dragRef.current.x) + Math.abs(event.clientY - dragRef.current.y);
      if (moved > 8) dragRef.current.active = true;
    }
    handlePointerMove(event);
  }

  return (
    <div className="grid-wrapper" ref={wrapperRef}>
      <div className="grid-scroller" ref={scrollerRef}>
        <div style={{ width: worldWidth, height: worldHeight }} />
      </div>
      <canvas
        ref={canvasRef}
        className="grid-canvas"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerDrag}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        onWheel={handleWheel}
      />
      {tooltip && (
        <div className="tooltip" style={{ left: tooltip.x + 14, top: tooltip.y + 14 }}>
          #{tooltip.index.toLocaleString("en-US")} - {formatCombination(tooltip.numbers)}
        </div>
      )}
    </div>
  );
}
