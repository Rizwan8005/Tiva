import React from 'react'
import Layout from '../../layout/Layout';
import HeroWave from '../../assets/images/hero-wave.png'
import HeroImage from '../../assets/images/hero-image.png'

const Hero = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 md:mt-8 sm:mt-6">
        <div className="flex items-center lg:flex-col mt-28 sm:mt-8">
          <div className="w-1/2 lg:w-full lg:mb-7">
            <div className="flex items-center gap-3">
              <img src={HeroWave} alt="wave" />
              <p className="text-lightBlue font-semibold">BIG DATA ANALYTICS</p>
            </div>
            <h1 className="font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
             Ai and Machine Learning Solutions For Startup Agency
            </h1>
            <p className="pt-8 text-lightGray font-semibold max-w-[680px] mb-10 sm:text-sm xs:text-xs md:pt-3">
              Analyzing customer data to identify different segments based on
              behavior, demographics, or other factors. This helps in targeting
              specific customer groups with tailored marketing strategies. Using
              historical data to make predictions about future trends, such as
              customer behavior, sales forecasting, or market trends. This can
              help in planning and decision-making.
            </p>
            <div className="text-mainWhite inline font-bold px-14 py-4 rounded-full bg-primary cursor-pointer hover:bg-darkBlue transition-all duration-300 transform hover:scale-110 lg:text-sm sm:px-6 sm:py-3 sm:text-xs">
              Get Started
            </div>
          </div>
          <div className="w-1/2 lg:w-full">
            <img src={HeroImage} alt="hero-img" data-aos="fade-up" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Hero