import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import Stylist from "../Pages/Stylist";
import BookAppointment from "../Pages/BookAppointment";

const AppRouter = () => {
  const routes = [
    { path: "/", element: <SignUp /> },
    { path: "/signIn", element: <SignIn /> },
    { path: "/home", element: <Home /> },
    { path: "/services", element: <Service /> },
    { path: "/stylist", element: <Stylist /> },
    { path: "/bookAppointment", element: <BookAppointment /> },
  ];

  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
