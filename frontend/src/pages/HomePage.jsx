const steps = [
  {
    number: 1,
    title: "Choisir la catégorie",
    text: "Sélectionnez une catégorie d’artisanat dans le menu (bâtiment, services, fabrication, alimentation).",
  },
  {
    number: 2,
    title: "Choisir un artisan",
    text: "Parcourez la liste, lisez les fiches et repérez l’artisan qui correspond à votre besoin.",
  },
  {
    number: 3,
    title: "Envoyer le formulaire",
    text: "Remplissez le formulaire de contact sur la fiche artisan avec votre demande.",
  },
  {
    number: 4,
    title: "Recevoir une réponse",
    text: "L’artisan ou la région vous répond sous 48h avec les informations demandées.",
  },
];

const featuredArtisans = [
  {
    id: 1,
    name: "Boucherie Dumont",
    note: 4.5,
    speciality: "Boucher",
    city: "Lyon",
  },
  {
    id: 2,
    name: "Au pain chaud",
    note: 4.8,
    speciality: "Boulanger",
    city: "Montélimar",
  },
  {
    id: 3,
    name: "Orville Salmons",
    note: 5.0,
    speciality: "Chauffagiste",
    city: "Evian",
  },
];

function Stars({ value }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1 text-amber-500 text-xs">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < full ? "★" : "☆"}</span>
      ))}
      <span className="text-[11px] text-slate-600 ml-1">
        {value.toFixed(1)}/5
      </span>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-blue-700 font-semibold">
          Plateforme régionale
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Comment trouver mon artisan ?
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
          Trouvez facilement un artisan en Auvergne-Rhône-Alpes, comparez les
          fiches et contactez-le en quelques clics. Le site est pensé pour être
          simple, accessible et utilisable sur mobile.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step) => (
          <article
            key={step.number}
            className="bg-white rounded-xl shadow-sm border p-4 flex flex-col gap-2"
          >
            <div className="h-8 w-8 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-semibold">
              {step.number}
            </div>
            <h2 className="text-sm font-semibold">{step.title}</h2>
            <p className="text-xs text-slate-600">{step.text}</p>
          </article>
        ))}
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-3">Les artisans du mois</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredArtisans.map((a) => (
            <article
              key={a.id}
              className="bg-white rounded-xl shadow-sm border p-4 space-y-2"
            >
              <h3 className="font-semibold text-sm">{a.name}</h3>
              <Stars value={a.note} />
              <p className="text-xs text-slate-600">
                {a.speciality} — {a.city}
              </p>
              <p className="text-[11px] text-slate-500">
                (Cette section sera ensuite alimentée dynamiquement par
                l&apos;API.)
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
