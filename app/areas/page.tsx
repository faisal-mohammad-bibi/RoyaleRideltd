"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";

type Area = {
  name: string;
  image: string;
};

const areas: Area[] = [
  { name: "Manchester", image: "/images/areas/manchester.png" },
  { name: "Liverpool", image: "/images/areas/liverpool.jpg" },
  { name: "London", image: "/images/areas/london.jpg" },
  { name: "Leeds", image: "/images/areas/leeds.jpg" },
  { name: "Newcastle", image: "/images/areas/newcastle.avif" },
  { name: "Birmingham", image: "/images/areas/birmingham.jpg" },
  
];

export default function AreasPage() {
  return (
    <>
      <Header />

      {/* SUBHEADER */}
      <section
        className="relative h-[280px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background/7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-4xl md:text-5xl font-semibold">
          Areas We Serve
        </h1>
      </section>

      {/* AREAS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {areas.map((area, index) => (
            <div
              key={index}
              className="relative h-[260px] rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={area.image}
                alt={area.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex items-center px-10">
                <h2
                  className="text-3xl md:text-4xl font-semibold"
                  style={{ color: "#fff" }}
                >
                  {area.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
        <FloatingContactIcons/>

      <Footer />
    </>
  );
}
