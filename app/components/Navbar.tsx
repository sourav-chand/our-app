"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Pages", href: "#", dropdown: true },
  { label: "Blog", href: "#", dropdown: true },
  { label: "Contact", href: "#" },
  { label: "Shop", href: "#" },
];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f0f0eb] px-8 py-3 flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 shrink-0">
        <Image src="/next.svg" alt="Logo" width={90} height={22} className="dark:invert" />
      </a>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700 font-medium">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex items-center gap-1 hover:text-black transition-colors"
            >
              {link.label}
              {link.dropdown && (
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Search"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </button>

        {/* Sign up */}
        <a
          href="#"
          className="bg-[#aacc00] text-black text-sm font-semibold px-5 py-2 rounded-full hover:brightness-95 transition-all"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
}
