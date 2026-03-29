import { useState, useEffect } from "react";
import { useNav, Page } from "../context/NavigationContext";

const Navbar = () => {
  const { currentPage, navigate } = useNav();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks: { label: string; page: Page; icon: string }[] = [
    { label: "Home",            page: "home",      icon: "🏠" },
    { label: "Travel Services", page: "travel",    icon: "✈️" },
    { label: "Utilities & Banking", page: "utilities", icon: "🏦" },
    { label: "Gov & More",      page: "govdocs",   icon: "📋" },
    { label: "Smart Gadgets",   page: "gadgets",   icon: "📱" },
    { label: "About Us",        page: "about",     icon: "ℹ️" },
    { label: "Contact",         page: "contact",   icon: "📞" },
  ];

  const handleNav = (page: Page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-pink-100 bg-white" : "bg-white/98 backdrop-blur-md"
      }`}
    >
      {/* Top bar */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs py-1.5 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>📍 Tirupur, Tamil Nadu</span>
          <span className="hidden sm:inline">✉️ armobile2022@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:9092947426" className="hover:underline font-semibold">📞 9092947426</a>
          <span className="text-pink-200">|</span>
          <a href="tel:9092947424" className="hover:underline font-semibold">📞 9092947424</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-black text-base">A2</span>
            </div>
            <div className="text-left">
              <div className="text-base font-black text-gray-900 leading-tight">A2 Shiva</div>
              <div className="text-[10px] font-bold text-pink-500 tracking-widest uppercase leading-tight">Smart Services</div>
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  currentPage === link.page
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-200"
                    : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Call Button + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9092947426"
              className="hidden sm:flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-bold rounded-full shadow-md hover:shadow-pink-300 hover:scale-105 transition-all duration-200"
            >
              📞 Call Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-pink-50 transition"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`xl:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="bg-white border-t border-pink-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left ${
                currentPage === link.page
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow"
                  : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </button>
          ))}
          <a
            href="tel:9092947426"
            className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-xl shadow mt-2"
          >
            📞 Call: 9092947426
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
