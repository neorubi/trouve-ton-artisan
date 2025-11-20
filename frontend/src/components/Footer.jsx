import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#00497c] text-blue-100 text-sm mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 grid gap-4 md:grid-cols-2">
        <div>
          <div className="font-semibold text-white mb-2">
            Région Auvergne-Rhône-Alpes
          </div>
          <p>
            101 cours Charlemagne<br />
            CS 20033<br />
            69269 LYON CEDEX 02<br />
            France<br />
            +33 (0)4 26 73 40 00
          </p>
        </div>
        <div className="md:text-right">
          <div className="font-semibold text-white mb-2">Pages légales</div>
          <div className="flex flex-col gap-1 md:items-end">
            <Link to="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
            <Link to="/donnees-personnelles" className="hover:underline">
              Données personnelles
            </Link>
            <Link to="/accessibilite" className="hover:underline">
              Accessibilité
            </Link>
            <Link to="/cookies" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-2 border-t border-blue-900/40">
        © {new Date().getFullYear()} Région Auvergne-Rhône-Alpes — Projet
        pédagogique "Trouve ton artisan".
      </div>
    </footer>
  );
}

export default Footer;
