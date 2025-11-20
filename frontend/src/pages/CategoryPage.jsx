import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArtisanCard from "../components/ArtisanCard.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

function CategoryPage() {
  const { categorieSlug } = useParams();
  const [artisans, setArtisans] = useState([]);
  const [categoryLabel, setCategoryLabel] = useState("");

  useEffect(() => {
    async function fetchArtisans() {
      try {
        const res = await fetch(`${API_URL}/artisans`);
        if (!res.ok) throw new Error("Erreur API artisans");
        const data = await res.json();

        // On filtre côté front en fonction du slug de la catégorie
        const filtered = data.filter(
          (a) => a.Specialty?.Category?.slug === categorieSlug
        );
        setArtisans(filtered);

        if (filtered[0]?.Specialty?.Category?.nom) {
          setCategoryLabel(filtered[0].Specialty.Category.nom);
        } else {
          // fallback simple
          setCategoryLabel(categorieSlug);
        }
      } catch (err) {
        console.error(err);
        setArtisans([]);
      }
    }
    fetchArtisans();
  }, [categorieSlug]);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-[#00497c]">
        Artisans — {categoryLabel}
      </h1>

      {artisans.length === 0 ? (
        <p className="text-sm text-gray-600">
          Aucun artisan trouvé pour cette catégorie pour le moment.
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

export default CategoryPage;
