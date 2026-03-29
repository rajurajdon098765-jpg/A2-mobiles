import { NavigationProvider, useNav } from "./context/NavigationContext";
import Navbar from "./components/Navbar";
import MarqueeStrip from "./components/MarqueeStrip";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";
import UtilitiesPage from "./pages/UtilitiesPage";
import GovDocsPage from "./pages/GovDocsPage";
import GadgetsPage from "./pages/GadgetsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const PageRenderer = () => {
  const { currentPage } = useNav();

  const renderPage = () => {
    switch (currentPage) {
      case "home":      return <HomePage />;
      case "travel":    return <TravelPage />;
      case "utilities": return <UtilitiesPage />;
      case "govdocs":   return <GovDocsPage />;
      case "gadgets":   return <GadgetsPage />;
      case "about":     return <AboutPage />;
      case "contact":   return <ContactPage />;
      default:          return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif]">
      <Navbar />

      {/* Sticky marquee just below navbar */}
      <div className="sticky top-[88px] z-40">
        <MarqueeStrip />
      </div>

      {/* Page Content */}
      <main>{renderPage()}</main>

      <Footer />

      {/* ─── Floating Buttons ─── */}
      {/* WhatsApp */}
      <a
        href="https://wa.me/919092947426"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <span className="text-2xl">💬</span>
      </a>

      {/* Call */}
      <a
        href="tel:9092947426"
        className="fixed bottom-24 right-5 z-50 w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
        title="Call Us"
      >
        <span className="text-2xl">📞</span>
      </a>

      {/* Back to Top (always visible) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-[9.5rem] right-5 z-50 w-14 h-14 bg-white border-2 border-pink-400 text-pink-500 rounded-full flex items-center justify-center shadow-xl hover:bg-pink-50 hover:scale-110 transition-all duration-300"
        title="Back to Top"
      >
        <span className="text-xl font-black">↑</span>
      </button>
    </div>
  );
};

function App() {
  return (
    <NavigationProvider>
      <PageRenderer />
    </NavigationProvider>
  );
}

export default App;
