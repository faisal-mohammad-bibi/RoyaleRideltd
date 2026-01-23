"use client";

import React from "react";
import Link from "next/link";
import { Users, Luggage, Briefcase, CheckCircle } from "lucide-react";

type Car = {
  name: string;
  image: string;
  passengers: string;
  smallLuggage: string;
  mediumLuggage: string;
  features: string[];
};

/* MOBILE-OPTIMISED: 3 CARS ONLY */
const cars: Car[] = [
  {
    name: "Mercedes E-Class",
    image: "/images/cars/e-class-saloon.png",
    passengers: "3 passengers",
    smallLuggage: "3 Small luggage",
    mediumLuggage: "2 Medium luggage",
    features: [
      "Includes meet and greet",
      "Complimentary bottled water",
      "Wi-Fi in vehicle",
    ],
  },
  {
    name: "Mercedes V-Class",
    image: "/images/cars/v-class.png",
    passengers: "6 passengers",
    smallLuggage: "5 Small luggage",
    mediumLuggage: "4 Medium luggage",
    features: [
      "Ideal for families & groups",
      "Spacious seating layout",
      "Airport transfer ready",
    ],
  },
   {
    name: "Range Rover",
    image: "/images/cars/range-rover.png",
    passengers: "3 passengers",
    smallLuggage: "2 Small luggage",
    mediumLuggage: "2 Medium luggage",
    features: [
      "VIP travel ready",
      "Spacious premium cabin",
      "Ideal for long journeys",
    ],
  },
];

const FleetShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Our Luxury Fleet
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Chauffeur-driven vehicles designed for comfort, elegance, and reliability.
          </p>
        </div>

        {/* GRID – MOBILE FIRST */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {cars.map((car, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                border border-gray-200
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              {/* IMAGE – MOBILE BIG */}
              <div className="h-[260px] sm:h-[240px] flex items-center justify-center px-3">
                <img
                  src={car.image}
                  alt={car.name}
                  className="
                    max-h-full
                    object-contain
                    scale-125
                    sm:scale-100
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="relative px-6 py-8 text-center">
                <span className="absolute left-2 top-6 bottom-6 w-[2px] bg-[#BF9B30]" />
                <span className="absolute right-2 top-6 bottom-6 w-[2px] bg-[#BF9B30]" />

                <h3 className="text-lg font-semibold text-gray-900">
                  {car.name}
                </h3>

                {/* SPECS */}
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex justify-center items-center gap-2">
                    <Users size={16} />
                    <span>{car.passengers}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Luggage size={16} />
                    <span>{car.smallLuggage}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Briefcase size={16} />
                    <span>{car.mediumLuggage}</span>
                  </div>
                </div>

                {/* FEATURES */}
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {car.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex justify-center items-center gap-2"
                    >
                      <CheckCircle size={16} className="text-[#BF9B30]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/cars"
            className="
              inline-block
              border border-[#BF9B30]
              text-[#BF9B30]
              px-7 py-3
              rounded-full
              text-sm font-medium
              hover:bg-[#BF9B30] hover:text-white
              transition
            "
          >
            View Full Fleet
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FleetShowcase;
