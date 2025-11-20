import ArtisanCard from "../components/ArtisanCard.jsx";
import RatingStars from "../components/RatingStars.jsx";

const STEPS = [
  {
    number: 1,
    title: "Choisir la catégorie",
    text: "Sélectionnez une catégorie d’artisanat (Bâtiment, Services, Fabrication, Alimentation) dans le menu.",
  },
  {
    number: 2,
    title: "Choisir un artisan",
    text: "Parcourez la liste d’artisans, leurs notes et localisations pour trouver celui qui vous convient.",
  },
  {
    number: 3,
    title: "Envoyer le formulaire",
    text: "Remplissez le formulaire de contact sur la fiche artisan avec votre demande.",
  },
  {
    number: 4,
    title: "Recevoir une réponse",
    text: "L’artisan ou la région vous répondra sous 48h maximum.",
  },
];

// Pour l’instant, données statiques. Plus tard : top artisans depuis l’API.
const TOP_ARTISANS = [
  {
    id: 1,
    nom: "Boucherie Dumont",
    note: 4.5,
    ville: "Lyon",
    specialite: { nom: "Boucher" },
  },
  {
    id: 2,
    nom: "Au pain chaud",
    note: 4.8,
    ville: "Montélimar",
    specialite: { nom: "Boulanger" },
  },
  {
    id: 3,
    nom: "Chocolaterie Labbé",
    note: 4.9,
    ville: "Lyon",
    specialite: { nom: "Chocolatier" },
  },
];

function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h1 className="text-2xl md:text-3xl font-bold text-[#00497c] mb-3">
          Comment trouver mon artisan ?
        </h1>
        <p className="text-slate-600 mb-4 max-w-2xl">
          La plateforme <strong>Trouve ton artisan</strong> vous accompagne pour
          trouver facilement un artisan de confiance en Auvergne-Rhône-Alpes.
        </p>

        <div className="grid gap-4 md:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#f1f8ff] rounded-xl p-4 border border-blue-100"
            >
              <div className="w-8 h-8 rounded-full bg-[#0074c7] text-white flex items-center justify-center font-semibold mb-2">
                {step.number}
              </div>
              <h2 className="font-semibold text-sm mb-1">{step.title}</h2>
              <p className="text-xs text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top artisans */}
      <section>
        <h2 className="text-xl font-semibold text-[#00497c] mb-3">
          Les artisans du mois
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {TOP_ARTISANS.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
