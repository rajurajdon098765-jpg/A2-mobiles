interface PageBannerProps {
  title: string;
  subtitle: string;
  icon: string;
  breadcrumb: string;
}

const PageBanner = ({ title, subtitle, icon, breadcrumb }: PageBannerProps) => {
  return (
    <div
      className="relative pt-32 pb-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fff0f6 0%, #fce7f3 40%, #ffe4ef 70%, #fff5f8 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-rose-300 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #be185d 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-pink-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
          <span className="text-pink-400 text-xs font-semibold uppercase tracking-widest">🏠 Home</span>
          <span className="text-pink-300 text-xs">›</span>
          <span className="text-pink-600 text-xs font-bold uppercase tracking-widest">{breadcrumb}</span>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl shadow-pink-200 animate-float">
            <span className="text-4xl">{icon}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
          {title.split(" ").map((word, i) => (
            <span key={i} className={i % 2 === 1 ? "shimmer-text" : ""}>{word} </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-1 w-16 rounded-full bg-pink-200" />
          <div className="h-1 w-8 rounded-full bg-pink-500" />
          <div className="h-1 w-16 rounded-full bg-pink-200" />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
