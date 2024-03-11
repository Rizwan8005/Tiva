import React from 'react'
import Layout from '../../layout/Layout'
import Blog1 from '../../assets/images/blog-1.jpg'
import {portfolio_details_data} from '../../Data/PortfolioData'
import BgPortfolio from '../../assets/images/bg-portfolio.png'
import { Link } from 'react-router-dom'
import AboutPortfolio from '../AboutPortfolio/AboutPortfolio'

const PortfolioDetails = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 md:mt-8 sm:mt-4">
        <div className="flex justify-between gap-4 lg:flex-col py-14 sm:py-3">
          <div className="w-[67%] lg:w-full">
            <div>
              <img src={Blog1} alt="blog" className="rounded-lg" />
            </div>
            <AboutPortfolio />
          </div>
          <div className="w-[35%] lg:w-full">
            <div className="shadow-navbar-button p-8 rounded-lg sm:p-2 sm:mt-4">
              <div className="text-2xl font-bold text-darkBlue pb-6 sm:text-lg sm:pb-1">
                Project Details
              </div>
              <div>
                {portfolio_details_data.map((item, i) => {
                  return (
                    <div
                      className="flex items-center justify-between text-lightGray border-b border-inputBorder py-4 sm:py-2 sm:text-sm xs:text-xs"
                      key={i}
                    >
                      <p>{item.title}:</p>
                      <p className="font-semibold">{item.project}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative bg-lightBlue rounded-lg px-8 py-12 w-full object-cover mt-12 z-10">
              <p className="text-3xl sm:text-2xl xs:text-lg font-bold text-mainWhite mb-12">
                Need A Brand New Project?
              </p>
              <Link
                className="text-mainWhite font-bold inline px-14 py-4 rounded-full bg-primary cursor-pointer hover:bg-darkBlue transition-all duration-300 transform hover:scale-110 lg:text-sm sm:px-6 sm:py-3 sm:text-xs"
                to="/contact"
              >
                Contact Now
              </Link>
              <img
                className="absolute w-full h-full top-0 left-0 -z-10"
                src={BgPortfolio}
                alt="bg"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PortfolioDetails