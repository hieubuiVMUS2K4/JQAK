import { TOTAL_COMBINATIONS } from "../utils/combinations";

type StatsPanelProps = {
  importedCount: number;
  selectedCount: number;
};

export function StatsPanel({ importedCount, selectedCount }: StatsPanelProps) {
  const coverage = (importedCount / TOTAL_COMBINATIONS) * 100;

  return (
    <section className="panel stats-panel">
      <h2>Thống kê</h2>
      <div className="stat-row">
        <span>Tổng tổ hợp</span>
        <strong>{TOTAL_COMBINATIONS.toLocaleString("en-US")}</strong>
      </div>
      <div className="stat-row">
        <span>Đã xuất hiện</span>
        <strong>{importedCount.toLocaleString("en-US")}</strong>
      </div>
      <div className="stat-row">
        <span>Đã chọn</span>
        <strong>{selectedCount.toLocaleString("en-US")}</strong>
      </div>
      <div className="stat-row">
        <span>Tỷ lệ phủ</span>
        <strong>{coverage.toFixed(6)}%</strong>
      </div>
      <div className="legend">
        <span><i className="swatch gray" /> Gray</span>
        <span><i className="swatch red" /> Red</span>
        <span><i className="swatch blue" /> Blue</span>
        <span><i className="swatch yellow" /> Yellow</span>
      </div>
    </section>
  );
}
