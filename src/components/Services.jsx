export default function Services() {
  const services = [
    {
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
      icon: "/assets/services/weather.webp",
      highlight: false,
    },
    {
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
      icon: "/assets/services/flight.jpg",
      highlight: true,
    },
    {
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      icon: "/assets/services/event.webp",
      highlight: false,
    },
    {
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers",
      icon: "/assets/services/settings.webp",
      highlight: false,
    },
  ];

  return (
    <section className="relative px-6 md:px-16 py-20 text-center overflow-hidden bg-white">
      {/* ── Dot grid — top right ── */}
      <div className="absolute top-6 right-6 grid grid-cols-6 gap-[10px] pointer-events-none select-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{
              background:
                i === 0 ? "#E8604C" : i === 13 ? "#6C63FF" : "#D1D5DB",
            }}
          />
        ))}
      </div>

      {/* ── Section header ── */}
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-3">
        Category
      </p>
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213d] mb-16 leading-tight">
        We Offer Best Services
      </h2>

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
        {services.map((item, index) => (
          // Outer wrapper: one grid cell, position:relative anchor for the rectangle
          <div key={index} className="relative">
            {/* Rectangle 157 — rendered BEFORE the card in DOM = behind it visually.
                z-0 keeps it under the card's z-10. */}
            {item.highlight && (
              <div className="absolute -bottom-8 -left-4 w-16 h-16 pointer-events-none z-0">
                <img
                  src="/assets/services/Rectangle 157.webp"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Card — z-10 floats above the rectangle */}
            <div
              className={`relative flex flex-col items-center text-center px-5 pt-8 pb-10 rounded-2xl transition-all duration-300
                ${
                  item.highlight
                    ? "bg-white z-10 shadow-2xl"
                    : "bg-transparent hover:-translate-y-1"
                }`}
              style={
                item.highlight
                  ? { boxShadow: "0 8px 40px 0 rgba(80,100,200,0.13)" }
                  : {}
              }
            >
              <div className="mb-5">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mx-auto w-16 h-16 object-contain"
                />
              </div>
              <h3 className="font-bold text-[15px] text-[#14213d] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
