import { useParams } from "react-router-dom";

export default function Artisan() {
  const { id } = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Artisan #{id}</h1>
      <p>Informations détaillées de l’artisan.</p>
    </div>
  );
}
