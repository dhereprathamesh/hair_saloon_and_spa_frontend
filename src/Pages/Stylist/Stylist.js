import React from "react";
import "./stylist.css";

const Stylist = () => {
  return (
    <div id="webcrumbs">
      <div className="w-[1440px] font-sans">
        <header className="py-12 bg-gray-50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Our Expert Stylists</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of professional stylists and beauty experts who are
              passionate about making you look and feel your best.
            </p>
          </div>
        </header>

        <main className="grid grid-cols-3 gap-8 p-16">
          <div className="group relative">
            <div className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3"
                  alt="Stylist"
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-4">Senior Hair Stylist</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100">
                  Color Specialist
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100">
                  Bridal
                </span>
              </div>
              <p className="text-gray-600">
                10+ years of experience in hair styling and coloring.
              </p>
              <button className="mt-6 w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>

          <div className="group relative">
            <div className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1"
                  alt="Stylist"
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-gray-600 mb-4">Master Colorist</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100">
                  Balayage
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100">
                  Fashion Colors
                </span>
              </div>
              <p className="text-gray-600">
                Specialized in creative coloring and modern techniques.
              </p>
              <button className="mt-6 w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>

          <div className="group relative">
            <div className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1601931935821-5fbe71157695"
                  alt="Stylist"
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Emma Rodriguez</h3>
              <p className="text-gray-600 mb-4">Beauty Specialist</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100">
                  Makeup
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100">
                  Skincare
                </span>
              </div>
              <p className="text-gray-600">
                Expert in bridal makeup and skincare treatments.
              </p>
              <button className="mt-6 w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Stylist;
