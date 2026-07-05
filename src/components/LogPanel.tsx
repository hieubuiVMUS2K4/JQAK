import type { LogEntry } from "../types";

type LogPanelProps = {
  entries: LogEntry[];
};

export function LogPanel({ entries }: LogPanelProps) {
  return (
    <section className="panel log-panel">
      <h2>Log</h2>
      <div className="log-list">
        {entries.length === 0 ? (
          <p className="empty-state">Chưa có hành động.</p>
        ) : (
          entries.map((entry) => (
            <div className={`log-entry ${entry.level}`} key={entry.id}>
              <time>{entry.at}</time>
              <span>{entry.message}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
