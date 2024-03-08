import React from 'react'
import HeroWave from "../../assets/images/hero-wave.png";
import {services_data} from '../../Data/ServicesData'
import Layout from '../../layout/Layout';
import { Link } from 'react-router-dom';
const OurServices = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 mt-16 md:mt-8 sm:mt-6">
        <div className="flex items-center gap-3 justify-center">
          <img src={HeroWave} alt="wave" />
          <p className="text-lightBlue font-semibold">OUR SERVICES</p>
        </div>
        <h1 className="text-center font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
          We Provide Big Data Analytics
          <br /> Technical Data Issues
        </h1>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-12 justify-center gap-5">
          {services_data.map((service, i) => {
            return (
              <div
                className="text-center shadow-navbar-button px-3 py-12 rounded-md bg-featureBgColor"
                data-aos="fade-right"
                data-aos-delay={`${i * 200}`}
                key={i}
              >
                <div className="pb-3 flex justify-center">
                  <img
                    src={service?.servicesImg}
                    alt="services"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="transition-transform duration-500 transform hover:scale-110"
                  />
                </div>

                <p className="pb-3 text-darkBlue font-bold hover:text-primary text-2xl transition-all duration-300 transform lg:text-base">
                  {service?.title}
                </p>
                <p className="pb-3 text-lightGray font-semibold lg:text-sm xs:text-xs mb-3">
                  {service?.desc}
                </p>
                <Link to={`/services-detail/${service.id}`}>
                  <div className="text-lightGray hover:bg-primary hover:text-mainWhite cursor-pointer border inline px-7 py-3 border-borderColor rounded-full font-bold transition-all duration-300 transform lg:text-sm hover:border-none">
                    {service?.learnMore}
                  </div>
                </Link>
              </div>
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

export default OurServices