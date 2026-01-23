"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const items = [
  "Business Class",
  "First Class Van",
  "First Class",
];

export default function MarqueeLuxury() {
  return (
    <section className="bg-[#111111] py-10 overflow-hidden">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,      // 🔑 no snapping
          containScroll: false,
        }}
        className="w-full"
      >
        <CarouselContent
          className="flex animate-marquee-linear"
        >
          {[...items, ...items, ...items].map((item, i) => (
            <CarouselItem
              key={i}
              className="basis-auto flex-shrink-0"
            >
              <span className="mx-8 text-2xl md:text-3xl font-semibold text-[#BF9B30] whitespace-nowrap">
                {item} —
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
