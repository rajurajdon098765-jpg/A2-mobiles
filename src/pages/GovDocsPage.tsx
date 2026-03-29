import { useNav } from "../context/NavigationContext";
import PageBanner from "../components/PageBanner";

const govDocServices = [
  { icon: "🪪", label: "Aadhaar Card (New / Update)", desc: "Apply for new Aadhaar or update existing details." },
  { icon: "💳", label: "PAN Card", desc: "Apply for PAN card — new, corrections, or duplicate." },
  { icon: "🚗", label: "Driving Licence (DL)", desc: "Apply for learner's or permanent driving licence." },
  { icon: "📘", label: "Passport Assistance", desc: "Guidance and form filling for new or renewal passport." },
  { icon: "🗳️", label: "Voter ID Card", desc: "Apply for new Voter ID or make corrections." },
  { icon: "📜", label: "Birth Certificate", desc: "Apply for or get a certified copy of birth certificate." },
  { icon: "🏘️", label: "Community Certificate", desc: "Apply for SC/ST/OBC community certificate." },
  { icon: "💰", label: "Income Certificate", desc: "Income certificate for government scheme eligibility." },
  { icon: "🏠", label: "Residence Certificate", desc: "Permanent / temporary residence proof documentation." },
  { icon: "🧾", label: "Ration Card (New/Update)", desc: "Apply for new ration card or update family details." },
  { icon: "📋", label: "GST Registration", desc: "Get your business GST registered quickly and easily." },
  { icon: "🏢", label: "Udyam / MSME Registration", desc: "Register your small business under MSME scheme." },
];

const insuranceServices = [
  {
    icon: "🚗",
    title: "Vehicle Insurance",
    desc: "Get quotes and apply for two-wheeler and four-wheeler insurance from top providers. Renew your policy or apply for a new one hassle-free.",
    features: ["Two Wheeler", "Four Wheeler", "Third Party", "Comprehensive"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Personal / Family Insurance",
    desc: "Protect yourself and your family with the right health and life insurance policy. We help you compare and choose the best plan for your needs.",
    features: ["Health Insurance", "Life Insurance", "Term Plans", "Family Floater"],
    color: "from-rose-400 to-pink-600",
  },
];

const stationeryItems = [
  "📝 Notebooks & Diaries", "✏️ Pens & Pencils", "📁 Files & Folders", "📌 Staplers & Clips",
  "🗂️ Index Cards", "📐 Rulers & Geometry Sets", "✂️ Scissors & Glue", "🖨️ Printer Paper (A4/A3)",
  "🖊️ Markers & Highlighters", "📦 Envelopes & Covers", "🏷️ Labels & Stickers", "🖥️ Ink Cartridges",
  "📚 School Textbooks", "🎨 Drawing Supplies", "🧮 Calculators", "💼 Office Supplies",
];

const GovDocsPage = () => {
  const { navigate } = useNav();

  return (
    <div>
      <PageBanner
        icon="📋"
        title="Gov, Insurance & More"
        subtitle="Government Document Services, Insurance Queries, Complete A to Z Stationery — all under one roof in Tirupur."
        breadcrumb="Gov & More Services"
      />

      <div className="bg-white">

        {/* ─── GOVERNMENT DOCUMENTS ─── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <div className="inline-block bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 text-orange-600 text-xs font-bold mb-3 uppercase tracking-widest">
                  Section 01
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                  Government <span className="shimmer-text">Document Services</span>
                </h2>
                <p className="text-gray-500 mt-1 text-base">All government documents at one place — quick, easy & reliable.</p>
              </div>
              <button
                type="button"
                onClick={() => navigate("contact")}
                className="flex-shrink-0 px-7 py-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-bold rounded-full shadow hover:scale-105 transition-all"
              >
                📞 Apply Now
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {govDocServices.map((doc) => (
                <div
                  key={doc.label}
                  className="group bg-white border border-pink-100 rounded-xl p-5 shadow hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                    {doc.icon}
                  </div>
                  <h4 className="font-black text-gray-900 text-sm mb-1.5 leading-tight">{doc.label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{doc.desc}</p>
                  <button type="button" onClick={() => navigate("contact")} className="text-xs text-orange-500 font-bold hover:text-orange-600 flex items-center gap-1">
                    📞 Enquire →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
        </div>

        {/* ─── INSURANCE QUERY ─── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-block bg-rose-50 border border-rose-200 rounded-full px-4 py-1.5 text-rose-600 text-xs font-bold mb-3 uppercase tracking-widest">
                Section 02
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                Insurance <span className="shimmer-text">Query Services</span>
              </h2>
              <p className="text-gray-500 mt-1 text-base max-w-lg mx-auto">
                Vehicle & personal insurance guidance from experts — we help you choose the right plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {insuranceServices.map((ins) => (
                <div
                  key={ins.title}
                  className="group bg-white rounded-2xl border border-pink-100 shadow hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${ins.color}`} />
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${ins.color} rounded-2xl flex items-center justify-center text-3xl mb-5 shadow group-hover:scale-110 transition-transform`}>
                      {ins.icon}
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{ins.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{ins.desc}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {ins.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-700 font-semibold bg-pink-50 rounded-lg px-3 py-2">
                          <span className="w-2 h-2 bg-pink-400 rounded-full" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate("contact")}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${ins.color} text-white font-bold rounded-full shadow hover:scale-105 transition-all`}
                    >
                      📞 Get Insurance Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
        </div>

        {/* ─── STATIONERY ─── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <div className="inline-block bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 text-purple-600 text-xs font-bold mb-3 uppercase tracking-widest">
                  Section 03
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                  Complete A to Z <span className="shimmer-text">Stationery</span>
                </h2>
                <p className="text-gray-500 mt-1 text-base">Everything from pencils to printers — we've got it all in Tirupur.</p>
              </div>
              <a
                href="tel:9092947426"
                className="flex-shrink-0 px-7 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-bold rounded-full shadow hover:scale-105 transition-all"
              >
                🛒 Visit Our Shop
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {stationeryItems.map((item) => (
                <div
                  key={item}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-3.5 text-center text-sm font-semibold text-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer hover:border-pink-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm font-medium">
                🛒 And much more! Visit our shop at Tirupur for the complete range.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-10 pb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: "linear-gradient(135deg, #ec4899, #be185d)" }}
            >
              <h3 className="text-2xl font-black mb-2">Need Any of These Services?</h3>
              <p className="text-pink-100 mb-6">Visit us at Tirupur or call us directly — we're always ready to help!</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="tel:9092947426" className="px-7 py-3 bg-white text-pink-600 font-black rounded-full hover:scale-105 transition-all shadow">
                  📞 9092947426
                </a>
                <a href="tel:9092947424" className="px-7 py-3 bg-white text-pink-600 font-black rounded-full hover:scale-105 transition-all shadow">
                  📞 9092947424
                </a>
                <button
                  onClick={() => navigate("contact")}
                  className="px-7 py-3 bg-white/20 text-white font-bold rounded-full border border-white/40 hover:bg-white/30 hover:scale-105 transition-all"
                >
                  📩 Send Enquiry
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GovDocsPage;
