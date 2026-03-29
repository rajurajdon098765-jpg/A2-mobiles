import { useNav } from "../context/NavigationContext";
import PageBanner from "../components/PageBanner";

const team = [
  { name: "A2 Shiva", role: "Founder & Manager", icon: "👨‍💼", desc: "Leading the services with 5+ years of experience in digital services and mobile retail." },
  { name: "Service Team", role: "Travel & Booking Experts", icon: "✈️", desc: "Dedicated professionals handling all travel bookings and package queries." },
  { name: "Finance Team", role: "Banking & Utilities", icon: "🏦", desc: "Expert team for AEPS, money transfers, recharge, and financial services." },
  { name: "Tech Support", role: "Mobile & Gadgets", icon: "🔧", desc: "Trained technicians for mobile sales, repair, and smart gadget services." },
];

const milestones = [
  { year: "2019", event: "A2 Shiva Smart Services founded in Tirupur", icon: "🚀" },
  { year: "2020", event: "Expanded to travel bookings & AEPS services", icon: "✈️" },
  { year: "2021", event: "Launched government document assistance", icon: "📋" },
  { year: "2022", event: "Added Smart Gadgets & Mobile Shop", icon: "📱" },
  { year: "2023", event: "Crossed 5000+ satisfied customers milestone", icon: "🏆" },
  { year: "2024", event: "Full digital services suite launched", icon: "💻" },
  { year: "2025", event: "Tirupur's most trusted one-stop service hub", icon: "⭐" },
];

const AboutPage = () => {
  const { navigate } = useNav();

  return (
    <div>
      <PageBanner
        icon="ℹ️"
        title="About A2 Shiva Smart Services"
        subtitle="Tirupur's most trusted one-stop destination for Travel, Banking, Government Services, Insurance, Stationery & Smart Gadgets."
        breadcrumb="About Us"
      />

      <div className="bg-white">
        {/* ─── ABOUT INTRO ─── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <div>
                <div className="inline-block bg-pink-50 border border-pink-200 rounded-full px-4 py-1.5 text-pink-600 text-xs font-bold mb-4 uppercase tracking-widest">
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-5 leading-tight">
                  Serving <span className="shimmer-text">Tirupur</span> with Smart Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A2 Shiva Smart Services was established with a simple vision — to bring all essential digital, travel, banking, and government services under one roof for the people of Tirupur and surrounding regions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We understand that people in Tirupur need quick, reliable, and affordable services. That's why we built a complete service centre that handles everything from booking flights to opening bank accounts, from printing government documents to selling the latest smartphones.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With over 5 years of experience and 5000+ happy customers, we're Tirupur's most trusted one-stop smart service hub.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate("contact")}
                    className="px-7 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full shadow hover:scale-105 transition-all"
                  >
                    📞 Contact Us
                  </button>
                  <a
                    href="https://wa.me/919092947426"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 bg-green-500 text-white font-bold rounded-full shadow hover:scale-105 transition-all"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              {/* Right Stats Box */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "😊", value: "5000+", label: "Happy Customers", color: "from-pink-400 to-rose-500" },
                  { icon: "⚡", value: "25+", label: "Services Offered", color: "from-violet-400 to-purple-500" },
                  { icon: "🏆", value: "5+", label: "Years of Service", color: "from-amber-400 to-orange-500" },
                  { icon: "📍", value: "Tirupur", label: "Our Location", color: "from-teal-400 to-cyan-500" },
                  { icon: "💳", value: "200+", label: "Daily Transactions", color: "from-blue-400 to-indigo-500" },
                  { icon: "⭐", value: "4.9/5", label: "Customer Rating", color: "from-green-400 to-emerald-500" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-pink-100 rounded-2xl p-5 shadow hover:shadow-md hover:-translate-y-1 transition-all text-center"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow`}>
                      {stat.icon}
                    </div>
                    <div className="text-xl font-black text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-semibold mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── LOCATION ─── */}
        <section
          className="py-14"
          style={{ background: "linear-gradient(135deg, #fff0f6 0%, #fce7f3 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-white border border-pink-200 rounded-full px-4 py-1.5 text-pink-600 text-xs font-bold mb-4 uppercase tracking-widest">
              📍 Location
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Find Us in <span className="shimmer-text">Tirupur</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto mb-8">
              Visit us at our service centre in Tirupur, Tamil Nadu. We are open 7 days a week to serve you better!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow text-center">
                <div className="text-3xl mb-2">📍</div>
                <h4 className="font-black text-gray-900 mb-1">Address</h4>
                <p className="text-gray-500 text-sm">Tirupur, Tamil Nadu, India</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow text-center">
                <div className="text-3xl mb-2">📞</div>
                <h4 className="font-black text-gray-900 mb-1">Phone</h4>
                <a href="tel:9092947426" className="block text-pink-600 font-bold text-sm hover:underline">9092947426</a>
                <a href="tel:9092947424" className="block text-pink-600 font-bold text-sm hover:underline">9092947424</a>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow text-center">
                <div className="text-3xl mb-2">✉️</div>
                <h4 className="font-black text-gray-900 mb-1">Email</h4>
                <a href="mailto:armobile2022@gmail.com" className="text-pink-600 font-bold text-sm hover:underline break-all">armobile2022@gmail.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MILESTONE TIMELINE ─── */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-pink-50 border border-pink-200 rounded-full px-4 py-1.5 text-pink-600 text-xs font-bold mb-4 uppercase tracking-widest">
                Our Journey
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                Our <span className="shimmer-text">Milestones</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 to-rose-400 -translate-x-1/2 hidden sm:block" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`flex items-center gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                      <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow hover:shadow-md transition-all">
                        <div className="text-3xl mb-2">{m.icon}</div>
                        <div className="text-pink-600 font-black text-xl mb-1">{m.year}</div>
                        <p className="text-gray-600 text-sm font-medium">{m.event}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 items-center justify-center flex-shrink-0 shadow-lg z-10 text-white font-black text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1 hidden sm:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TEAM ─── */}
        <section
          className="py-16"
          style={{ background: "linear-gradient(135deg, #fff0f6 0%, #fce7f3 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-white border border-pink-200 rounded-full px-4 py-1.5 text-pink-600 text-xs font-bold mb-4 uppercase tracking-widest">
                Our Team
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                The Team Behind <span className="shimmer-text">A2 Shiva</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl p-6 border border-pink-100 shadow hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow">
                    {member.icon}
                  </div>
                  <h3 className="font-black text-gray-900 text-base mb-1">{member.name}</h3>
                  <p className="text-pink-500 text-xs font-bold mb-3 uppercase tracking-wide">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Ready to Use Our <span className="shimmer-text">Services?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8">Visit us in Tirupur or call/WhatsApp us. We're always here to help!</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate("contact")}
                className="px-9 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-black text-base rounded-full shadow-xl hover:scale-105 hover:shadow-pink-200 transition-all"
              >
                📩 Contact Us Now
              </button>
              <a
                href="https://wa.me/919092947426"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 bg-green-500 text-white font-bold text-base rounded-full shadow-xl hover:scale-105 transition-all"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
