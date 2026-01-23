"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, Clock, MapPin, ChevronDown, Search } from "lucide-react";

export default function BookingSection() {
  const [tab, setTab] = useState<"oneway" | "hour">("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [hours, setHours] = useState("1 Hour");
  const [dateTime, setDateTime] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isDateFocused, setIsDateFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeInput, setActiveInput] = useState<"from" | "to" | null>(null);

  const dateInputRef = useRef<HTMLInputElement>(null);

  const commonLocations = [
    "Dubai Airport (DXB)",
    "Dubai Mall",
    "Burj Khalifa",
    "Palm Jumeirah",
    "Dubai Marina",
    "Abu Dhabi Airport (AUH)",
    "Sharjah Airport (SHJ)",
    "Jumeirah Beach",
    "Business Bay",
    "Deira City Centre",
    "Mall of the Emirates",
    "Dubai Creek",
    "Al Maktoum Airport (DWC)",
  ];

  useEffect(() => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    setDateTime(now.toISOString().slice(0, 16));
  }, []);

  const handleInputFocus = (inputType: "from" | "to") => {
    setActiveInput(inputType);
    setSuggestions(commonLocations);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setActiveInput(null);
      setSuggestions([]);
    }, 200);
  };

  const handleSuggestionClick = (location: string) => {
    if (activeInput === "from") setFrom(location);
    if (activeInput === "to") setTo(location);
    setActiveInput(null);
    setSuggestions([]);
  };

  const handleSearch = () => {
    const bookingData = {
      name,
      phone,
      email,
      type: tab,
      from,
      to: tab === "oneway" ? to : undefined,
      hours: tab === "hour" ? hours : undefined,
      dateTime,
    };

    console.log("Booking Data:", bookingData);

    alert(
      `Booking Submitted\n\nName: ${name}\nPhone: ${phone}\nEmail: ${
        email || "N/A"
      }\nFrom: ${from}\n${
        tab === "oneway" ? `To: ${to}` : `Hours: ${hours}`
      }\nDate: ${new Date(dateTime).toLocaleString()}`
    );
  };

  const formatDateDisplay = (dateTimeString: string) => {
    if (!dateTimeString) return "Select Date & Time";
    const date = new Date(dateTimeString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleDateDisplayClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.focus();
      dateInputRef.current.showPicker();
    }
  };

  return (
    <section className="bg-gradient-to-r from-white to-gray-50 shadow-xl rounded-xl overflow-hidden border border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Book Your Luxury Chauffeur Ride
          </h2>
          <p className="text-gray-600">
            Premium chauffeur-driven travel across Dubai
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg overflow-hidden border border-gray-300 bg-gray-100">
            <button
              onClick={() => setTab("oneway")}
              className={`px-8 py-3 font-semibold ${
                tab === "oneway"
                  ? "bg-gradient-to-r from-[#BF9B30] to-[#a88425] text-white"
                  : "text-gray-700"
              }`}
            >
              ONE WAY
            </button>
            <button
              onClick={() => setTab("hour")}
              className={`px-8 py-3 font-semibold ${
                tab === "hour"
                  ? "bg-gradient-to-r from-[#BF9B30] to-[#a88425] text-white"
                  : "text-gray-700"
              }`}
            >
              BY HOUR
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Pickup Location"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onFocus={() => handleInputFocus("from")}
            onBlur={handleInputBlur}
            className="border-2 rounded-lg px-4 py-3"
          />

          {tab === "oneway" ? (
            <input
              type="text"
              placeholder="Drop-off Location"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              onFocus={() => handleInputFocus("to")}
              onBlur={handleInputBlur}
              className="border-2 rounded-lg px-4 py-3"
            />
          ) : (
            <select
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="border-2 rounded-lg px-4 py-3"
            >
              <option>1 Hour</option>
              <option>2 Hours</option>
              <option>3 Hours</option>
              <option>4 Hours</option>
              <option>6 Hours</option>
              <option>8 Hours</option>
            </select>
          )}

          <div onClick={handleDateDisplayClick} className="border-2 rounded-lg px-4 py-3 cursor-pointer">
            {formatDateDisplay(dateTime)}
          </div>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 rounded-lg px-4 py-3"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-2 rounded-lg px-4 py-3"
            required
          />

          <input
            type="email"
            placeholder="Email (Optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded-lg px-4 py-3"
          />

          <button
            onClick={handleSearch}
            disabled={!name || !phone || !from || (tab === "oneway" && !to)}
            className="lg:col-span-4 bg-gradient-to-r from-[#BF9B30] to-[#a88425] text-white font-semibold py-4 rounded-lg"
          >
            SEARCH VEHICLES
          </button>
        </div>
      </div>
    </section>
  );
}
