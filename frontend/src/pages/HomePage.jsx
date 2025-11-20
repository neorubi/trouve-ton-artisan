import { useEffect, useState } from "react";
import ArtisanCard from "../components/ArtisanCard.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

function HomePage() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    async function fetchTop() {
      try {
        const res = await fetch(`${API_URL}/artisans?top=true`);
        if (!res.ok) throw new Error("Erreur API top artisans");
        const data = await res.json();
        setTopArtisans(data.slice(0, 3));
      } catch (err) {
        console.error(err);
        setTopArtisans([]);
      }
    }
    fetchTop();
  }, []);

  const steps = [
    {
      num: 1,
      title: "Choisir une catégorie",
      text: "Sélectionnez le domaine d’activité dans le menu (Bâtiment, Services, Fabrication, Alimentation…).",
    },
    {
      num: 2,
      title: "Choisir un artisan",
      text: "Parcourez la liste des artisans, consultez leurs notes et leurs spécialités.",
    },
    {
      num: 3,
      title: "Le contacter",
      text: "Utilisez le formulaire de contact sur la fiche de l’artisan pour demander un devis ou des informations.",
    },
    {
      num: 4,
      title: "Recevoir une réponse",
      text: "L’artisan s’engage à vous répondre sous 48 heures.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-[#00497c] mb-2">
          Comment trouver mon artisan ?
        </h1>
        <p className="text-sm text-gray-700 max-w-2xl">
          Cette plateforme vous permet de trouver rapidement un artisan de
          confiance en Auvergne-Rhône-Alpes, en quelques étapes simples.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#f1f8ff] border border-[#0074c7]/10 rounded-xl p-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#0074c7] text-white flex items-center justify-center font-semibold mb-2">
                {step.num}
              </div>
              <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artisans du mois */}
      <section>
        <h2 className="text-xl font-semibold text-[#00497c] mb-3">
          Les artisans du mois
        </h2>
        {topArtisans.length === 0 ? (
          <p className="text-sm text-gray-600">
            Les artisans du mois seront bientôt disponibles.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {topArtisans.map((a) => (
              <ArtisanCard key={a.id} artisan={a} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;
