import { ChangeEvent, RefObject } from "react";

type ImportPanelProps = {
  inputRef: RefObject<HTMLInputElement | null>;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function ImportPanel({ inputRef, onFileChange }: ImportPanelProps) {
  return (
    <input
      ref={inputRef}
      className="hidden-input"
      type="file"
      accept=".csv,.json,.jsonl,application/json,text/csv,text/plain"
      onChange={onFileChange}
    />
  );
}
