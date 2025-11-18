export default function Home() {
  return (
    <section className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">Comment trouver mon artisan ?</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">1. Choisir une catégorie</h2>
          <p>Utilisez le menu pour choisir un domaine artisanal.</p>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">2. Choisir un artisan</h2>
          <p>Parcourez la liste et trouvez l’artisan idéal.</p>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">3. Le contacter</h2>
          <p>Envoyez-lui un message via le formulaire de contact.</p>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">4. Réponse sous 48h</h2>
          <p>L’artisan vous recontactera dans les 48 heures.</p>
        </div>

      </div>

    </section>
  );
}
