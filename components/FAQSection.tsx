"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I book a chauffeur-driven vehicle?",
    a: "Booking is simple and seamless. Choose your vehicle, select your pickup details, and confirm your reservation online within minutes.",
  },
  {
    q: "Do you provide professional chauffeurs?",
    a: "Yes. All our chauffeurs are highly trained, licensed professionals with extensive experience in luxury and executive transport.",
  },
  {
    q: "What types of vehicles are available?",
    a: "Our fleet includes executive sedans, luxury SUVs, premium vans, and prestige vehicles suitable for business, leisure, and special occasions.",
  },
  {
    q: "Is there a security deposit required?",
    a: "A refundable security deposit may apply depending on the vehicle category and booking type. Full details are shared before confirmation.",
  },
  {
    q: "Can I modify or cancel my booking?",
    a: "3 hours before starting can cancel or change.",
  },
  {
    q: "Do you offer hourly chauffeur services?",
    a: "Absolutely. Our hourly chauffeur service is ideal for meetings, events, city tours, and business engagements.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c39]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our premium chauffeur services
          </p>
        </div>

        {/* FAQ Grid */}
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6"
        >
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 pb-4"
            >
              <AccordionTrigger className="flex w-full items-center justify-between text-left hover:no-underline">
                <span className="text-[#0b1c39] font-medium">
                  {item.q}
                </span>
              </AccordionTrigger>

              <AccordionContent>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-[95%]">
                  {item.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom Accent Line */}
        <div className="mt-16 flex justify-center">
          <span className="block w-24 h-[2px] bg-[#BF9B30]" />
        </div>

      </div>
    </section>
  );
}
