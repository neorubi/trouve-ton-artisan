import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-100 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="font-semibold text-sm mb-2">
            Région Auvergne-Rhône-Alpes – Antenne de Lyon
          </p>
          <p className="text-xs leading-relaxed">
            101 cours Charlemagne
            <br />
            CS 20033
            <br />
            69269 LYON CEDEX 02
            <br />
            France
            <br />
            +33 (0)4 26 73 40 00
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1 text-xs">
          <p className="font-semibold mb-1">Pages légales</p>
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
      <div className="text-[11px] text-center bg-slate-950 py-2 text-slate-400">
        &copy; {new Date().getFullYear()} Région Auvergne-Rhône-Alpes — Projet
        pédagogique « Trouve ton artisan »
      </div>
    </footer>
  );
}
