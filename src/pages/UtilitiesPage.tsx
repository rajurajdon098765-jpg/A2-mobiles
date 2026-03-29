import { useNav } from "../context/NavigationContext";
import PageBanner from "../components/PageBanner";

const utilityServices = [
  {
    icon: "📱",
    title: "Mobile & DTH Recharge",
    desc: "Instant recharge for all mobile networks (Jio, Airtel, Vi, BSNL) and DTH services. Get it done in seconds with the best plans available.",
    cta: "Recharge Now",
    color: "from-blue-400 to-cyan-500",
    features: ["All Networks", "DTH Recharge", "Data Plans", "Instant Credit"],
    badge: "⚡ Instant",
  },
  {
    icon: "💳",
    title: "Online Payment",
    desc: "Pay all your bills online — electricity, water, gas, broadband, insurance premiums, and more. Fast, secure, and convenient from one place.",
    cta: "Pay Bills",
    color: "from-emerald-400 to-green-600",
    features: ["Electricity Bill", "Water Bill", "Gas Bill", "Broadband"],
    badge: "🔐 Secure",
  },
  {
    icon: "💸",
    title: "Money Transfer",
    desc: "Send money to any bank account in India instantly and securely. IMPS / NEFT transfers done right here at our Tirupur service centre.",
    cta: "Transfer Money",
    color: "from-violet-400 to-purple-600",
    features: ["IMPS Transfer", "NEFT", "All Banks", "Instant Confirm"],
    badge: "🚀 Fast",
  },
  {
    icon: "🏧",
    title: "AEPS Service",
    desc: "Aadhaar Enabled Payment System — withdraw cash, check balance, and transfer funds using just your Aadhaar and fingerprint. No ATM card needed!",
    cta: "Use AEPS",
    color: "from-orange-400 to-amber-500",
    features: ["Cash Withdrawal", "Balance Check", "Fund Transfer", "Aadhaar Auth"],
    badge: "🪪 Aadhaar",
  },
  {
    icon: "🏦",
    title: "New Account Opening",
    desc: "Open a Savings or Current Account with leading banks hassle-free. We assist with all documentation and help you get started with banking quickly.",
    cta: "Open Account",
    color: "from-pink-400 to-rose-600",
    features: ["Savings Account", "Current Account", "Zero Balance", "Quick Process"],
    badge: "🆕 New Account",
  },
  {
    icon: "🪪",
    title: "Aadhaar Seeding",
    desc: "Link your Aadhaar number with your bank account, PAN card, and government schemes to unlock full digital benefits and direct subsidies.",
    cta: "Seed Aadhaar",
    color: "from-teal-400 to-cyan-600",
    features: ["Bank Linking", "PAN Linking", "Govt. Schemes", "DBT Benefits"],
    badge: "📋 Gov Benefit",
  },
];

const UtilitiesPage = () => {
  const { navigate } = useNav();

  return (
    <div>
      <PageBanner
        icon="🏦"
        title="Utilities & Banking"
        subtitle="Complete banking and utility services — Recharge, Payments, Money Transfer, AEPS, Account Opening & Aadhaar Seeding at one place in Tirupur."
        breadcrumb="Utilities & Banking"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-5 py-2 text-pink-600 text-sm font-bold uppercase tracking-widest">
              🏦 6 Banking & Utility Services
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {utilityServices.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl border border-pink-100 shadow hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl shadow group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <span className="text-[11px] bg-pink-100 text-pink-600 font-bold px-3 py-1 rounded-full border border-pink-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>

                  <div className="grid grid-cols-2 gap-1.5 mb-5">
                    {service.features.map((f) => (
                      <span key={f} className="flex items-center gap-1 text-xs text-gray-600 font-semibold">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full flex-shrink-0" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate("contact")}
                    className={`w-full py-3 text-center text-white text-sm font-bold rounded-xl bg-gradient-to-r ${service.color} shadow hover:scale-[1.02] hover:shadow-md transition-all duration-200`}
                  >
                    📞 {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* AEPS Highlight Banner */}
          <div
            className="mt-14 rounded-2xl p-8 md:p-10 text-white overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #ec4899, #be185d, #f43f5e)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl">🏧</span>
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">Special Feature</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-2">AEPS — Bank at Our Shop!</h3>
                <p className="text-pink-100 text-base max-w-lg">
                  No need to visit a bank or ATM! Use our AEPS service to withdraw cash, check your bank balance, and transfer money using just your Aadhaar number and fingerprint.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => navigate("contact")}
                  className="px-8 py-3 bg-white text-pink-600 font-black rounded-full shadow hover:scale-105 transition-all text-center"
                >
                  📞 Enquire Now
                </button>
                <button
                  onClick={() => navigate("contact")}
                  className="px-8 py-3 bg-white/20 text-white font-bold rounded-full border border-white/40 hover:bg-white/30 hover:scale-105 transition-all text-center"
                >
                  📩 Send Query
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UtilitiesPage;
