import { useNav, Page } from "../context/NavigationContext";

const services = [
  {
    page: "travel" as Page,
    icon: "✈️",
    title: "Travel Services",
    desc: "Flight, Bus, Train, Hotel, Movie Booking & Tour Packages — Domestic & International",
    color: "from-sky-400 to-blue-500",
    badge: "7 Services",
  },
  {
    page: "utilities" as Page,
    icon: "🏦",
    title: "Utilities & Banking",
    desc: "Recharge, Online Payment, Money Transfer, AEPS, Account Opening & Aadhaar Seeding",
    color: "from-green-400 to-emerald-600",
    badge: "6 Services",
  },
  {
    page: "govdocs" as Page,
    icon: "📋",
    title: "Gov & More Services",
    desc: "Government Documents, Insurance Query, Complete A-Z Stationery & more",
    color: "from-orange-400 to-amber-500",
    badge: "4 Services",
  },
  {
    page: "gadgets" as Page,
    icon: "📱",
    title: "Smart Gadgets",
    desc: "Latest Smartphones, Accessories, Smart Devices & Mobile Shop services",
    color: "from-purple-400 to-violet-600",
    badge: "Mobile Shop",
  },
];

const stats = [
  { label: "Happy Customers", value: "5000+", icon: "😊" },
  { label: "Services Offered", value: "25+", icon: "⚡" },
  { label: "Years Experience", value: "5+", icon: "🏆" },
  { label: "Daily Transactions", value: "200+", icon: "💳" },
];

const whyUs = [
  { icon: "🔐", title: "100% Secure", desc: "Your data and transactions are completely safe with us." },
  { icon: "⚡", title: "Instant Service", desc: "Get things done quickly with our efficient smart service." },
  { icon: "💰", title: "Best Rates", desc: "Competitive pricing on all bookings and services." },
  { icon: "📍", title: "Local & Trusted", desc: "Proudly serving Tirupur and surrounding areas." },
  { icon: "🕐", title: "All Day Support", desc: "We are available to help you with any queries anytime." },
  { icon: "📜", title: "Expert Assistance", desc: "Professional guidance for every service we offer." },
];

const HomePage = () => {
  const { navigate } = useNav();

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
        style={{
          background:
            "linear-gradient(135deg, #fff0f6 0%, #fce7f3 35%, #ffe4ef 65%, #fff8fb 100%)",
        }}
      >
        {/* Blobs */}
        <div className="absolute top-20 left-8 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-25 animate-pulse" />
        <div className="absolute top-40 right-8 w-80 h-80 bg-rose-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-24 left-1/3 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }} />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle, #be185d 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-pink-200 rounded-full px-5 py-2 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="text-sm font-semibold text-pink-700">📍 Tirupur's #1 Smart Service Hub</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight mb-4">
            <span className="block">A2 Shiva</span>
            <span className="block shimmer-text">Smart Services</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Your trusted partner for <strong className="text-pink-600">Travel Bookings</strong>,{" "}
            <strong className="text-pink-600">Banking & Utilities</strong>,{" "}
            <strong className="text-pink-600">Government Services</strong>,{" "}
            <strong className="text-pink-600">Insurance</strong>,{" "}
            <strong className="text-pink-600">Stationery</strong> &{" "}
            <strong className="text-pink-600">Smart Gadgets</strong> in Tirupur.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate("contact")}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-base font-bold rounded-full shadow-xl shadow-pink-200 hover:scale-105 hover:shadow-pink-300 transition-all duration-300"
            >
              ✈️ Explore Services
            </button>
            <button
              onClick={() => navigate("contact")}
              className="px-8 py-4 bg-white text-pink-600 text-base font-bold rounded-full border-2 border-pink-400 hover:bg-pink-50 hover:scale-105 transition-all duration-300 shadow"
            >
              📞 Contact Us
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/70 backdrop-blur border border-pink-100 rounded-2xl p-5 shadow hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-2xl font-black text-pink-600">{s.value}</div>
                <div className="text-xs text-gray-500 font-semibold mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-pink-400 animate-bounce">
          <span className="text-xs font-semibold">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-pink-400 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-pink-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── QUICK ACCESS CARDS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-pink-50 border border-pink-200 rounded-full px-5 py-1.5 text-pink-600 text-sm font-bold mb-4 uppercase tracking-widest">
              Our Sections
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
              Everything You Need,{" "}
              <span className="shimmer-text">One Place</span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
              Navigate directly to any service section and get assistance instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <button
                key={s.page}
                onClick={() => navigate("contact")}
                className="group relative bg-white rounded-2xl border border-pink-100 p-6 shadow hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-2 transition-all duration-300 text-left overflow-hidden"
              >
                {/* Top gradient strip */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${s.color} rounded-t-2xl`} />

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-4 shadow group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-black text-gray-900 text-base leading-tight">{s.title}</h3>
                  <span className="text-[10px] bg-pink-100 text-pink-600 font-bold px-2 py-0.5 rounded-full">{s.badge}</span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>

                <div className="flex items-center gap-1 text-pink-500 font-bold text-sm group-hover:gap-2 transition-all">
                  Explore <span>→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #fff0f6 0%, #fce7f3 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-white border border-pink-200 rounded-full px-5 py-1.5 text-pink-600 text-sm font-bold mb-4 uppercase tracking-widest">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
              Why A2 Shiva{" "}
              <span className="shimmer-text">Smart Services?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-2xl p-7 border border-pink-100 shadow hover:shadow-lg hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm">
                  {w.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <button
              onClick={() => navigate("contact")}
              className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-black text-lg rounded-full shadow-xl shadow-pink-200 hover:scale-105 hover:shadow-pink-300 transition-all duration-300"
            >
              📞 Get In Touch With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
