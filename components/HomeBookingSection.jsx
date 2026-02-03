"use client";

import { useState } from "react";

const HomeBookingSection = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    pickupDate: "",
    pickupTime: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Quotation Request

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

Pickup Location: ${formData.pickup}
Drop-off Location: ${formData.dropoff}
Pick-up Date: ${formData.pickupDate}
Pick-up Time: ${formData.pickupTime}
`;

    const whatsappNumber = "447310236707"; // UK number without + or spaces

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      pickup: "",
      dropoff: "",
      pickupDate: "",
      pickupTime: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
      <iframe src="https://booking.royalerides.co.uk/booking-form" className="iframe-responsive" style={{width: "100%", minHeight: "550px", border: "0px"}} title="Book Now"></iframe>
        {/*<div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">

          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#002462]">
              Check Availability
            </h2>
            <p className="text-gray-600 mt-2">
              Book your luxury chauffeur ride in seconds
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  className="w-full text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  className="w-full text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pick-up Location
                </label>
                <input
                  required
                  type="text"
                  className="w-full text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                  value={formData.pickup}
                  onChange={(e) =>
                    setFormData({ ...formData, pickup: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Drop-off Location
                </label>
                <input
                  required
                  type="text"
                  className="w-full text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                  value={formData.dropoff}
                  onChange={(e) =>
                    setFormData({ ...formData, dropoff: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pick-up Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                  value={formData.pickupDate}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupDate: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pick-up Time
                </label>
                <input
                  required
                  type="time"
                  className="w-full text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF9B30]"
                  value={formData.pickupTime}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupTime: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                type="submit"
                className="bg-[#BF9B30] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#a88528] transition"
              >
                Make Booking
              </button>
            </div>
          </form>

        </div>*/}
      </div>
    </section>
  );
};

export default HomeBookingSection;
