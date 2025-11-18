import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#00497c] text-white mt-10">
      <div className="max-w-5xl mx-auto p-6">

        <h2 className="text-xl font-semibold mb-2">Contacts (Antenne de Lyon)</h2>
        <p>101 cours Charlemagne<br/>CS 20033<br/>69269 LYON CEDEX 02<br/>France</p>
        <p className="mt-1 font-bold">+33 (0)4 26 73 40 00</p>

        <div className="flex flex-wrap gap-4 mt-6 text-sm">
          <Link to="/legal/mentions-legales" className="hover:underline">Mentions légales</Link>
          <Link to="/legal/donnees-personnelles" className="hover:underline">Données personnelles</Link>
          <Link to="/legal/accessibilite" className="hover:underline">Accessibilité</Link>
          <Link to="/legal/cookies" className="hover:underline">Cookies</Link>
        </div>

        <p className="text-center mt-6 text-xs opacity-70">
          © {new Date().getFullYear()} Région Auvergne Rhône-Alpes — Trouve Ton Artisan
        </p>

      </div>
    </footer>
  );
}
