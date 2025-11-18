import { useParams } from "react-router-dom";

export default function Category() {
  const { slug } = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Catégorie : {slug}</h1>
      <p>Liste des artisans de la catégorie "{slug}".</p>
    </div>
  );
}
