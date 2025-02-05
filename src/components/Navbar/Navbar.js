import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signIn");
  };
  const handleHome = () => {
    navigate("/home");
  };
  const handleServices = () => {
    navigate("/services");
  };
  const handleStylist = () => {
    navigate("/stylist");
  };
  const handleBook = () => {
    navigate("/bookAppointment");
  };

  return (
    <div id="webcrumbs">
      <div className="font-sans">
        <nav className="flex items-center justify-between p-6 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-bold" onClick={handleHome}>
              BeautySpa
            </h1>
            <div className="flex gap-8">
              <a
                className="hover:-translate-y-0.5 transition-transform"
                onClick={handleHome}
              >
                Home
              </a>
              <a
                className="hover:-translate-y-0.5 transition-transform"
                onClick={handleServices}
              >
                Services
              </a>
              <a
                className="hover:-translate-y-0.5 transition-transform"
                onClick={handleStylist}
              >
                Stylists
              </a>
              <a
                className="hover:-translate-y-0.5 transition-transform"
                onClick={handleBook}
              >
                Book
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              onClick={handleBook}
            >
              Book Now
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
