import React from "react";
import "../assets/styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/bookAppointment");
  };
  return (
    <div id="webcrumbs">
      <div className="font-sans">
        <section className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40">
            <div className="flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-6xl font-bold mb-6">Luxury Salon & Spa</h2>
              <p className="text-xl mb-8">
                Experience the ultimate in relaxation and beauty
              </p>
              <button
                className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all hover:scale-105"
                onClick={handleBookAppointment}
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-8 p-16">
          <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
            <span className="material-symbols-outlined text-4xl mb-4">spa</span>
            <h3 className="text-xl font-semibold mb-2">Luxury Spa</h3>
            <p className="text-gray-600">
              Indulge in our premium spa treatments for ultimate relaxation.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
            <span className="material-symbols-outlined text-4xl mb-4">
              content_cut
            </span>
            <h3 className="text-xl font-semibold mb-2">Hair Styling</h3>
            <p className="text-gray-600">
              Transform your look with our expert hair styling services.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
            <span className="material-symbols-outlined text-4xl mb-4">
              face
            </span>
            <h3 className="text-xl font-semibold mb-2">Beauty Care</h3>
            <p className="text-gray-600">
              Complete beauty treatments for a radiant appearance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
