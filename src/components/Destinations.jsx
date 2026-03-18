"use client";

import React from "react";

const destinations = [
  {
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    city: "Rome, Italty",
    price: "$5,42k",
    duration: "10 Days Trip",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    city: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=800&q=80",
    city: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
];

export default function Destinations() {
  return (
    <section className="relative w-full bg-white py-8 md:py-16 overflow-hidden">
      {/* Decorative wavy lines — right side */}
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          position: "absolute",
          top: "480px",
          right: `220px`,
          transform: "translateY(-50%)",
        }}
      >
        <img src="/assets/destinations/Decore (1).webp" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibol tracking-wide mb-2">
            Top Selling
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#14213d] leading-tight font-volkhov">
            Top Destinations
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 z-10"
            >
              {/* Destination image */}
              <div className="relative w-full h-56 overflow-hidden rounded-3xl">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card body */}
              <div className="px-5 pt-4 pb-5">
                {/* City + Price row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[15px] font-semibold text-[#14213d]">
                    {dest.city}
                  </span>
                  <span className="text-[15px] font-semibold text-[#14213d]">
                    {dest.price}
                  </span>
                </div>

                {/* Duration row */}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  {/* Send / location arrow icon */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E8604C"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <span>{dest.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
