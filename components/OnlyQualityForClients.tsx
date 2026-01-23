'use client';

import { useState } from 'react';

export default function OnlyQualityForClients() {
  const [active, setActive] = useState<'luxury' | 'comfort' | 'prestige'>('luxury');

  const content = {
    luxury:
      'Our luxury chauffeur vehicles are carefully selected to deliver elegance, performance, and an exceptional travel experience. Each car is equipped with the latest technology, plush interiors, and superior handling, ensuring that every journey feels exclusive and tailored to your highest expectations. From airport transfers to city tours, luxury is redefined at every mile.',
    comfort:
      'Designed for relaxed journeys, our comfort-class vehicles offer spacious interiors, smooth rides, and premium amenities. Passengers can enjoy an effortless blend of convenience and tranquility, with adjustable seating, climate control, and thoughtful touches that make every trip stress-free. Perfect for families, business travelers, or anyone who values comfort without compromise.',
    prestige:
      'Prestige vehicles are reserved for executives and special occasions, combining status, sophistication, and refined comfort. These cars are not just modes of transport—they are statements of excellence. Each journey is meticulously planned, providing discreet service, immaculate interiors, and a serene environment that allows you to arrive refreshed, focused, and in style, whether for corporate meetings or memorable events.',
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div className="h-[420px] lg:h-[500px] rounded-xl overflow-hidden">
          <img
            src="/images/background/5.jpeg"
            alt="Only Quality For Clients"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1c39] mb-6">
            Only Quality for Our Clients
          </h2>

          <div className="flex gap-4 mb-6">
            {(['luxury', 'comfort', 'prestige'] as const).map((tab) => (
  <button
    key={tab}
    onClick={() => setActive(tab)}
    className={`px-6 py-2 rounded-md text-sm font-medium transition
      ${
        active === tab
          ? 'bg-[#BF9B30] text-white'
          : 'border text-gray-500'
      }`}
  >
    {tab.toUpperCase()}
  </button>
))}

          </div>

          <p className="text-gray-600 leading-relaxed max-w-xl">
            {content[active]}
          </p>
        </div>
      </div>
    </section>
  );
}
