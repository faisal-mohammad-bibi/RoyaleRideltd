'use client';
import React from "react";
import Link from "next/link";

export default function Footer() {
  const phoneNumber = "+447310236707"; // WhatsApp کے لیے نمبر میں +44 کو + سے replace کیا
  const formattedPhoneNumber = "+44 7310 236707"; // Display کے لیے formatted نمبر

  return (
    <>
      {/* CTA SECTION */}
      <section className="bg-[#BF9B30] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs px-4 py-1 rounded-full mb-4 tracking-wide">
              Chauffeur Assistance
            </span>

            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug">
              Reliable chauffeur support <br />
              whenever you need it.
            </h2>
          </div>

          <div className="text-left md:text-right">
            <div className="flex md:justify-end items-center gap-3 mb-2">
              <i className="fa-solid fa-phone text-white text-xl" />
              <span className="text-white uppercase tracking-widest text-xs">
                Call Us
              </span>
            </div>

            <div className="text-white text-3xl font-bold mb-4">
              {formattedPhoneNumber}
            </div>

            <Link
              href="/contact-us"
              className="inline-block bg-white text-[#BF9B30] px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="bg-[#111111] text-gray-300 pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

          {/* Logo aur About section */}
          <div className="flex flex-col items-start">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-6">
              <img
                src="/images/logo.png"
                alt="Luxury Chauffeur Service"
                className="block h-[90px] w-auto object-contain"
              />
            </Link>

            {/* ABOUT */}
            <div>
              <p className="text-sm leading-relaxed mb-6">
                Royalerides provides premium chauffeur-driven transport across the UK.
                We focus on punctuality, discretion, and comfort for every journey.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-6">
              {/* Facebook Link */}
              <Link
                href="https://www.facebook.com/profile.php?id=61579840431678&mibextid=wwXIfr&rdid=LZgXoqUmdlxnDuY8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Gv4KuRU5g%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#166FE5] transition-colors group"
                aria-label="Visit our Facebook page"
              >
                <i className="fab fa-facebook-f text-white text-2xl group-hover:scale-110 transition-transform"></i>
              </Link>

              {/* Instagram Link */}
              <Link
                href="https://www.instagram.com/royale_ride_chauffeurs/?igsh=MW84b2VvY2owYmYxZQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 transition-opacity group"
                aria-label="Visit our Instagram page"
              >
                <i className="fab fa-instagram text-white text-2xl group-hover:scale-110 transition-transform"></i>
              </Link>
            </div>
          </div>

          {/* AIRPORT TRANSFERS */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Airport Transfers
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services">From Manchester to Heathrow Airport (London)</Link></li>
              <li><Link href="/services">From Manchester to Gatwick Airport (London)</Link></li>
              <li><Link href="/services">From Manchester to Birmingham Airport</Link></li>
              <li><Link href="/services">From Manchester to Liverpool John Lennon Airport</Link></li>
              <li><Link href="/services">From Manchester to Leeds Bradford Airport</Link></li>
              <li><Link href="/services">From Manchester to Newcastle International Airport</Link></li>
              <li><Link href="/services">From Manchester to Glasgow Airport</Link></li>
              <li><Link href="/services">From Manchester to Edinburgh Airport</Link></li>
            </ul>
          </div>

          {/* CHAUFFEUR SERVICES */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Chauffeur Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services">Airport Chauffeur Service</Link></li>
              <li><Link href="/services">Corporate Travel</Link></li>
              <li><Link href="/services">Long Distance Transfers</Link></li>
              <li><Link href="/services">Executive Chauffeur Hire</Link></li>
              <li><Link href="/services">Event & Business Travel</Link></li>
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h4 className="text-[#BF9B30] font-semibold mb-5">
              Contact Details
            </h4>

            <div className="space-y-3 text-sm">
              <Link href="/contact-us">
                <p>
                  <br /><strong className="text-[#BF9B30]">Address:</strong><br />
                  Manchester, UK
                </p>
              </Link>
              <p>
                <strong className="text-[#BF9B30]">Email:</strong><br />
                <Link href="/contact-us">info@royalerides.co.uk</Link>
              </p>

              <p>
                <strong className="text-[#BF9B30]">Phone:</strong><br />
                <a href={`tel:${formattedPhoneNumber.replace(/\s/g, '')}`} className="hover:text-[#BF9B30] transition-colors">
                  {formattedPhoneNumber}
                </a>
              </p>

            </div>
          </div>
        </div>

      
       {/* BOTTOM BAR */}
<div className="border-t border-white/10 py-6">
  <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400 space-y-1">
    <div>
      © {new Date().getFullYear()} Royal Rides. All Rights Reserved
    </div>

    <div>
      Designed & Developed by{" "}
      <a
        href="https://linkedo.co.uk"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="text-gray-300 hover:text-white transition"
      >
        Linkedo
      </a>
    </div>
  </div>
</div>

      </footer>
    </>
  );
}
