import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import ArtisanList from "./pages/ArtisanList";
import Artisan from "./pages/Artisan";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Catégories */}
          <Route path="/categorie/:slug" element={<Category />} />

          {/* Liste artisans */}
          <Route path="/artisans" element={<ArtisanList />} />

          {/* Fiche artisan */}
          <Route path="/artisan/:id" element={<Artisan />} />

          {/* Pages légales */}
          <Route path="/legal/:type" element={<Legal />} />

          {/* Page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

