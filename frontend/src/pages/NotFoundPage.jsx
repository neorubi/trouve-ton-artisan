import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4">
      <img
        src="https://http.cat/404"
        alt="404 - Page non trouvée"
        className="max-w-xs rounded-2xl shadow-md mb-2"
      />
      <h1 className="text-2xl font-semibold text-[#00497c]">
        Oups, page non trouvée
      </h1>
      <p className="text-sm text-slate-600 max-w-md">
        La page que vous avez demandée n’existe pas ou plus. Retournez à
        l’accueil ou choisissez une catégorie d’artisans.
      </p>
      <Link
        to="/"
        className="px-4 py-2 rounded-md bg-[#0074c7] text-white text-sm font-semibold hover:bg-[#005c9c]"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}

export default NotFoundPage;
