import React from "react";
import Layout from "../../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Blog1 from "../../assets/images/blog-1.jpg";
import Download from '../../assets/icons/download.svg'
import { category_data } from "../../Data/categoryData";
import ServicesMachineInfo from "../ServicesMachineInfo/ServicesMachineInfo";

const SingleServiceInfo = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 md:mt-8 sm:mt-4">
        <div className="flex justify-between lg:flex-col py-14 sm:py-3">
          <div className="w-[67%] lg:w-full">
            <div>
              <img
                src={Blog1}
                alt="blog"
                className="rounded-lg"
                data-aos="zoom-in"
              />
            </div>
            <ServicesMachineInfo />
          </div>
          <div className="w-[35%] lg:w-full">
            <div className="shadow-navbar-button p-4 rounded-lg lg:mt-4">
              <div className="flex items-center">
                <input
                  className="w-full h-[56px] border-[1px] border-inputBorder outline-none focus:border-primary py-1 px-2 rounded-l-lg shadow-input sm:h-[40px]"
                  type="text"
                  placeholder="Search"
                  name="email"
                  required
                />
                <div className="bg-primary rounded-r-lg px-6 py-4 sm:px-3 sm:py-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-mainWhite text-lg sm:text-base"
                  />
                </div>
              </div>
            </div>
            <div className="shadow-navbar-button p-4 rounded-lg mt-12 sm:mt-8">
              <div className="text-2xl font-bold text-darkBlue pb-6 sm:text-lg sm:pb-3">
                Category
              </div>
              <div className="grid gap-y-6 sm:gap-y-3">
                {category_data.map((cat, i) => {
                  return (
                    <div
                      className="group relative overflow-hidden cursor-pointer"
                      key={i}
                    >
                      <div className="flex items-center gap-2 border border-inputBorder p-4 rounded-lg relative z-10 sm:text-sm sm:p-2">
                        <p className="text-lightBlue font-bold group-hover:text-mainWhite">
                          {cat.icon}
                        </p>
                        <p className="font-semibold group-hover:text-mainWhite text-lightGray">
                          {cat.title}
                        </p>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-lightBlue transition-all duration-500 rounded-lg transform scale-y-0 origin-bottom z-0 group-hover:scale-y-100"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Download */}
            <div className="shadow-navbar-button p-4 rounded-lg mt-12 sm:mt-8">
              <div className="text-2xl font-bold text-darkBlue pb-6 sm:text-lg sm:pb-3">
                Download
              </div>
              <div className="grid gap-y-6 sm:gap-y-3">
                <div className="flex items-center gap-3 border border-inputBorder p-4 rounded-lg relative z-10 sm:text-sm sm:p-2 cursor-pointer">
                  <img src={Download} alt="download" />
                  <p className="font-semibold group-hover:text-mainWhite">
                    Download Brochure
                  </p>
                </div>
                <div className="flex items-center gap-3 border border-inputBorder p-4 rounded-lg relative z-10 sm:text-sm sm:p-2 cursor-pointer">
                  <img src={Download} alt="download" />
                  <p className="font-semibold group-hover:text-mainWhite">
                    Download Application
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleServiceInfo;
