"use client";

import { useState } from "react";

const fleetSlides = [
  { image: "/images/background/s1.webp", title: "Executive Chauffeur Experience" },
  { image: "/images/background/s2.jpeg", title: "Luxury Business Travel" },
  { image: "/images/background/s3.jpg", title: "Premium Group Transportation" },
  { image: "/images/background/s4.jpg", title: "Elite Private Travel" },
  { image: "/images/background/1.jpeg", title: "Private Travel" },
];

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    pickupDate: "",
    pickupTime: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      alert("✅ Booking request submitted!");
      setFormData({
        pickup: "",
        dropoff: "",
        pickupDate: "",
        pickupTime: "",
      });
      setIsOpen(false);
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="section-hero" className="relative overflow-hidden">
      {/* ================= BACKGROUND CAROUSEL ================= */}
      <div className="relative h-[500px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 flex animate-fleet-left"
          style={{ width: `${fleetSlides.length * 100 * 2}vw` }}
        >
          {[...fleetSlides, ...fleetSlides].map((slide, index) => (
            <div
              key={index}
              className="relative w-screen h-[500px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex-shrink-0"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full pt-32 sm:pt-28 md:pt-24 lg:pt-28">

            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight text-center">
                Executive Chauffeur Service
                <br />
                <span className="text-[#BF9B30] font-semibold">
                  crafted for comfort and discretion
                </span>
              </h1>

              <p className="text-gray-200 max-w-2xl mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-center mx-auto">
                Travel with confidence using our premium chauffeur-driven vehicles.
                Every journey is handled by professionals who value punctuality,
                privacy, and excellence.
              </p>
            </div>

            <div className="mb-5 sm:mb-6 md:mb-7 lg:mb-8 space-y-1 text-center">
              <a
                href="mailto:info@royalerides.co.uk"
                className="hover:underline block text-sm sm:text-base md:text-lg"
              >
                info@royalerides.co.uk
              </a>
              <a
                href="tel:+447310236707"
                className="hover:underline block text-sm sm:text-base md:text-lg"
              >
                +44 7310 236707
              </a>
            </div>

            {/* ✅ BUTTON UPDATED ONLY */}
            <div className="mt-8 sm:mt-7 md:mt-8 lg:mt-8 text-center">
              <a
                href="https://royalerides.co.uk/services"
                className="bg-[#BF9B30] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base md:text-lg inline-block"
              >
                Our Services
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ================= POPUP FORM (UNCHANGED, NOW UNUSED) ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white w-full max-w-md sm:max-w-lg md:max-w-3xl mx-auto rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 z-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xl sm:text-2xl text-gray-600 hover:text-gray-900 transition-colors"
            >
              ✕
            </button>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#002462] text-center">
              Check Availability
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
                  <input
                    required
                    type="text"
                    className="w-full border text-black border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
                  <input
                    required
                    type="text"
                    className="w-full border text-black border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3"
                    value={formData.dropoff}
                    onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Date</label>
                  <input
                    required
                    type="date"
                    className="w-full border text-black border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Time</label>
                  <input
                    required
                    type="time"
                    className="w-full border text-black border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3"
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                  />
                </div>
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#BF9B30] text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-md font-semibold"
                >
                  {loading ? "Submitting..." : "Make Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fleetLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fleet-left {
          animation: fleetLeft 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-fleet-left {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
}
