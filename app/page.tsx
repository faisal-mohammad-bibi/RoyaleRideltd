import FAQSection from "@/components/FAQSection";
import FleetShowcase from "@/components/FleetShowcase";
import FloatingContactIcons from "@/components/FloatingContactIcons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeLuxury from "@/components/MarqueeLuxury";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import StatsSection from "@/components/StatsSection";
import HomeBookingSection from "@/components/HomeBookingSection"


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
export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">

      <Header />
      <HeroSection />
      <MarqueeLuxury />
      <HomeBookingSection />
      <FleetShowcase />
      <ServicesShowcase />
      <MarqueeSection />

      <FAQSection />
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
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/background/2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-semibold">
              A refined fleet of{" "}
              <span className="text-[#BF9B30]">executive</span> and{" "}
              <span className="text-[#BF9B30]">luxury chauffeur vehicles</span>
            </h2>

            <p className="text-gray-300 text-sm md:text-base">
              Designed for business travel, airport transfers and private journeys.
            </p>
          </div>

          <StatsSection />
        </div>
      </section>
      <FloatingContactIcons />
      <Footer />


    </main>
  );
}
