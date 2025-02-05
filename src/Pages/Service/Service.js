import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div id="webcrumbs">
      <div className="w-[1440px] font-sans">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Our Services</h2>
            <div className="flex gap-4">
              <details className="relative">
                <summary className="px-4 py-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  Sort by
                  <span className="material-symbols-outlined align-middle ml-2">
                    sort
                  </span>
                </summary>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    Price: Low to High
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    Price: High to Low
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    Duration
                  </button>
                </div>
              </details>
              <details className="relative">
                <summary className="px-4 py-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  Filter
                  <span className="material-symbols-outlined align-middle ml-2">
                    filter_list
                  </span>
                </summary>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    Hair
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    Spa
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    Beauty
                  </button>
                </div>
              </details>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="group rounded-2xl bg-gray-50 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Luxury Massage
                    </h3>
                    <p className="text-gray-600">90 minutes</p>
                  </div>
                  <p className="text-xl font-bold">$120</p>
                </div>
                <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            <div className="group rounded-2xl bg-gray-50 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hair Styling</h3>
                    <p className="text-gray-600">60 minutes</p>
                  </div>
                  <p className="text-xl font-bold">$80</p>
                </div>
                <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            <div className="group rounded-2xl bg-gray-50 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Facial Treatment
                    </h3>
                    <p className="text-gray-600">45 minutes</p>
                  </div>
                  <p className="text-xl font-bold">$95</p>
                </div>
                <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
