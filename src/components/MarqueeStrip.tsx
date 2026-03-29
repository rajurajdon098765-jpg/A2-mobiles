const items = [
  "✈️ Flight Booking", "🚌 Bus Booking", "🏨 Hotel Booking", "🚆 Train Ticket",
  "🎬 Movie Booking", "🌍 Tour Packages", "📱 Mobile Recharge", "💳 Online Payment",
  "💸 Money Transfer", "🏧 AEPS Service", "🏦 Account Opening", "🪪 Aadhaar Seeding",
  "📄 Gov Documents", "🚗 Insurance Query", "🖊️ A-Z Stationery", "📲 Smart Gadgets",
  "📍 Tirupur, Tamil Nadu", "⭐ Trusted Service", "🔐 100% Secure", "🎯 Best Rates",
];

const MarqueeStrip = () => {
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 py-3">
      <div className="flex animate-marquee whitespace-nowrap" style={{ willChange: "transform" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 text-white font-semibold text-sm px-6"
          >
            {item}
            <span className="text-pink-200 ml-5">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
