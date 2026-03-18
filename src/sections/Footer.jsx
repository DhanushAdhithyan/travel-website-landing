export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">
      <div className="absolute top-4 right-6 grid grid-cols-4 gap-3 pointer-events-none select-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: "#D1D5DB" }}
          />
        ))}
      </div>

      <div
        className="absolute bottom-0 right-0 w-72 h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(200,190,255,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-20 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-volkhov text-3xl font-extrabold text-[#14213d] mb-3 tracking-tight">
              Jadoo.
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[180px]">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#14213d] mb-4 text-[15px]">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {["About", "Careers", "Mobile"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#E8604C] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#14213d] mb-4 text-[15px]">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {["Help/FAQ", "Press", "Affilates"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#E8604C] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#14213d] mb-4 text-[15px]">More</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {["Airlinefees", "Airline", "Low fare tips"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#E8604C] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E8604C] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#555">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f9a825, #e91e8c, #6c3fe0)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E8604C] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#555">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 0 1-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.44a4.5 4.5 0 0 1-2.04.08c.58 1.8 2.26 3.11 4.25 3.15A9.06 9.06 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.18 9.18 0 0 0 23 3z" />
                </svg>
              </a>
            </div>

            <p className="text-sm font-semibold text-[#14213d] mb-3">
              Discover our app
            </p>

            <div className="flex flex-row gap-2">
              <a
                href="#"
                className="flex items-center gap-2 bg-[#14213d] text-white rounded-lg px-4 py-2.5 w-fit hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="flex-shrink-0">
                  <path d="M3.18 23.76c.37.2.8.2 1.17 0l11.31-6.53-2.6-2.6-9.88 9.13zM.5 1.4A1.5 1.5 0 0 0 0 2.5v19a1.5 1.5 0 0 0 .5 1.1l.08.07 10.65-10.65v-.25L.58 1.33.5 1.4zM20.3 10.37l-2.9-1.67-2.92 2.92 2.92 2.92 2.91-1.68a1.5 1.5 0 0 0 0-2.49zM4.35.24L15.66 6.77l-2.6 2.6L3.18.24A1.33 1.33 0 0 1 4.35.24z" />
                </svg>
                <div className="leading-tight">
                  <p className="text-[8px] opacity-75 uppercase tracking-wide">Get it on</p>
                  <p className="text-[11px] font-semibold">Google Play</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 bg-[#14213d] text-white rounded-lg px-4 py-2.5 w-fit hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="flex-shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="leading-tight">
                  <p className="text-[8px] opacity-75 uppercase tracking-wide">Available on the</p>
                  <p className="text-[11px] font-semibold">Apple Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5 text-center">
          <p className="text-sm text-gray-400">All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}