import { useState } from "react";
import PageBanner from "../components/PageBanner";

const serviceOptions = [
  "Flight Booking", "Bus Booking", "Hotel Booking", "Train Ticket Booking",
  "Movie Ticket Booking", "Package & Tour", "Domestic Travel", "International Travel",
  "Mobile Recharge", "Online Payment", "Money Transfer", "AEPS Service",
  "New Account Opening", "Aadhaar Seeding", "Government Documents",
  "Vehicle Insurance", "Personal Insurance", "Stationery Purchase",
  "Smart Gadgets / Mobile", "Mobile Repair", "Other",
];

const contactInfo = [
  {
    icon: "📞",
    title: "Phone 1",
    value: "9092947426",
    link: "tel:9092947426",
    color: "from-pink-500 to-rose-500",
    sub: "Call or WhatsApp",
  },
  {
    icon: "📞",
    title: "Phone 2",
    value: "9092947424",
    link: "tel:9092947424",
    color: "from-rose-500 to-pink-700",
    sub: "Alternate Contact",
  },
  {
    icon: "✉️",
    title: "Email",
    value: "armobile2022@gmail.com",
    link: "mailto:armobile2022@gmail.com",
    color: "from-violet-500 to-purple-600",
    sub: "Drop us a message",
  },
  {
    icon: "📍",
    title: "Location",
    value: "Tirupur, Tamil Nadu",
    link: "#",
    color: "from-orange-400 to-amber-500",
    sub: "Visit our service centre",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "Chat with Us",
    link: "https://wa.me/919092947426",
    color: "from-green-400 to-emerald-600",
    sub: "Quick response guaranteed",
  },
  {
    icon: "🕐",
    title: "Working Hours",
    value: "Mon–Sun: 9AM–9PM",
    link: "#",
    color: "from-blue-400 to-cyan-500",
    sub: "Open all 7 days",
  },
];

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const encodeForm = (data: Record<string, string>) =>
    Object.entries(data)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const useNetlifyForm = import.meta.env.PROD;
    const targetUrl = useNetlifyForm
      ? "/"
      : "http://localhost:4000/api/contacts";

    const body = useNetlifyForm
      ? encodeForm({
          "form-name": "contact",
          "bot-field": "",
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
        })
      : JSON.stringify(form);

    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": useNetlifyForm
            ? "application/x-www-form-urlencoded"
            : "application/json",
        },
        body,
      });

      if (!response.ok) {
        if (!useNetlifyForm) {
          const data = await response.json();
          throw new Error(data?.error || "Unable to send your message.");
        }
        throw new Error("Unable to send your message.");
      }

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBanner
        icon="📞"
        title="Contact Us"
        subtitle="Get in touch with A2 Shiva Smart Services in Tirupur. We're ready to assist you with all your needs — call, email or visit us!"
        breadcrumb="Contact"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ─── Contact Info Cards ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group bg-white border border-pink-100 rounded-2xl p-6 shadow hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-0.5">{info.title}</p>
                  <p className="font-black text-gray-900 text-sm leading-tight">{info.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{info.sub}</p>
                </div>
              </a>
            ))}
          </div>

          {/* ─── Form + Quick Contact ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-pink-100 rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-black text-gray-900 mb-1">Send Us a Message</h2>
                <p className="text-gray-400 text-sm mb-7">Fill the form below and we'll get back to you ASAP!</p>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-black text-green-600 mb-2">Message Sent!</h3>
                    <p className="text-gray-500">Thank you! We'll contact you shortly at your number.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm text-gray-800 placeholder-gray-400 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number *</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          type="tel"
                          placeholder="Your mobile number"
                          className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm text-gray-800 placeholder-gray-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="your@email.com (optional)"
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm text-gray-800 placeholder-gray-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Service Required *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm text-gray-800 transition bg-white"
                      >
                        <option value="">-- Select a Service --</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your requirement in detail..."
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm text-gray-800 placeholder-gray-400 transition resize-none"
                      />
                    </div>

                    {error && (
                      <div className="text-sm text-red-500 font-semibold">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-black text-base rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-pink-200 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "📩 Send My Enquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Quick Contact Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* WhatsApp */}
              <div
                className="rounded-2xl p-7 text-white text-center"
                style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
              >
                <div className="text-5xl mb-3">💬</div>
                <h3 className="text-xl font-black mb-2">WhatsApp Us</h3>
                <p className="text-green-100 text-sm mb-5">Get instant replies on WhatsApp. Chat with us 24/7!</p>
                <a
                  href="https://wa.me/919092947426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 bg-white text-green-600 font-black rounded-xl hover:scale-105 transition-all shadow"
                >
                  💬 Open WhatsApp
                </a>
              </div>

              {/* Call Now */}
              <div
                className="rounded-2xl p-7 text-white text-center"
                style={{ background: "linear-gradient(135deg, #ec4899, #be185d)" }}
              >
                <div className="text-5xl mb-3">📞</div>
                <h3 className="text-xl font-black mb-2">Call Us Directly</h3>
                <p className="text-pink-100 text-sm mb-4">We're available Mon–Sun: 9AM–9PM</p>
                <a
                  href="tel:9092947426"
                  className="block py-3 bg-white text-pink-600 font-black rounded-xl hover:scale-105 transition-all shadow mb-3"
                >
                  📞 9092947426
                </a>
                <a
                  href="tel:9092947424"
                  className="block py-3 bg-white/20 text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 hover:scale-105 transition-all"
                >
                  📞 9092947424
                </a>
              </div>

              {/* Location */}
              <div className="bg-white border border-pink-100 rounded-2xl p-7 shadow text-center">
                <div className="text-5xl mb-3">📍</div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Visit Our Centre</h3>
                <p className="text-gray-500 text-sm mb-1 font-semibold">A2 Shiva Smart Services</p>
                <p className="text-gray-400 text-sm">Tirupur, Tamil Nadu, India</p>
                <div className="mt-4 py-2 px-4 bg-pink-50 border border-pink-100 rounded-lg text-xs text-pink-600 font-semibold">
                  🕐 Open: Mon–Sun | 9 AM – 9 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
