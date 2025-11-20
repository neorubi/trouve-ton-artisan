import { useParams } from "react-router-dom";
import RatingStars from "../components/RatingStars.jsx";

function ArtisanDetailPage() {
  const { id } = useParams();

  // Plus tard : appel API /artisans/:id
  const artisan = {
    id,
    nom: "Artisan exemple",
    note: 4.5,
    specialite: { nom: "Menuisier" },
    ville: "Lyon",
    a_propos:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ce texte sera remplacé par les données réelles.",
    email: "contact@example.com",
    site_web: "https://example.com",
  };

  return (
    <div className="space-y-6">
      {/* Header fiche */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
        <div className="w-20 h-20 rounded-full bg-[#0074c7] text-white flex items-center justify-center text-2xl font-semibold">
          {artisan.nom.slice(0, 2).toUpperCase()}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-[#00497c] mb-1">
            {artisan.nom}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 mb-2">
            <RatingStars value={artisan.note} />
            <span>• {artisan.specialite.nom}</span>
            <span>• {artisan.ville}</span>
          </div>
          {artisan.site_web && (
            <a
              href={artisan.site_web}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#0074c7] underline"
            >
              Voir le site web
            </a>
          )}
        </div>
      </section>

      {/* À propos */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-lg font-semibold text-[#00497c] mb-2">
          À propos
        </h2>
        <p className="text-sm text-slate-700 whitespace-pre-line">
          {artisan.a_propos}
        </p>
      </section>

      {/* Formulaire de contact */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-lg font-semibold text-[#00497c] mb-4">
          Contacter cet artisan
        </h2>
        <form className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold mb-1">Nom</label>
            <input
              type="text"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
              placeholder="Votre nom"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
              placeholder="vous@example.com"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold mb-1">Objet</label>
            <input
              type="text"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
              placeholder="Demande de devis, informations…"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold mb-1">Message</label>
            <textarea
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm min-h-[120px]"
              placeholder="Votre message"
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-[#82b864] text-white text-sm font-semibold hover:bg-[#6ba34d]"
            >
              Envoyer ma demande
            </button>
          </div>
        </form>
        <p className="text-xs text-slate-500 mt-2">
          Une réponse vous sera apportée sous 48h.
        </p>
      </section>
    </div>
  );
}

export default ArtisanDetailPage;
