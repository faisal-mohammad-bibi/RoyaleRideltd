import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarqueeSection from "@/components/MarqueeSection";
import OnlyQualityForClients from "@/components/OnlyQualityForClients";
import StatsSection2 from "@/components/StatsSection2";
import React from "react";
import FloatingContactIcons from '../../components/FloatingContactIcons';
interface FeatureProps {
  icon: string;
  title: string;
  text: string;
  reverse?: boolean;
}


const AboutPage: React.FC = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="
          relative
          h-[300px] md:h-[420px]
          overflow-hidden
          flex items-center justify-center
          lg:pt-20
          bg-[url('/images/background/subheader.png')]
          bg-cover
          bg-[position:center_65%]
        "
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-4xl md:text-5xl font-semibold">
          About Us
        </h1>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

            {/* LEFT */}
            <div>
              <h2 className="text-[#0b1c39] font-bold leading-tight text-3xl md:text-4xl lg:text-[42px]">
                A refined selection of executive{" "}
                <span className="text-[#BF9B30]">and luxury chauffeur vehicles</span> ailored for every journey.{" "}
                <span className="text-[#BF9B30]">. Experience unmatched comfort,</span>{" "}
                sophistication, and attention to detail in every ride,<span className="text-[#BF9B30]">where luxury meets precision.</span>
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We specialise in premium chauffeur-driven transport, delivering
                seamless experiences for business travel, airport transfers,
                corporate events, and private occasions. Our approach is built
                around professionalism, discretion, and uncompromising attention
                to detail. Every journey is carefully planned and executed to
                ensure comfort, reliability, and peace of mind from start to
                finish.
              </p>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4">
                Our fleet features the latest luxury vehicles, meticulously
                maintained for performance, safety, and elegance. Whether it’s
                a last-minute airport pickup or a carefully coordinated
                corporate event, our chauffeurs combine local knowledge with
                world-class service to make every ride exceptional.
              </p>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4">
                We pride ourselves not just on transportation, but on crafting
                memorable experiences. From the moment you book until your
                destination is reached, our focus is on seamless execution,
                comfort, and attention to every detail—because luxury is in the
                experience, not just the vehicle.
              </p>
            </div>
          </div>

          <StatsSection2 />
        </div>
      </section>

      {/* BOARD */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: "url('/images/background/8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-center text-white text-3xl md:text-4xl font-semibold mb-16">
            We specialise in premium chauffeur-driven transport, delivering seamless experiences for business travel, airport transfers, corporate events, and private occasions.
          </h2>

        
        </div>
        
      </section>
    


      {/* QUALITY SECTION */}
      <OnlyQualityForClients />

      {/* MARQUEE */}
      <MarqueeSection />
      

      {/* FLOATING CONTACT */}
      <FloatingContactIcons />

      <Footer />
    </>
  );
};

export default AboutPage;


interface FeatureProps {
  icon: string;
  title: string;
  text: string;
  reverse?: boolean;
  className?: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, text, reverse = false, className }) => {
  return (
    <div className={`flex flex-col gap-4 items-center text-center ${className}`}>
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#BF9B30] text-black text-2xl mb-4">
        <i className={`fa-solid ${icon}`} />
      </div>
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-white text-sm md:text-base leading-relaxed">{text}</p>
    </div>
  );
};

