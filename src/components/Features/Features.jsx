import React from "react";
import HeroWave from "../../assets/images/hero-wave.png";
import { feature_data } from "../../Data/FeaturesData";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <Layout>
      <div>
        <div className="px-8 xs:px-3 mt-12 md:mt-8 sm:mt-6">
          <div className="flex items-center gap-3 justify-center">
            <img src={HeroWave} alt="wave" />
            <p className="text-lightBlue font-semibold">OUR FEATURES</p>
          </div>
          <h1 className="text-center font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
            Actionable Analytics For <br /> Your Business
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 mt-12 justify-center gap-5">
            {feature_data.map((feat, i) => {
              return (
                <div
                  className={` text-center shadow-navbar-button px-3 py-12 rounded-lg hover:bg-featureBgColor ${
                    feat.isBg ? "bg-featureBgColor" : ""
                  }`}
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={`${i * 200}`}
                >
                  <div className="pb-3 flex justify-center">
                    <img src={feat?.FeatureImg} alt="feature" />
                  </div>
                  <p className="pb-3 text-darkBlue font-bold hover:text-primary text-2xl transition-all duration-300 transform lg:text-lg">
                    {feat?.title}
                  </p>
                  <p className="pb-3 text-lightGray font-semibold lg:text-sm xs:text-xs">
                    {feat?.desc}
                  </p>
                  <Link to={`/services-detail/${feat.id}`}>
                    <span className="text-lightBlue hover:text-primary cursor-pointer font-bold transition-all duration-300 transform lg:text-sm">
                      {feat?.viewBtn}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
