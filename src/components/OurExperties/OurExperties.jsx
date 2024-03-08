import React from 'react'
import Layout from '../../layout/Layout';
import HeroWave from "../../assets/images/hero-wave.png";
import Experties from '../../assets/images/experties.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-regular";

const OurExperties = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 mt-12 md:mt-8 sm:mt-6">
        <div className="flex items-center lg:flex-col">
          <div className="w-1/2 lg:w-full lg:mb-7">
            <div className="flex items-center gap-3">
              <img src={HeroWave} alt="wave" />
              <p className="text-lightBlue font-semibold">WHO WE ARE</p>
            </div>
            <h1 className="font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
              We are Expert in Data Science & Analytics
            </h1>
            <p className="pt-8 text-lightGray font-semibold max-w-[680px] mb-6 sm:mb-3 sm:text-sm xs:text-xs md:pt-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>
            <div className="sm:text-sm xs:text-xs text-darkBlue">
              <div className="flex items-center gap-2 mb-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
                <p className="font-medium">Various analysis options.</p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
                <p className="font-medium">
                  Page Load (time, size, number of requests).
                </p>
              </div>
              <div className="flex items-center gap-2 mb-12 sm:mb-6">
                <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
                <p className="font-medium">Big data analysis.</p>
              </div>
            </div>
            <div className="text-mainWhite font-bold inline px-14 py-4 rounded-full bg-primary cursor-pointer hover:bg-darkBlue transition-all duration-300 transform hover:scale-110 lg:text-sm sm:px-6 sm:py-3 sm:text-xs">
              Discover More
            </div>
          </div>
          <div className="w-1/2 lg:w-full">
            <img src={Experties} alt="hero-img" data-aos="fade-up" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OurExperties