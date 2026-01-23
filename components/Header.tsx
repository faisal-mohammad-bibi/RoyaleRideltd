"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/cars" },
    { name: "Contact", path: "/contact-us" },
    { name: "Areas", path: "/areas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-28">

          {/* Logo */}
          <Link href="/" className="flex items-center py-2 pl-4">
            <img
              src="/images/logo.png"
              alt="Luxury Chauffeur Service"
              className="block h-[88px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu - Template literal syntax fix */}
          <nav className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-base font-medium transition-all relative ${
                    isActive
                      ? "text-[#BF9B30]"
                      : scrolled
                      ? "text-gray-900"
                      : "text-white"
                  } hover:text-[#BF9B30]`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-[#BF9B30]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6 pr-4">
            <Link
              href="/contact-us"
              className="hidden lg:inline-flex px-8 py-3 rounded-md text-base font-semibold bg-[#BF9B30] text-white hover:opacity-90 transition"
            >
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden text-3xl font-bold transition ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100 py-10">
          <div className="flex flex-col px-8 gap-7">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-base font-medium transition ${
                  pathname === item.path
                    ? "text-[#BF9B30]"
                    : "text-gray-800"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact-us"
              className="mt-8 inline-flex justify-center px-8 py-3 rounded-md text-base font-semibold bg-[#BF9B30] text-white hover:opacity-90 transition"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}