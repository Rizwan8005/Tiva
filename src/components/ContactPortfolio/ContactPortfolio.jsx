import React from 'react'
import Layout from '../../layout/Layout';
import HeroWave from "../../assets/images/hero-wave.png";
import PortfolioContactImg from '../../assets/images/portfolio-contact-img.png'

const ContactPortfolio = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 py-8 bg-featureBgColor">
        <div className="flex items-center lg:flex-col py-12">
          <div className="w-1/2 lg:w-full lg:mb-7">
            <div className="flex items-center gap-3">
              <img src={HeroWave} alt="wave" />
              <p className="text-lightBlue font-semibold">Contact Us</p>
            </div>
            <h1 className="font-bold text-4xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
              Need A Brand New Project?
            </h1>
            <p className="pt-4 text-lightGray font-semibold max-w-[680px] mb-10 sm:text-sm xs:text-xs xs:mb-6 md:pt-3">
              The Smart Home Energy Management System is a project aimed at
              helping homeowners monitor and optimize their energy usage to
              reduce costs and environmental impact. The system will consist of
              hardware and software components that enable users to track their
              energy consumption in real-time, identify energy-saving
              opportunities, and control smart devices to optimize energy usage.
              The system will collect data from smart meters and sensors
              installed in the home to monitor energy usage for different
              appliances and devices.
            </p>
            <div className="text-mainWhite font-bold inline px-10 py-4 rounded-full bg-primary cursor-pointer hover:bg-darkBlue transition-all duration-300 transform hover:scale-110 lg:text-sm sm:px-6 sm:py-3 sm:text-xs">
              Contact Now
            </div>
          </div>
          <div className="w-1/2 lg:w-full">
            <img
              src={PortfolioContactImg}
              alt="portfolio-img"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPortfolio