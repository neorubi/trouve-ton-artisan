import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#0074c7] text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Trouve Ton Artisan
        </Link>

        {/* Menu */}
        <nav className="flex gap-6 text-lg">
          <Link to="/categorie/batiment" className="hover:underline">Bâtiment</Link>
          <Link to="/categorie/services" className="hover:underline">Services</Link>
          <Link to="/categorie/fabrication" className="hover:underline">Fabrication</Link>
          <Link to="/categorie/alimentation" className="hover:underline">Alimentation</Link>
        </nav>

      </div>
    </header>
  );
}
