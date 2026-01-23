"use client";

import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import FleetHeroCarousel from "@/components/FleetHeroCarousel";
import Link from "next/link";
import FloatingContactIcons from "@/components/FloatingContactIcons";

type Service = {
  title: string;
  desc: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Executive Chauffeur Service",
    desc: "Our executive chauffeur service is tailored for business and personal travel where punctuality, discretion, and comfort matter most. Whether attending meetings, events, or daily engagements, our professional chauffeurs ensure a smooth, refined journey.",
    image: "/images/services/Chaffeur.jpeg",
  },
  {
    title: "Professional Chauffeur Hire",
    desc: "Enjoy flexible and reliable travel with our professional chauffeur hire service. Ideal for short-term or full-day requirements, this option adapts to your schedule and destinations. Our experienced drivers provide courteous service, efficient routing, and a seamless experience from start to finish.",
    image: "/images/services/Professional-chauffeur.jpg",
  },
  {
    title: "Luxury MPV & Van Chauffeur Service",
    desc: "Our luxury MPV and van service offers spacious, premium travel for families, groups, and business clients. With comfortable seating and generous luggage space, it is perfect for long journeys, airport transfers, and group transportation. Comfort, style, and practicality come together in every ride.",
    image: "/images/services/MPV-Van.jpeg",
  },
  {
    title: "Private Chauffeur Experiences",
    desc: "Our private chauffeur experience provides a personalized travel solution built around your plans. From city travel to special occasions, enjoy the freedom of a dedicated chauffeur who adapts to your itinerary. This service is ideal for clients seeking privacy, flexibility, and premium comfort.",
    image: "/images/services/private-chuffeure.webp",
  },
  {
    title: "Luxury Airport Transfers",
    desc: "We offer dependable airport transfers designed to remove the stress from your journey. Our chauffeurs track flight schedules to ensure timely pickups and smooth drop-offs, regardless of delays. Whether arriving or departing, we guarantee a punctual, comfortable, and hassle-free experience.",
    image: "/images/services/luxury-airport-transfer.jpeg",
  },
  {
    title: "Executive Group Transport",
    desc: "Our executive group transport service delivers coordinated and professional travel for corporate events and private gatherings. With modern vehicles and experienced chauffeurs, we ensure efficient group movement without compromising comfort or presentation. Ideal for meetings, conferences, and special events.",
    image: "/images/services/Executive_group.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <FleetHeroCarousel />
<section className="py-16 bg-[#fff] text-center">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c39] mb-4">
      Our Services
    </h2>
    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
      We provide a range of premium automotive services designed to ensure safety, comfort, and performance.
    </p>
  </div>
</section>



      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const bgColor = isEven ? "bg-white" : "bg-[#BF9B30]";
            const textColor = isEven ? "text-[#0b1c39]" : "text-white";
            const flexDirection = isEven ? "" : "md:flex-row-reverse";

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${flexDirection} ${bgColor} rounded-2xl overflow-hidden shadow-lg`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Image Container - Fixed */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[380px]">
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center space-y-5 ${textColor}`}
                >
                  <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
                    {service.title}
                  </h2>

                  <p className="text-base md:text-lg leading-relaxed opacity-95">
                    {service.desc}
                  </p>

                  <div className="pt-4">
                    <Link href="/contact-us">
                      <button
                        className={`px-6 py-3 rounded font-semibold transition-transform duration-300 hover:scale-105 ${isEven
                          ? "bg-[#BF9B30] text-white hover:opacity-90"
                          : "bg-white text-[#BF9B30] hover:bg-[#0b1c39] hover:text-white"
                          }`}
                      >
                        Book Your Chauffeur
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
         <FloatingContactIcons/>
 
      <Footer />
    </>
  );
}
