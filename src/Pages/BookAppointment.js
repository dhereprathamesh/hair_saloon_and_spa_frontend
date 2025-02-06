import React from "react";
import "../assets/styles/bookAppointment.css";

const BookAppointment = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full max-w-[1440px] font-sans mx-auto">
        <header className="py-8 md:py-12 bg-gray-50 px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Book Your Appointment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Schedule your beauty service with our expert team. Please fill out
              the form below and we'll confirm your appointment.
            </p>
          </div>
        </header>

        <main className="max-w-2xl mx-auto p-4 md:p-8">
          <form className="space-y-4 md:space-y-6 bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Time</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                >
                  <option value="">Select time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Service</label>
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
              >
                <option value="">Select service</option>
                <option value="haircut">Haircut & Styling</option>
                <option value="coloring">Hair Coloring</option>
                <option value="makeup">Makeup Service</option>
                <option value="skincare">Skincare Treatment</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Preferred Stylist
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
              >
                <option value="">Select stylist</option>
                <option value="sarah">Sarah Johnson</option>
                <option value="michael">Michael Chen</option>
                <option value="emma">Emma Rodriguez</option>
              </select>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                <span className="text-green-600 text-sm">
                  Selected time slot is available!
                </span>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 md:py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Confirm Booking
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default BookAppointment;
