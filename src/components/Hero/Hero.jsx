import React from 'react'
import Layout from '../../layout/Layout';
import HeroWave from '../../assets/images/hero-wave.png'
import HeroImage from '../../assets/images/hero-image.png'

const Hero = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 mt-12 md:mt-8 sm:mt-6">
        <div className="flex items-center lg:flex-col">
          <div className="w-1/2  lg:w-full lg:mb-7">
            <div className="flex items-center gap-3">
              <img src={HeroWave} alt="wave" />
              <p className="text-lightBlue font-semibold">BIG DATA ANALYTICS</p>
            </div>
            <h1 className="font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
              Data Science And Analytics Solutions For Startup Agency
            </h1>
            <p className="pt-8 text-lightGray leading-loose font-semibold max-w-[680px] mb-8 sm:text-sm md:pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ectetur ullam corper mattis, pulvinar dapibus
              leo.
            </p>
            <div className="text-mainWhite font-bold inline px-14 py-4 rounded-full bg-primary cursor-pointer hover:bg-darkBlue transition-all duration-300 transform hover:scale-110 lg:text-sm">
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