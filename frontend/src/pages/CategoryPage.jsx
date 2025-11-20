import { useParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard.jsx";

function CategoryPage() {
  const { slug } = useParams();

  // Plus tard : appel API /artisans?categorie=slug
  const dummyArtisans = [
    {
      id: 10,
      nom: "Artisan exemple",
      note: 4.2,
      ville: "Lyon",
      specialite: { nom: "Maçon" },
    },
  ];

  const label =
    slug === "batiment"
      ? "Bâtiment"
      : slug === "services"
      ? "Services"
      : slug === "fabrication"
      ? "Fabrication"
      : slug === "alimentation"
      ? "Alimentation"
      : "Résultats";

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold text-[#00497c] mb-1">
          Artisans — {label}
        </h1>
        <p className="text-sm text-slate-600">
          Liste des artisans correspondant à la catégorie ou à la recherche.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {dummyArtisans.map((artisan) => (
          <ArtisanCard key={artisan.id} artisan={artisan} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
