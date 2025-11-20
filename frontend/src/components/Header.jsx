import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const categories = [
  { label: "Bâtiment", slug: "batiment" },
  { label: "Services", slug: "services" },
  { label: "Fabrication", slug: "fabrication" },
  { label: "Alimentation", slug: "alimentation" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/artisans?q=${encodeURIComponent(trimmed)}`);
  }

  const activeClasses = "text-blue-700 border-b-2 border-blue-600";
  const baseClasses =
    "px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-700 hover:bg-slate-100 rounded-md";

  return (
    <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-md bg-blue-700 text-white flex items-center justify-center font-semibold">
            TA
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm leading-tight uppercase tracking-wide">
              Trouve ton artisan
            </span>
            <span className="text-[11px] text-slate-500">
              Région Auvergne-Rhône-Alpes
            </span>
          </div>
        </NavLink>

        <nav className="hidden md:flex items-center gap-2">
          {categories.map((cat) => (
            <NavLink
              key={cat.slug}
              to={`/categorie/${cat.slug}`}
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : ""}`
              }
            >
              {cat.label}
            </NavLink>
          ))}
        </nav>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 w-52 sm:w-64"
        >
          <input
            type="search"
            placeholder="Rechercher un artisan..."
            className="w-full rounded-md border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="hidden sm:inline-flex rounded-md bg-blue-700 text-white text-sm px-3 py-1.5 hover:bg-blue-800"
          >
            OK
          </button>
        </form>
      </div>

      {/* menu mobile */}
      <nav className="flex md:hidden gap-1 border-t bg-slate-50 px-2 py-1 overflow-x-auto">
        {categories.map((cat) => (
          <NavLink
            key={cat.slug}
            to={`/categorie/${cat.slug}`}
            className={({ isActive }) =>
              `whitespace-nowrap px-3 py-1 text-xs font-medium rounded-full border ${
                isActive
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-slate-800 hover:bg-blue-50"
              }`
            }
          >
            {cat.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
