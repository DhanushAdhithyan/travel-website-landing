"use client";

import React, { useState } from "react";

const brands = [
  {
    name: "Axon Airlines",
    logo: <img src="/assets/brands/image 31.webp" />,
  },
  {
    name: "Jetstar",
    logo: <img src="/assets/brands/image 3.webp" />,
  },
  {
    name: "Expedia",
    logo: <img src="/assets/brands/image 29.webp" />,
  },
  {
    name: "Qantas",
    logo: <img src="/assets/brands/image 30.webp" />,
  },
  {
    name: "Alitalia",
    logo: <img src="/assets/brands/image 31.webp" />,
  },
];

export default function BrandsSubscribeSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full bg-white">
      {/* ── Brand logos strip ── */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between flex-wrap gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>

      {/* ── Subscribe banner ── */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div
          className="relative subscribe-banner rounded-3xl overflow-hidden px-10 py-14 text-center"
          style={{
            background: "linear-gradient(135deg, #eef0f8 0%, #e8eaf6 100%)",
          }}
        >
          {/* Decorative concentric arcs — bottom-left */}
          <svg
            className="absolute -bottom-6 -left-6 opacity-40 pointer-events-none"
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
          >
            {[180, 150, 120, 90, 60].map((r, i) => (
              <circle
                key={i}
                cx="0"
                cy="220"
                r={r}
                stroke="#c5c8e8"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
          </svg>

          {/* Decorative concentric arcs — center-right */}
          <svg
            className="absolute top-1/2 -right-10 -translate-y-1/2 opacity-30 pointer-events-none"
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
          >
            {[160, 130, 100, 70, 40].map((r, i) => (
              <circle
                key={i}
                cx="180"
                cy="90"
                r={r}
                stroke="#c5c8e8"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
          </svg>

          {/* Dot grid — bottom-right */}
          <div className="absolute bottom-5 right-6 grid grid-cols-4 gap-2.5 opacity-50 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i === 9 ? "#E8604C" : "#A5A8D0" }}
              />
            ))}
          </div>

          {/* Paper-plane button — top-right */}
          <button
            className="travel-icon absolute -top-1 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105"
            style={{ background: "#6C63FF" }}
            aria-label="Send"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3461] max-w-xl mx-auto leading-snug mb-8">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>

          {/* Email input row */}
          <div className="flex items-center justify-center gap-0 max-w-lg mx-auto">
            <div className="flex items-center bg-white rounded-l-xl px-4 py-3.5 flex-1 shadow-sm">
              {/* Envelope icon */}
              <svg
                className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
              />
            </div>
            <button
              className="px-7 py-3.5 rounded-r-xl text-white text-sm font-semibold transition-opacity duration-200 hover:opacity-90 shadow-sm"
              style={{ background: "#F1A26E" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
