import React from "react";
import Logo from '../../assets/images/logo-4.png'
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";

const Footer = () => {
  return (
    <footer className="px-12 md:px-8 xs:px-4 bg-darkBlue">
      <div className="flex flex-wrap justify-between xs:flex-col border-t-[1px] py-6 border-borderColor">
        <div className="w-2/6 md:w-1/2 pr-10 md:pr-5 xs:pr-0 xs:w-full md:mb-5 xs:mb-2">
          <div className="mb-5">
            <img className="w-[180px]" src={Logo} alt="Logo" />
          </div>
          <p className="text-sm text-footerColor leading-loose font-semibold">
            There are many variations of passages of Ipsum available, but the
            majority have suffered alteration in some form, by injected humour
            or randomised words which.
          </p>
          <div className="flex gap-2">
            <div className="flex gap-4 items-center mt-6">
              <div className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>
              <div className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>
              <div className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>

              <div className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/6 md:w-1/2 mt-4 xs:w-full xs:mb-0">
          <h3 className="font-semibold mb-6 xs:mb-2 text-lg text-mainWhite">
            Our Services
          </h3>
          <ul className="text-sm leading-10">
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">Big Data Analytics</a>
            </li>
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">Data Visualization</a>
            </li>
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">UX/UI Strategy</a>
            </li>
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">Machine Learning</a>
            </li>
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">Cloud Automation</a>
            </li>
          </ul>
        </div>
        <div className="w-1/6 md:w-1/2 mt-4 xs:w-full xs:mb-0">
          <h3 className="font-semibold mb-6 xs:mb-2 text-lg text-mainWhite">
            Our Links
          </h3>
          <ul className="text-sm leading-10">
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">Home</a>
            </li>
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">Services</a>
            </li>
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">About Us</a>
            </li>
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">Our Team</a>
            </li>
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/">Contact US</a>
            </li>
          </ul>
        </div>
        <div className="w-1/6 md:w-1/3 mt-4 xs:w-full xs:mb-0">
          <h3 className="font-semibold mb-6 xs:mb-2 text-lg text-mainWhite">
            Contact Us
          </h3>
          <ul className="text-sm leading-7">
            <li className="flex gap-3 items-center text-footerColor font-semiBold pb-4 hover:text-primary">
              <div className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>
              <a href="/">205 Auburn Street, New York, United State</a>
            </li>
            <li className="flex gap-3 items-center text-footerColor font-semiBold pb-4 hover:text-primary">
              <div className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>
              <a href="/">
                +1 (123) 456-7890 <br /> +91-234-567-8900
              </a>
            </li>
            <li className="flex gap-3 items-center text-footerColor font-semiBold pb-4 hover:text-primary">
              <div className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>
              <a href="/">
                [email protected] <br />
                [email protected]
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-borderColor py-4 md:flex-col md:items-start">
        <p className="text-sm xs:text-xs text-mainWhite font-semibold md:pb-5">
          © <span className="text-primary cursor-pointer">Tiva</span> is Proudly
          Owned by{" "}
          <span className="text-primary cursor-pointer">HiBootstrap</span>
        </p>
        <div>
          <ul className="list-disc cursor-pointer flex gap-9 font-semibold sm:flex-col sm:gap-2 sm:text-xs">
            <li className="font-semibold list-none text-mainWhite hover:text-primary">
              Privacy Policy
            </li>
            <li className="font-semibold list-none text-mainWhite hover:text-primary">
              Term Or Use
            </li>
            <li className="font-semibold list-none text-mainWhite hover:text-primary">
              Support
            </li>
            <li className="font-semibold list-none text-mainWhite hover:text-primary">
              Help
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;