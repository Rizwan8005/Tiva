import React from 'react'
import Layout from '../../layout/Layout'
import HeroWave from "../../assets/images/hero-wave.png";
import {portfolio_data} from '../../Data/PortfolioData'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 mt-12 md:mt-8 sm:mt-6 bg-featureBgColor py-20 md:py-10">
        <div className="flex justify-center items-center gap-3">
          <img src={HeroWave} alt="wave" />
          <p className="text-lightBlue font-semibold">OUR PORTFOLIO</p>
        </div>
        <h1 className="text-center font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
          We Ensure Data and Analytics
          <br /> Services Run Well
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-12 md:mt-7 gap-5">
          {portfolio_data.map((portfolio, i) => {
            return (
              <Link to={`/portfolio-details/${portfolio.id}`}>
                <div key={i} className="relative cursor-pointer">
                  <img
                    src={portfolio.portfolioImg}
                    alt="portfolio"
                    className="rounded-lg duration-300"
                  />
                  <div className="w-full h-full absolute flex flex-col justify-end opacity-0 hover:opacity-100 bg-shadowColor bg-opacity-80 rounded-lg p-4 text-center top-0 left-0 transition-opacity duration-300">
                    <p className="text-xl font-semibold text-mainWhite">
                      {portfolio.name}
                    </p>
                    <p className="text-sm text-mainWhite">{portfolio.title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="text-center text-lightGray pt-8 font-semibold sm:text-sm">
          Get Ready to Start It’s Fast & Easy.{" "}
          <span className="text-primary cursor-pointer">Click Here</span>
        </p>
      </div>
    </Layout>
  );
}

export default Portfolio