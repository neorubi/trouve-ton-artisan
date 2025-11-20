import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 gap-4">
      <div className="text-6xl">😕</div>
      <h1 className="text-3xl font-bold">Page non trouvée</h1>
      <p className="text-sm text-slate-600 max-w-md">
        La page que vous recherchez n’existe pas ou n’est plus disponible.
        Utilisez le menu ou revenez à la page d’accueil.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-md bg-blue-700 text-white text-sm px-4 py-2 hover:bg-blue-800"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}
