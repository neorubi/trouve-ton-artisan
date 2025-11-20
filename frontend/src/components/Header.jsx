import { Link, useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

function Header() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(`${API_URL}/categories`);
        if (!res.ok) throw new Error("Erreur API catégories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
        // fallback minimal pour ne pas casser l'UI
        setCategories([
          { id: 1, nom: "Bâtiment", slug: "batiment" },
          { id: 2, nom: "Services", slug: "services" },
          { id: 3, nom: "Fabrication", slug: "fabrication" },
          { id: 4, nom: "Alimentation", slug: "alimentation" },
        ]);
      }
    }
    fetchCategories();
  }, []);

  function handleSearch(term) {
    if (!term.trim()) return;
    navigate(`/artisans?search=${encodeURIComponent(term)}`);
  }

  return (
    <header className="bg-[#00497c] text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Logo + titre */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#0074c7] flex items-center justify-center font-bold text-lg">
              TA
            </div>
            <div className="flex flex-col">
              <span className="font-semibold leading-tight">
                Trouve ton artisan
              </span>
              <span className="text-xs opacity-80">
                Région Auvergne-Rhône-Alpes
              </span>
            </div>
          </Link>
        </div>

        {/* Menu catégories */}
        <nav className="flex gap-3 text-sm flex-wrap">
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/categorie/${cat.slug}`}
              className={({ isActive }) =>
                `px-2 py-1 rounded ${
                  isActive ? "bg-[#0074c7]" : "hover:bg-[#0074c7]/70"
                }`
              }
            >
              {cat.nom}
            </NavLink>
          ))}
        </nav>

        {/* Barre de recherche */}
        <div className="w-full md:w-64">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </header>
  );
}

export default Header;
