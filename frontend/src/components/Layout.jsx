import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f1f8ff] text-[#384050]">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
