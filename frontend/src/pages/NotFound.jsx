import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="text-blue-600 underline">
        Retour à l’accueil
      </Link>
    </div>
  );
}
