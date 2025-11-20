import { useState } from "react";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.(value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-1">
      <input
        type="search"
        placeholder="Rechercher un artisan..."
        className="flex-1 rounded-l border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#0074c7]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#0074c7] text-white text-sm px-3 py-1 rounded-r hover:bg-[#00497c]"
      >
        Rechercher
      </button>
    </form>
  );
}

export default SearchBar;
