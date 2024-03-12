import React from 'react'
import Layout from '../../layout/Layout'
import AboutImg from '../../assets/images/about-image.png'
import { Link } from 'react-router-dom';

const AboutUsHero = () => {
  return (
    <Layout>
      <div className="bg-featureBgColor">
        <div className="px-8 xs:px-3 md:mt-8 sm:mt-6 py-14">
          <div className="flex items-center justify-between mt-32 sm:flex-col sm:mt-6">
            <div className="w-1/2 sm:w-full sm:mt-2">
              <h1 className="font-bold text-6xl text-darkBlue pb-3 lg:text-3xl sm:text-2xl sm:pb-0">
                About Us
              </h1>
              <p className="font-semibold text-lightGray cursor-pointer inline hover:text-darkBlue">
                <Link to="/">Home</Link> /{" "}
                <span className="text-primary">About Us</span>
              </p>
            </div>
            <div className="w-1/2 sm:w-full sm:mt-5">
              <img src={AboutImg} alt="about-img" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUsHero