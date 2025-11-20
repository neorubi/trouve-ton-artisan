import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

function ArtisanListPage() {
  const [searchParams] = useSearchParams();
  const [artisans, setArtisans] = useState([]);
  const search = searchParams.get("search") || "";

  useEffect(() => {
    async function fetchArtisans() {
      try {
        const url =
          search.trim().length > 0
            ? `${API_URL}/artisans?search=${encodeURIComponent(search)}`
            : `${API_URL}/artisans`;
        const res = await fetch(url, {
          headers: { "X-API-Key": import.meta.env.VITE_API_KEY || "" },
        });
        if (!res.ok) throw new Error("Erreur API artisans");
        const data = await res.json();
        setArtisans(data);
      } catch (err) {
        console.error(err);
        setArtisans([]);
      }
    }
    fetchArtisans();
  }, [search]);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-[#00497c]">
        Résultats de recherche
      </h1>
      {search && (
        <p className="text-sm text-gray-600">
          Terme recherché : <strong>{search}</strong>
        </p>
      )}

      {artisans.length === 0 ? (
        <p className="text-sm text-gray-600">
          Aucun artisan ne correspond à votre recherche.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {artisans.map((a) => (
            <ArtisanCard key={a.id} artisan={a} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArtisanListPage;
