import { useParams } from "react-router-dom";

const LABELS = {
  batiment: "Bâtiment",
  services: "Services",
  fabrication: "Fabrication",
  alimentation: "Alimentation",
};

export default function CategoryPage() {
  const { slug } = useParams();
  const label = LABELS[slug] ?? slug;

  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Catégorie : {label}</h1>
      <p className="text-sm text-slate-600">
        Ici s’affichera la liste des artisans de la catégorie « {label} »,
        récupérée depuis l’API. Pour l’instant, cette page sert de squelette
        pour la maquette React.
      </p>
    </section>
  );
}
