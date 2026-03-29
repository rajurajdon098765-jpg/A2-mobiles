import { useNav, Page } from "../context/NavigationContext";

const Footer = () => {
  const { navigate } = useNav();

  const quickLinks: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "Travel Services", page: "travel" },
    { label: "Utilities & Banking", page: "utilities" },
    { label: "Gov & More Services", page: "govdocs" },
    { label: "Smart Gadgets", page: "gadgets" },
    { label: "About Us", page: "about" },
    { label: "Contact Us", page: "contact" },
  ];

  const travelLinks = [
    "Flight Booking", "Bus Booking", "Hotel Booking", "Train Booking",
    "Movie Booking", "Package & Tour", "Domestic Travel", "International Travel",
  ];

  const utilLinks = [
    "Mobile Recharge", "Online Payment", "Money Transfer", "AEPS Service",
    "Account Opening", "Aadhaar Seeding",
  ];

  return (
    <footer>
      {/* Main Footer */}
      <div
        className="pt-16 pb-10"
        style={{ background: "linear-gradient(135deg, #1a0010 0%, #2d0018 50%, #1a0010 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:col-span-1">
              <button onClick={() => navigate("home")} className="flex items-center gap-3 mb-5 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-white font-black text-base">A2</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-black text-base leading-tight">A2 Shiva</div>
                  <div className="text-pink-400 text-[10px] font-bold tracking-widest uppercase">Smart Services</div>
                </div>
              </button>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Tirupur's most trusted one-stop service hub for Travel, Banking, Government Documents, Insurance, Stationery & Smart Gadgets.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-pink-400">📍</span>
                  <span>Tirupur, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-pink-400">📞</span>
                  <a href="tel:9092947426" className="hover:text-pink-400 transition">9092947426</a>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-pink-400">📞</span>
                  <a href="tel:9092947424" className="hover:text-pink-400 transition">9092947424</a>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-pink-400">✉️</span>
                  <a href="mailto:armobile2022@gmail.com" className="hover:text-pink-400 transition text-xs">armobile2022@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-black text-base mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-pink-500 rounded-full block" />
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => navigate(link.page)}
                      className="text-gray-400 text-sm hover:text-pink-400 transition flex items-center gap-2"
                    >
                      <span className="text-pink-600 text-xs">›</span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Services */}
            <div>
              <h3 className="text-white font-black text-base mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-pink-500 rounded-full block" />
                Travel Services
              </h3>
              <ul className="space-y-2.5">
                {travelLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => navigate("travel")}
                      className="text-gray-400 text-sm hover:text-pink-400 transition flex items-center gap-2"
                    >
                      <span className="text-pink-600 text-xs">›</span>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utilities + CTA */}
            <div>
              <h3 className="text-white font-black text-base mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-pink-500 rounded-full block" />
                Banking & Utilities
              </h3>
              <ul className="space-y-2.5 mb-7">
                {utilLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => navigate("utilities")}
                      className="text-gray-400 text-sm hover:text-pink-400 transition flex items-center gap-2"
                    >
                      <span className="text-pink-600 text-xs">›</span>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919092947426"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm rounded-xl transition hover:scale-105 shadow"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-pink-800 to-transparent" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} <span className="text-pink-400 font-bold">A2 Shiva Smart Services</span> — Tirupur, Tamil Nadu. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a href="tel:9092947426" className="hover:text-pink-400 transition">📞 9092947426</a>
              <span className="text-gray-700">|</span>
              <a href="mailto:armobile2022@gmail.com" className="hover:text-pink-400 transition">✉️ Email Us</a>
              <span className="text-gray-700">|</span>
              <span className="text-pink-400">📍 Tirupur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
