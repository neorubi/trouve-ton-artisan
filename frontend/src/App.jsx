import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ArtisanListPage from "./pages/ArtisanListPage.jsx";
import ArtisanDetailPage from "./pages/ArtisanDetailPage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorie/:slug" element={<CategoryPage />} />
        <Route path="/artisans" element={<ArtisanListPage />} />
        <Route path="/artisans/:id" element={<ArtisanDetailPage />} />
        <Route
          path="/mentions-legales"
          element={<LegalPage title="Mentions légales" />}
        />
        <Route
          path="/donnees-personnelles"
          element={<LegalPage title="Données personnelles" />}
        />
        <Route
          path="/accessibilite"
          element={<LegalPage title="Accessibilité" />}
        />
        <Route path="/cookies" element={<LegalPage title="Cookies" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

