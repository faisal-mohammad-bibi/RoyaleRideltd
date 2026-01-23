"use client";

const fleetSlides = [
  {
    image: "/images/background/s1.webp",
    title: "Executive Chauffeur Experience",
  },
  {
    image: "/images/background/s2.jpeg",
    title: "Luxury Business Travel",
  },
  {
    image: "/images/background/s3.jpg",
    title: "Premium Group Transportation",
  },
  {
    image: "/images/background/s4.jpg",
    title: "Elite Private Travel",
  },
];

export default function FleetHeroCarousel() {
  return (
    <section className="relative h-[320px] md:h-[380px] overflow-hidden">
      <div className="absolute inset-0 flex w-[800vw] animate-fleet-left">
        {[...fleetSlides, ...fleetSlides].map((slide, index) => (
          <div
            key={index}
            className="relative w-screen h-[320px] md:h-[380px] flex-shrink-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Modern Text */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <h1 className="text-white text-2xl md:text-4xl font-medium tracking-wide text-center px-6 max-w-3xl leading-tight">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
