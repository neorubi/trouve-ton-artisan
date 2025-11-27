import { Link } from "react-router-dom";

function Footer() {
  const legals = [
    { slug: "mentions-legales", label: "Mentions légales" },
    { slug: "donnees-personnelles", label: "Données personnelles" },
    { slug: "accessibilite", label: "Accessibilité" },
    { slug: "cookies", label: "Cookies" },
  ];

  return (
    <footer className="bg-[#00497c] text-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="font-semibold mb-2 text-sm uppercase tracking-wide">
            Pages légales
          </h2>
          <ul className="space-y-1 text-sm">
            {legals.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/legal/${p.slug}`}
                  className="hover:underline hover:text-[#82b864]"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2 text-sm uppercase tracking-wide">
            Antenne de Lyon
          </h2>
          <p className="text-sm leading-relaxed">
            101 cours Charlemagne<br />
            CS 20033<br />
            69269 LYON CEDEX 02<br />
            France
          </p>
          <p className="mt-2 text-sm">+33 (0)4 26 73 40 00</p>
        </div>
      </div>
      <div className="text-center text-xs py-2 bg-[#00355a]">
        © {new Date().getFullYear()} Région Auvergne-Rhône-Alpes — Trouve ton
        artisan
      </div>
    </footer>
  );
}

export default Footer;
