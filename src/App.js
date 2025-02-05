import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import Stylist from "./Pages/Stylist/Stylist";
import BookAppointment from "./Pages/BookAppointment/BookAppointment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/stylist" element={<Stylist />} />
        <Route path="/bookAppointment" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
