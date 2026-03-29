import { useNav } from "../context/NavigationContext";
import PageBanner from "../components/PageBanner";

const travelServices = [
  {
    icon: "✈️",
    title: "Flight Booking",
    desc: "Book domestic and international flights at the best prices. Compare airlines, check schedules, and get instant confirmation. We handle all major airlines with ease.",
    cta: "Book Flight",
    color: "from-sky-400 to-blue-500",
    features: ["Domestic & International", "All Major Airlines", "Instant E-Ticket", "Best Fares"],
  },
  {
    icon: "🚌",
    title: "Bus Booking",
    desc: "Reserve bus tickets for intercity and interstate travel across India. Choose your seat, travel class, and operator with real-time availability.",
    cta: "Book Bus",
    color: "from-green-400 to-emerald-500",
    features: ["All Operators", "Seat Selection", "Real-time Avail.", "E-Ticket"],
  },
  {
    icon: "🏨",
    title: "Hotel Booking",
    desc: "Find and book hotels ranging from budget stays to luxury resorts. Get great deals on accommodation for any destination across India and abroad.",
    cta: "Book Hotel",
    color: "from-amber-400 to-orange-500",
    features: ["Budget to Luxury", "Top Destinations", "Instant Booking", "Best Prices"],
  },
  {
    icon: "🚆",
    title: "Train Ticket Booking",
    desc: "Book Indian Railways tickets hassle-free. Check PNR status, seat availability, and travel across India with confirmed tickets for all train classes.",
    cta: "Book Train",
    color: "from-indigo-400 to-purple-500",
    features: ["All Classes", "Tatkal Available", "PNR Status", "Instant Confirm"],
  },
  {
    icon: "🎬",
    title: "Movie Ticket Booking",
    desc: "Book movie tickets for all the latest blockbusters at cinemas in Tirupur and across Tamil Nadu. Choose your seats and enjoy the show!",
    cta: "Book Tickets",
    color: "from-pink-400 to-rose-500",
    features: ["All Cinemas", "Seat Chooser", "Tamil & Hindi", "Latest Movies"],
  },
  {
    icon: "🌴",
    title: "Package & Tour",
    desc: "Explore curated travel packages and tour options for families, couples, and groups. We craft unforgettable experiences at affordable rates.",
    cta: "View Packages",
    color: "from-teal-400 to-cyan-500",
    features: ["Family Packages", "Honeymoon Tours", "Group Travel", "Custom Plans"],
  },
  {
    icon: "🇮🇳",
    title: "Domestic Travel",
    desc: "Complete travel planning for destinations across India — from Kanyakumari to Kashmir. We arrange flights, trains, buses, hotels, and more.",
    cta: "Plan Domestic Trip",
    color: "from-orange-400 to-red-400",
    features: ["Pan India", "Multi-modal", "Custom Routes", "End-to-End"],
  },
  {
    icon: "🌍",
    title: "International Travel",
    desc: "Dream of travelling abroad? We assist with international flight booking, visa documentation guidance, travel insurance, and foreign packages.",
    cta: "Plan International Trip",
    color: "from-violet-400 to-purple-600",
    features: ["Visa Guidance", "Intl. Flights", "Travel Insurance", "Foreign Packages"],
  },
];

const TravelPage = () => {
  const { navigate } = useNav();

  return (
    <div>
      <PageBanner
        icon="✈️"
        title="Our Travel Services"
        subtitle="Seamless booking for flights, buses, trains, hotels, movies & curated tour packages — Domestic & International from Tirupur."
        breadcrumb="Travel Services"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Label */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-5 py-2 text-pink-600 text-sm font-bold uppercase tracking-widest">
              🧳 8 Travel Services Available
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {travelServices.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl border border-pink-100 shadow hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Color Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl mb-4 shadow group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-black text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.features.map((f) => (
                      <span key={f} className="text-[10px] bg-pink-50 text-pink-600 border border-pink-100 font-semibold px-2 py-0.5 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => navigate("contact")}
                    className={`w-full py-2.5 text-center text-white text-sm font-bold rounded-xl bg-gradient-to-r ${service.color} shadow hover:scale-[1.02] hover:shadow-md transition-all duration-200`}
                  >
                    📞 {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-14 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Need a Custom Travel Plan?</h3>
            <p className="text-gray-500 mb-6 max-w-lg mx-auto">
              Contact A2 Shiva Smart Services in Tirupur and we'll plan your perfect trip from start to finish!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:9092947426"
                className="px-7 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all"
              >
                📞 Call: 9092947426
              </a>
              <a
                href="tel:9092947424"
                className="px-7 py-3 bg-white text-pink-600 font-bold rounded-full border-2 border-pink-400 hover:bg-pink-50 hover:scale-105 transition-all shadow"
              >
                📞 Call: 9092947424
              </a>
              <button
                onClick={() => navigate("contact")}
                className="px-7 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 hover:scale-105 transition-all shadow"
              >
                📩 Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelPage;
