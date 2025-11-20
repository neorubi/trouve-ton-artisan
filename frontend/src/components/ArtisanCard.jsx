import { Link } from "react-router-dom";
import RatingStars from "./RatingStars.jsx";

function ArtisanCard({ artisan }) {
  return (
    <Link
      to={`/artisans/${artisan.id}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 border border-slate-100"
    >
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-[#0074c7] text-white flex items-center justify-center font-semibold">
          {artisan.nom.slice(0, 2).toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-sm md:text-base">
              {artisan.nom}
            </h3>
            <RatingStars value={artisan.note ?? 0} />
          </div>
          <p className="text-xs text-slate-600 mb-1">
            {artisan.specialite?.nom ?? artisan.specialite ?? "Spécialité"}
          </p>
          <p className="text-xs text-slate-500">{artisan.ville}</p>
        </div>
      </div>
    </Link>
  );
}

export default ArtisanCard;
