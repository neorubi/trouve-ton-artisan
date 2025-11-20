function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center gap-2 w-full md:w-72 bg-white rounded-full px-3 py-1 shadow-sm"
    >
      <input
        type="search"
        placeholder="Rechercher un artisan..."
        className="flex-1 bg-transparent text-sm text-[#384050] outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="submit"
        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#82b864] text-white hover:bg-[#6ba34d]"
      >
        Rechercher
      </button>
    </form>
  );
}

export default SearchBar;
