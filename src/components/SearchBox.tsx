import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

type SearchBoxProps = {
  onSearch: (value: string) => void;
};

export function SearchBox({ onSearch }: SearchBoxProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSearch(value);
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <Search size={17} />
      <input
        aria-label="Search combination"
        placeholder="07 13 22 31 44 52"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Search Combination</button>
    </form>
  );
}
