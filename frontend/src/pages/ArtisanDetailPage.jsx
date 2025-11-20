import { useParams } from "react-router-dom";

export default function ArtisanDetailPage() {
  const { id } = useParams();

  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Fiche artisan #{id}</h1>
      <p className="text-sm text-slate-600">
        Cette page affichera les informations complètes d’un artisan (nom,
        image, note, spécialité, localisation, à propos, formulaire de contact,
        site web…) récupérées via l’API.
      </p>
      <p className="text-xs text-slate-500">
        Pour l’instant, il s’agit d’un squelette qui nous servira de base pour
        brancher les données.
      </p>
    </section>
  );
}
