import { useNav } from "../context/NavigationContext";
import PageBanner from "../components/PageBanner";

const gadgetCategories = [
  {
    icon: "📱",
    title: "Smartphones",
    desc: "Latest Android and iOS smartphones from top brands — Samsung, Apple, Redmi, Realme, Vivo, OPPO and more.",
    color: "from-blue-400 to-indigo-500",
    items: ["Samsung Galaxy Series", "Apple iPhone", "Redmi / Poco", "Realme", "Vivo / iQOO", "OPPO / OnePlus"],
  },
  {
    icon: "🎧",
    title: "Audio Devices",
    desc: "Premium earphones, TWS earbuds, Bluetooth speakers, headphones and neckbands for the best audio experience.",
    color: "from-purple-400 to-violet-600",
    items: ["TWS Earbuds", "Bluetooth Speakers", "Neckbands", "Over-ear Headphones", "Wired Earphones", "Smart Soundbars"],
  },
  {
    icon: "⌚",
    title: "Smart Watches",
    desc: "Fitness trackers and smart watches that monitor your health and keep you connected throughout the day.",
    color: "from-rose-400 to-pink-600",
    items: ["Fitness Bands", "Smart Watches", "Health Monitors", "Sports Watches", "Kids Smart Watch", "GPS Watches"],
  },
  {
    icon: "💻",
    title: "Tablets & Laptops",
    desc: "Portable computing devices for work and entertainment — tablets, laptops, and Chromebooks at great prices.",
    color: "from-teal-400 to-cyan-600",
    items: ["Android Tablets", "iPad Series", "Budget Laptops", "Gaming Laptops", "Chromebooks", "2-in-1 Devices"],
  },
  {
    icon: "🔌",
    title: "Chargers & Cables",
    desc: "Fast chargers, power banks, USB-C cables, wireless chargers and all accessories to keep your devices powered.",
    color: "from-orange-400 to-amber-500",
    items: ["Fast Chargers", "Power Banks", "USB-C Cables", "Wireless Chargers", "Multi-port Hubs", "Car Chargers"],
  },
  {
    icon: "📷",
    title: "Cameras & Accessories",
    desc: "DSLR cameras, action cameras, webcams, selfie sticks, tripods and photography accessories for every need.",
    color: "from-green-400 to-emerald-600",
    items: ["Action Cameras", "Webcams", "Selfie Sticks", "Tripods", "Memory Cards", "Camera Cases"],
  },
  {
    icon: "🎮",
    title: "Gaming Accessories",
    desc: "Controllers, gaming headsets, mouse, keyboards, and gaming chairs for the ultimate gaming setup.",
    color: "from-red-400 to-rose-600",
    items: ["Game Controllers", "Gaming Headsets", "Gaming Mouse", "Mechanical Keyboards", "Gaming Monitors", "Cooling Pads"],
  },
  {
    icon: "🏠",
    title: "Smart Home Devices",
    desc: "Smart plugs, LED strips, security cameras, Wi-Fi routers, and home automation gadgets for a connected home.",
    color: "from-cyan-400 to-blue-500",
    items: ["Smart Plugs", "LED Smart Strips", "CCTV Cameras", "Wi-Fi Routers", "Smart Bulbs", "Doorbells"],
  },
];

const brands = [
  "Samsung", "Apple", "Redmi", "Realme", "Vivo", "OPPO",
  "OnePlus", "Motorola", "Nokia", "boAt", "Noise", "JBL",
  "Sony", "Lenovo", "HP", "Dell", "Asus", "MI",
];

const GadgetsPage = () => {
  const { navigate } = useNav();

  return (
    <div>
      <PageBanner
        icon="📱"
        title="Smart Gadgets & Mobile Shop"
        subtitle="Latest smartphones, earbuds, smartwatches, accessories and trending tech gadgets — all available at our Tirupur store."
        breadcrumb="Smart Gadgets"
      />

      <div className="bg-white">
        {/* ─── Mobile Shop Banner ─── */}
        <div
          className="py-10 text-white text-center"
          style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)" }}
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold">
              {["🏪 Visit Our Mobile Shop", "📱 Latest Models In Stock", "🔧 Repair & Service", "💳 EMI Available", "🎁 Best Deals Daily"].map((item) => (
                <span key={item} className="flex items-center gap-1 text-indigo-100">{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Categories Grid ─── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-5 py-2 text-pink-600 text-sm font-bold uppercase tracking-widest">
                📱 Trending Smart Gadgets — 8 Categories
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gadgetCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="group bg-white rounded-2xl border border-pink-100 shadow hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className={`h-2 bg-gradient-to-r ${cat.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className={`w-14 h-14 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center text-2xl mb-4 shadow group-hover:scale-110 transition-transform duration-300`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">{cat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{cat.desc}</p>

                    <ul className="space-y-1.5 mb-5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.color} flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => navigate("contact")}
                      className={`w-full py-2.5 text-center text-white text-sm font-bold rounded-xl bg-gradient-to-r ${cat.color} shadow hover:scale-[1.02] transition-all`}
                    >
                      📞 Enquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Brands ─── */}
        <section className="py-12" style={{ background: "linear-gradient(135deg, #fff0f6 0%, #fce7f3 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                Top Brands We <span className="shimmer-text">Carry</span>
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="px-5 py-2.5 bg-white border border-pink-100 rounded-xl font-black text-sm text-gray-700 shadow hover:shadow-md hover:border-pink-300 hover:text-pink-600 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Mobile Repair ─── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "linear-gradient(135deg, #ec4899 0%, #be185d 50%, #9f1239 100%)" }}
            >
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1">
                  <div className="text-5xl mb-4">🔧</div>
                  <h2 className="text-3xl md:text-4xl font-black mb-3">Mobile Repair & Services</h2>
                  <p className="text-pink-100 text-base mb-6 max-w-lg">
                    Screen replacement, battery change, software issues, charging port repair, water damage repair and all mobile-related service — by expert technicians in Tirupur.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "📱 Screen Replacement", "🔋 Battery Change",
                      "💧 Water Damage Fix", "🔌 Charging Port Repair",
                      "📡 Network Issues Fix", "🛡️ Software Repair",
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm font-semibold text-pink-100">
                        <span className="w-2 h-2 bg-pink-200 rounded-full flex-shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => navigate("contact")}
                    className="px-8 py-4 bg-white text-pink-600 font-black text-lg rounded-full shadow hover:scale-105 transition-all text-center"
                  >
                    📞 Enquire Now
                  </button>
                  <a
                    href="https://wa.me/919092947426"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-green-500 text-white font-bold text-lg rounded-full shadow hover:scale-105 transition-all text-center"
                  >
                    💬 WhatsApp Us
                  </a>
                  <button
                    onClick={() => navigate("contact")}
                    className="px-8 py-4 bg-white/20 text-white font-bold rounded-full border border-white/40 hover:bg-white/30 hover:scale-105 transition-all"
                  >
                    📩 Send Query
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GadgetsPage;
