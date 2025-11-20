import { Link } from "react-router-dom";
import RatingStars from "./RatingStars.jsx";

function ArtisanCard({ artisan }) {
  if (!artisan) return null;

  const { id, nom, ville, note, Specialty } = artisan;
  const specialite = Specialty?.nom ?? "Spécialité non renseignée";

  return (
    <Link
      to={`/artisans/${id}`}
      className="block border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg text-[#00497c]">{nom}</h3>
        <RatingStars value={note} />
        <p className="text-sm text-gray-700">{specialite}</p>
        <p className="text-xs text-gray-500">{ville}</p>
      </div>
    </Link>
  );
}

export default ArtisanCard;

