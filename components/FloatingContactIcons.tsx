"use client";
import React from "react";

export default function FloatingContactIcons() {
  const phoneNumber = "+447310236707";
  const displayNumber = "+44 7310 236707";
  const emailAddress = "info@royalerides.co.uk";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber.replace(/[^0-9+]/g, "")}?text=Hello%20Royalerides,%20I%20would%20like%20to%20inquire%20about%20your%20chauffeur%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp Chat"
      >
        <i className="fab fa-whatsapp text-white text-3xl"></i>
      </a>

      {/* Email */}
      <a
        href={`mailto:${emailAddress}?subject=Chauffeur Service Inquiry&body=Hello Royalerides,%0D%0A%0D%0AI would like to inquire about your chauffeur services.`}
        className="w-14 h-14 rounded-full bg-[#BF9B30] flex items-center justify-center shadow-lg hover:scale-110 transition"
        aria-label="Send Email"
      >
        <i className="fas fa-envelope text-white text-2xl"></i>
      </a>

    </div>
  );
}