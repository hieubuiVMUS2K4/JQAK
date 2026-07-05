import { MouseEvent, PointerEvent, useEffect, useMemo, useRef } from "react";
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
  onZoomChange: (zoom: number) => void;
  onSelect: (index: number) => void;
};

type DrawState = {
  importedIndexes: Set<number>;
  selectedIndexes: Set<number>;
  importedList: number[];
  selectedList: number[];
  randomIndex: number | null;
  mode: GridMode;
  cellSize: number;
  stride: number;
  width: number;
  height: number;
  dpr: number;
  hoverIndex: number | null;
};

function isIndexVisible(index: number, startColumn: number, endColumn: number, startRow: number, endRow: number) {
  const column = index % COLUMNS;
  const row = Math.floor(index / COLUMNS);
  return column >= startColumn && column <= endColumn && row >= startRow && row <= endRow;
}

export function CombinationGrid({
  importedIndexes,
  selectedIndexes,
  randomIndex,
  focusIndex,
  mode,
  zoom,
  onZoomChange,
  onSelect,
}: CombinationGridProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef(0);
  const rectRef = useRef<DOMRect | null>(null);
  const previousStrideRef = useRef(BASE_CELL_SIZE * zoom + GAP);
  const zoomAnchorRef = useRef<{ xRatio: number; yRatio: number; viewportX: number; viewportY: number } | null>(null);
  const dragRef = useRef<{ x: number; y: number; left: number; top: number; active: boolean } | null>(null);
  const drawStateRef = useRef<DrawState>({
    importedIndexes,
    selectedIndexes,
    importedList: [],
    selectedList: [],
    randomIndex,
    mode,
    cellSize: BASE_CELL_SIZE * zoom,
    stride: BASE_CELL_SIZE * zoom + GAP,
    width: 0,
    height: 0,
    dpr: window.devicePixelRatio || 1,
    hoverIndex: null,
  });

  const cellSize = BASE_CELL_SIZE * zoom;
  const stride = cellSize + GAP;
  const worldWidth = COLUMNS * stride;
  const worldHeight = ROWS * stride;
  const importedList = useMemo(() => [...importedIndexes], [importedIndexes]);
  const selectedList = useMemo(() => [...selectedIndexes], [selectedIndexes]);

  function drawVisibleIndexes(
    ctx: CanvasRenderingContext2D,
    indexes: number[],
    color: string,
    startColumn: number,
    endColumn: number,
    startRow: number,
    endRow: number,
    state: DrawState,
    scroller: HTMLDivElement,
  ) {
    ctx.fillStyle = color;
    const size = Math.max(1, state.cellSize);
    for (const index of indexes) {
      if (!isIndexVisible(index, startColumn, endColumn, startRow, endRow)) continue;
      const column = index % COLUMNS;
      const row = Math.floor(index / COLUMNS);
      ctx.fillRect(column * state.stride - scroller.scrollLeft, row * state.stride - scroller.scrollTop, size, size);
    }
  }

  function draw() {
    const canvas = canvasRef.current;
    const scroller = scrollerRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !scroller || !ctx) return;

    const state = drawStateRef.current;
    const width = state.width;
    const height = state.height;
    if (width === 0 || height === 0) return;

    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#121417";
    ctx.fillRect(0, 0, width, height);

    const startColumn = Math.max(0, Math.floor(scroller.scrollLeft / state.stride));
    const endColumn = Math.min(COLUMNS - 1, Math.ceil((scroller.scrollLeft + width) / state.stride));
    const startRow = Math.max(0, Math.floor(scroller.scrollTop / state.stride));
    const endRow = Math.min(ROWS - 1, Math.ceil((scroller.scrollTop + height) / state.stride));
    const visibleWidth = endColumn - startColumn + 1;
    const visibleHeight = endRow - startRow + 1;
    const defaultColor = state.mode === "heatmap" ? "#303338" : "#2b2b2b";

    ctx.fillStyle = defaultColor;
    const size = Math.max(1, state.cellSize);
    for (let row = 0; row < visibleHeight; row += 1) {
      const sourceRow = startRow + row;
      const y = sourceRow * state.stride - scroller.scrollTop;
      for (let column = 0; column < visibleWidth; column += 1) {
        const sourceColumn = startColumn + column;
        const index = sourceRow * COLUMNS + sourceColumn;
        if (index >= TOTAL_COMBINATIONS) break;
        ctx.fillRect(sourceColumn * state.stride - scroller.scrollLeft, y, size, size);
      }
    }

    drawVisibleIndexes(
      ctx,
      state.importedList,
      state.mode === "heatmap" ? "#ff6b5f" : "#ee3f46",
      startColumn,
      endColumn,
      startRow,
      endRow,
      state,
      scroller,
    );
    drawVisibleIndexes(ctx, state.selectedList, "#27a7ff", startColumn, endColumn, startRow, endRow, state, scroller);
    if (state.randomIndex !== null) {
      drawVisibleIndexes(ctx, [state.randomIndex], "#f7c948", startColumn, endColumn, startRow, endRow, state, scroller);
    }

    if (state.cellSize >= 22) {
      ctx.fillStyle = "#d8dde6";
      ctx.font = "10px Inter, system-ui, sans-serif";
      for (let row = startRow; row <= endRow; row += 1) {
        const y = row * state.stride - scroller.scrollTop;
        for (let column = startColumn; column <= endColumn; column += 1) {
          const index = row * COLUMNS + column;
          if (index >= TOTAL_COMBINATIONS) break;
          ctx.fillText(formatCombination(indexToCombination(index)), column * state.stride - scroller.scrollLeft + 3, y + 14);
        }
      }
    }

    if (state.hoverIndex !== null && isIndexVisible(state.hoverIndex, startColumn, endColumn, startRow, endRow)) {
      const column = state.hoverIndex % COLUMNS;
      const row = Math.floor(state.hoverIndex / COLUMNS);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      ctx.strokeRect(column * state.stride - scroller.scrollLeft - 1, row * state.stride - scroller.scrollTop - 1, state.cellSize + 2, state.cellSize + 2);
    }
  }

  function scheduleDraw() {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(draw);
  }

  function clampZoom(value: number) {
    return Math.min(10, Math.max(0.55, Number(value.toFixed(2))));
  }

  function setZoomAroundViewportPoint(nextZoom: number, viewportX: number, viewportY: number) {
    const scroller = scrollerRef.current;
    if (!scroller) {
      onZoomChange(clampZoom(nextZoom));
      return;
    }

    zoomAnchorRef.current = {
      xRatio: (scroller.scrollLeft + viewportX) / stride,
      yRatio: (scroller.scrollTop + viewportY) / stride,
      viewportX,
      viewportY,
    };
    onZoomChange(clampZoom(nextZoom));
  }

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller && previousStrideRef.current !== stride) {
      const anchor =
        zoomAnchorRef.current ?? {
          xRatio: (scroller.scrollLeft + scroller.clientWidth / 2) / previousStrideRef.current,
          yRatio: (scroller.scrollTop + scroller.clientHeight / 2) / previousStrideRef.current,
          viewportX: scroller.clientWidth / 2,
          viewportY: scroller.clientHeight / 2,
        };

      scroller.scrollLeft = Math.max(0, anchor.xRatio * stride - anchor.viewportX);
      scroller.scrollTop = Math.max(0, anchor.yRatio * stride - anchor.viewportY);
      previousStrideRef.current = stride;
      zoomAnchorRef.current = null;
    }

    drawStateRef.current = {
      ...drawStateRef.current,
      importedIndexes,
      selectedIndexes,
      importedList,
      selectedList,
      randomIndex,
      mode,
      cellSize,
      stride,
    };
    scheduleDraw();
  }, [cellSize, importedIndexes, importedList, mode, randomIndex, selectedIndexes, selectedList, stride]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scroller = scrollerRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !scroller || !wrapper) return;
    const activeCanvas = canvas;
    const activeWrapper = wrapper;

    function resizeCanvas() {
      const rect = activeWrapper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      rectRef.current = rect;
      drawStateRef.current.width = rect.width;
      drawStateRef.current.height = rect.height;
      drawStateRef.current.dpr = dpr;
      activeCanvas.width = Math.floor(rect.width * dpr);
      activeCanvas.height = Math.floor(rect.height * dpr);
      activeCanvas.style.width = `${rect.width}px`;
      activeCanvas.style.height = `${rect.height}px`;
      scheduleDraw();
    }

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(activeWrapper);
    scroller.addEventListener("scroll", scheduleDraw, { passive: true });
    resizeCanvas();

    return () => {
      cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      scroller.removeEventListener("scroll", scheduleDraw);
    };
  }, []);

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

  function eventToIndex(event: MouseEvent | PointerEvent): number | null {
    const scroller = scrollerRef.current;
    const rect = rectRef.current ?? wrapperRef.current?.getBoundingClientRect();
    if (!rect || !scroller) return null;
    const worldX = event.clientX - rect.left + scroller.scrollLeft;
    const worldY = event.clientY - rect.top + scroller.scrollTop;
    const column = Math.floor(worldX / stride);
    const row = Math.floor(worldY / stride);
    if (column < 0 || column >= COLUMNS || row < 0 || row >= ROWS) return null;
    const index = row * COLUMNS + column;
    return index >= TOTAL_COMBINATIONS ? null : index;
  }

  function updateTooltip(event: PointerEvent<HTMLCanvasElement>, index: number | null) {
    const tooltip = tooltipRef.current;
    const previousIndex = drawStateRef.current.hoverIndex;
    drawStateRef.current.hoverIndex = index;

    if (!tooltip || index === null) {
      if (tooltip) tooltip.hidden = true;
      if (previousIndex !== null) scheduleDraw();
      return;
    }

    tooltip.hidden = false;
    tooltip.style.transform = `translate(${event.clientX + 14}px, ${event.clientY + 14}px)`;
    if (previousIndex !== index) {
      tooltip.textContent = `#${index.toLocaleString("en-US")} - ${formatCombination(indexToCombination(index))}`;
      scheduleDraw();
    }
  }

  function handlePointerMove(event: PointerEvent<HTMLCanvasElement>) {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (drag?.active && scroller) {
      scroller.scrollLeft = drag.left - (event.clientX - drag.x);
      scroller.scrollTop = drag.top - (event.clientY - drag.y);
      return;
    }

    updateTooltip(event, eventToIndex(event));
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
    dragRef.current = null;
    drawStateRef.current.hoverIndex = null;
    if (tooltipRef.current) tooltipRef.current.hidden = true;
    scheduleDraw();
  }

  function handleWheelEvent(event: WheelEvent) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    event.preventDefault();

    if (event.ctrlKey || event.metaKey) {
      const rect = rectRef.current ?? wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;
      const zoomFactor = event.deltaY < 0 ? 1.18 : 1 / 1.18;
      setZoomAroundViewportPoint(zoom * zoomFactor, event.clientX - rect.left, event.clientY - rect.top);
      return;
    }

    scroller.scrollLeft += event.shiftKey ? event.deltaY : event.deltaX;
    scroller.scrollTop += event.shiftKey ? event.deltaX : event.deltaY;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.addEventListener("wheel", handleWheelEvent, { passive: false });
    return () => canvas.removeEventListener("wheel", handleWheelEvent);
  }, [zoom, stride]);

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
      />
      <div ref={tooltipRef} className="tooltip" hidden />
    </div>
  );
}
