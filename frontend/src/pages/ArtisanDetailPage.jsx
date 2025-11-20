import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStars from "../components/RatingStars.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

function ArtisanDetailPage() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchArtisan() {
      try {
        const res = await fetch(`${API_URL}/artisans/${id}`, {
          headers: { "X-API-Key": import.meta.env.VITE_API_KEY || "" },
        });
        if (!res.ok) throw new Error("Erreur API artisan");
        const data = await res.json();
        setArtisan(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchArtisan();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch(`${API_URL}/artisans/${id}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": import.meta.env.VITE_API_KEY || "",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur lors de l’envoi du message");
      setStatus("ok");
      setForm({ nom: "", email: "", objet: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (!artisan) {
    return <p className="text-sm text-gray-600">Chargement de l’artisan…</p>;
  }

  const specialite = artisan.Specialty?.nom ?? "Spécialité non renseignée";
  const categorie = artisan.Specialty?.Category?.nom;

  return (
    <div className="grid gap-6 md:grid-cols-[2fr,1.5fr]">
      {/* Infos artisan */}
      <section className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
        <h1 className="text-2xl font-semibold text-[#00497c]">{artisan.nom}</h1>
        <RatingStars value={artisan.note} />
        <p className="text-sm text-gray-700">
          {specialite}
          {categorie ? ` — ${categorie}` : ""}
        </p>
        <p className="text-sm text-gray-600">{artisan.ville}</p>

        <div className="mt-4">
          <h2 className="font-semibold text-sm mb-1 text-[#00497c]">
            À propos
          </h2>
          <p className="text-sm text-gray-700 whitespace-pre-line">
            {artisan.a_propos}
          </p>
        </div>

        {artisan.site_web && (
          <p className="text-sm mt-3">
            Site web :{" "}
            <a
              href={artisan.site_web}
              target="_blank"
              rel="noreferrer"
              className="text-[#0074c7] hover:underline"
            >
              {artisan.site_web}
            </a>
          </p>
        )}
      </section>

      {/* Formulaire contact */}
      <section className="bg-white rounded-2xl p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-[#00497c] mb-3">
          Contacter cet artisan
        </h2>
        <p className="text-xs text-gray-600 mb-4">
          Une réponse vous sera apportée sous 48h.
        </p>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-medium mb-1">Nom</label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1 text-sm"
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-2 py-1 text-sm"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Objet</label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1 text-sm"
              value={form.objet}
              onChange={(e) => setForm({ ...form, objet: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Message</label>
            <textarea
              className="w-full border rounded px-2 py-1 text-sm min-h-[120px]"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          {status === "ok" && (
            <p className="text-xs text-green-600">
              Message envoyé avec succès !
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-red-600">
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}

          <button
            type="submit"
            className="bg-[#0074c7] text-white text-sm px-4 py-2 rounded hover:bg-[#00497c]"
          >
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}

export default ArtisanDetailPage;
