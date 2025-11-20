import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ArtisanDetailPage from "./pages/ArtisanDetailPage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorie/:slug" element={<CategoryPage />} />
        <Route path="/artisans/:id" element={<ArtisanDetailPage />} />
        {/* Pages légales vides */}
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
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
