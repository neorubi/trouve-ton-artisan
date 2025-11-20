import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ArtisanListPage from "./pages/ArtisanListPage.jsx";
import ArtisanDetailPage from "./pages/ArtisanDetailPage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorie/:categorieSlug" element={<CategoryPage />} />
        <Route path="/artisans" element={<ArtisanListPage />} />
        <Route path="/artisans/:id" element={<ArtisanDetailPage />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
