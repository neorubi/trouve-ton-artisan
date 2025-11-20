import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
      <div className="text-6xl">😕</div>
      <h1 className="text-2xl font-semibold text-[#00497c]">
        Page non trouvée
      </h1>
      <p className="text-sm text-gray-700 max-w-md">
        La page que vous avez demandée n'existe pas ou n'est plus disponible.
      </p>
      <Link
        to="/"
        className="mt-2 inline-block bg-[#0074c7] text-white px-4 py-2 rounded hover:bg-[#00497c] text-sm"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFoundPage;
