// pages/api/services.ts
import type { NextApiRequest, NextApiResponse } from "next";

const services = [
  {
    id: "1",
    title: "Rent a Car With Driver in Dubai",
    desc: "Executive chauffeur-driven vehicles for business events, exhibitions and corporate travel across Dubai.",
    price: "From 90 AED / hour",
    image: "/images/s1webp.webp",
  },
  {
    id: "2",
    title: "Chauffeur Service Dubai",
    desc: "Professional, background-verified chauffeurs with flexible hourly and full-day packages.",
    price: "From 75 AED",
    image: "/images/s2.webp",
    reverse: true,
  },
  {
    id: "3",
    title: "Van Rental Dubai",
    desc: "Luxury vans for families, airport transfers and intercity travel with premium interiors.",
    price: "From 100 AED",
    image: "/images/s3.webp",
  },
  {
    id: "4",
    title: "Abu Dhabi City Tour",
    desc: "Explore Abu Dhabi landmarks with comfortable transport and experienced drivers.",
    price: "From 400 AED",
    image: "/images/s4.webp",
    reverse: true,
  },
  {
    id: "5",
    title: "Airport Transfer Dubai",
    desc: "24/7 luxury airport pickup and drop-off services with punctual drivers.",
    price: "From 100 AED",
    image: "/images/s5.webp",
  },
  {
    id: "6",
    title: "Bus Rental Dubai",
    desc: "Luxury 20, 30 & 50 seater buses for corporate events, tours and group transport.",
    price: "From 200 AED",
    image: "/images/s6.webp",
    reverse: true,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(services);
}
