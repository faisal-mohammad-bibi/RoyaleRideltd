"use client";

import StatsSection from "./StatsSection";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";



export default function MarqueeSection() {
  return (
    <>
     

      {/* FEATURES */}
     <section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-4xl font-bold text-[#0b1c39] mb-4">
        Our Chauffeur Standards
      </h2>
      <p className="text-gray-500 text-base leading-relaxed">
        Premium chauffeur services delivered with precision, discretion and consistency.
      </p>
    </div>

    {/* Gold Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: "fa-trophy",
          title: "First-Class Chauffeur Service",
          desc: "Every journey delivered with professionalism, polish and attention to detail.",
        },
        {
          icon: "fa-clock",
          title: "24/7 Availability",
          desc: "Chauffeur services available around the clock, whenever you need them.",
        },
        {
          icon: "fa-tag",
          title: "Transparent Pricing",
          desc: "Clear, premium pricing with no hidden charges or surprises.",
        },
        {
          icon: "fa-location-dot",
          title: "Door-to-Door Convenience",
          desc: "Seamless pickup and drop-off designed around your schedule.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group p-6 rounded-2xl bg-[#BF9B30] shadow-lg hover:scale-[1.02] transition"
        >
          <div className="w-10 h-10 mb-5 flex items-center justify-center rounded-full bg-white/20 text-white">
            <i className={`fa-solid ${item.icon} text-sm`}></i>
          </div>

          <h4 className="font-semibold text-white mb-2">
            {item.title}
          </h4>

          <p className="text-white/90 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


      
    
    </>
  );
}
