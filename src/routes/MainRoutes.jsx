import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from '../utils/Header/Header'
import Footer from "../utils/Footer/Footer";
import ServicesPage from "../pages/ServicesPage";
import PortfolioPage from "../pages/PortfolioPage";
import AboutUsPage from "../pages/AboutUsPage";
import BlogPage from "../pages/BlogPage";
import ContactUsPage from "../pages/ContactUsPage";
import { BeatLoader } from "react-spinners";

const MainRoutes = () => {
const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the timeout as needed
  }, []);
  return (
    <Router>
      <Header />
      {isLoading ? (
        <div
          className="flex justify-center items-center h-screen"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BeatLoader loading={true} color="black" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      )}
      <Footer />
    </Router>
  );
};

export default MainRoutes;
