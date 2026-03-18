"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Destinations", href: "#destinations" },
    { label: "Hotels",       href: "#hotels" },
    { label: "Flights",      href: "#flights" },
    { label: "Bookings",     href: "#bookings" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-6 relative z-50">
      {/* Logo */}
      <div className="text-2xl font-bold font-volkhov">
        <img src="/assets/Logo.png" />
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-orange-500 transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop actions */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200">
          Login
        </button>
        <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-200 px-5 py-2 rounded-lg text-sm font-medium">
          Sign up
        </button>
        <span className="text-sm text-gray-500 font-medium">EN</span>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl px-6 py-6 flex flex-col gap-4 md:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            <button className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200">
              Login
            </button>
            <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-200 px-5 py-2 rounded-lg text-sm font-medium">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}