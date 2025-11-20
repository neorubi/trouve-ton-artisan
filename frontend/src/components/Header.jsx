import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar.jsx";

const CATEGORIES = [
  { slug: "batiment", label: "Bâtiment" },
  { slug: "services", label: "Services" },
  { slug: "fabrication", label: "Fabrication" },
  { slug: "alimentation", label: "Alimentation" },
];

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!search.trim()) return;
    // plus tard on ajoutera ?search= à l’URL de la liste
    navigate(`/categorie/recherche?search=${encodeURIComponent(search)}`);
  }

  return (
    <header className="bg-[#00497c] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        {/* Logo + titre */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 rounded-full bg-[#0074c7] flex items-center justify-center font-bold">
            TA
          </div>
          <div>
            <div className="font-semibold leading-tight">
              Trouve ton artisan
            </div>
            <div className="text-xs text-blue-100">
              Région Auvergne-Rhône-Alpes
            </div>
          </div>
        </div>

        {/* Navigation + recherche */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 w-full md:w-auto">
          <nav className="flex gap-3 text-sm justify-center md:justify-start">
            {CATEGORIES.map((cat) => (
              <NavLink
                key={cat.slug}
                to={`/categorie/${cat.slug}`}
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md ${
                    isActive ? "bg-[#0074c7]" : "hover:bg-[#0074c7]/70"
                  }`
                }
              >
                {cat.label}
              </NavLink>
            ))}
          </nav>

          <SearchBar
            value={search}
            onChange={setSearch}
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
