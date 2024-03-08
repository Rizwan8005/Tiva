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
import { HashLoader } from "react-spinners";
import SinglePortfolioDetails from "../pages/SinglePortfolioDetails";
import SingleServicesDetailPage from "../pages/SingleServicesDetailPage";
import SingleBlogPage from '../pages/SingleBlogPage'
import GoToTopPage from "../pages/GoToTopPage";

const MainRoutes = () => {
const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
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
          <HashLoader
            loading={true}
            color="#ff7a41"
            css={`
              display: block;
              margin: 0 auto;
            `}
          />
        </div>
      ) : (
        <><Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route
              path="/services-detail/:id"
              element={<SingleServicesDetailPage />} />
            <Route
              path="/portfolio-details/:id"
              element={<SinglePortfolioDetails />} />
            <Route path="/blog-details/:id" element={<SingleBlogPage />} />
          </Routes><GoToTopPage /></>
      )}
      <Footer />
    </Router>
  );
};

export default MainRoutes;
