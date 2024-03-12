import React from 'react'
import HeroWave from "../../assets/images/hero-wave.png";
import About from "../../assets/images/about-image-1.png";
import Layout from '../../layout/Layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-regular";

const AboutUs = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 md:mt-8 sm:mt-6">
        <div className="flex items-center lg:flex-col">
          <div className="w-1/2 lg:w-full">
            <img src={About} alt="hero-img" data-aos="fade-up" />
          </div>
          <div className="w-1/2 lg:w-full lg:mb-7 mt-12">
            <div className="flex items-center gap-3">
              <img src={HeroWave} alt="wave" />
              <p className="text-lightBlue font-semibold">ABOUT US</p>
            </div>
            <h1 className="font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
              Focusing on Analysis, Techniques & Experience
            </h1>
            <p className="pt-8 text-lightGray leading-loose font-semibold max-w-[680px] mb-4 sm:text-sm xs:text-xs  md:pt-3">
              Focusing on analysis, techniques, and experience in the context of
              a project or role typically means emphasizing the importance of
              analytical skills, the use of specific techniques, and the depth
              of practical experience in a particular field. We place a high
              value on thorough analysis to understand the problem domain,
              identify key requirements, and develop comprehensive solutions.
              This involves using a variety of analytical techniques, such as
              statistical analysis, data mining, and predictive modeling, to
              extract meaningful insights from data.
            </p>
            <div className="sm:text-sm xs:text-xs">
              <div className="flex items-center gap-2 mb-4">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-lightBlue text-lg"
                />
                <p className="text-darkBlue font-medium">
                  Various analysis options.
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-lightBlue text-lg"
                />
                <p className="text-darkBlue font-medium">
                  Page Load (time, size, number of requests).
                </p>
              </div>
              <div className="flex items-center gap-2 mb-12 xs:mb-6">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-lightBlue text-lg"
                />
                <p className="text-darkBlue font-medium">Big data analysis.</p>
              </div>
            </div>
            <button className="text-mainWhite font-bold inline px-14 py-4 rounded-full bg-primary cursor-pointer hover:bg-darkBlue transition-all duration-300 transform hover:scale-110 lg:text-sm sm:px-6 sm:py-3 sm:text-xs">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs