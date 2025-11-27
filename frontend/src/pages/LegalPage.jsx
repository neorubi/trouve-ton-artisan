import { useParams } from "react-router-dom";

function LegalPage() {
  const { slug } = useParams();

  const titles = {
    "mentions-legales": "Mentions légales",
    "donnees-personnelles": "Données personnelles",
    accessibilite: "Accessibilité",
    cookies: "Cookies",
  };

  const title = titles[slug] || "Page légale";

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h1 className="text-xl font-semibold text-[#00497c] mb-2">{title}</h1>
      <p className="text-sm text-gray-700">
        Cette page est en construction. Son contenu sera complété par un cabinet
        spécialisé ultérieurement.
      </p>
    </div>
  );
}

export default LegalPage;
