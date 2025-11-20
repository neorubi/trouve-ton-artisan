import { useLocation } from "react-router-dom";

export default function ArtisanListPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get("q") || "";

  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Liste des artisans</h1>
      {q ? (
        <p className="text-sm text-slate-600">
          Résultats de la recherche pour « {q} ». Plus tard, cette page
          appellera l’API avec ce terme de recherche.
        </p>
      ) : (
        <p className="text-sm text-slate-600">
          Ici s’affichera la liste filtrable des artisans (par catégorie,
          spécialité, ville, etc.) à partir de l’API.
        </p>
      )}
    </section>
  );
}
