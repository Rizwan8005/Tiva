import React from "react";
import FooterLogo from "../../assets/images/footer-logo.png";
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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-12 md:px-8 xs:px-4 bg-darkBlue">
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-[1px] py-6 border-borderColor">
        <div className="pr-10 md:pr-5 xs:pr-0 xs:w-full md:mb-5 xs:mb-2">
          <div className="mb-5">
            <Link to="/">
              <img
                src={FooterLogo}
                alt="Logo"
                className="w-[200px] md:w-150 sm:w-100 xs:w-40 cursor-pointer"
              />
            </Link>
          </div>
          <p className="text-sm text-footerColor leading-loose font-semibold">
            AI technology works by simulating human intelligence processes such
            as learning, reasoning, and problem-solving through the use of
            algorithms and data.
          </p>
          <div className="flex gap-2">
            <div className="flex gap-4 items-center mt-6">
              <div className="w-10 h-10 object-cover flex justify-center items-center group aspect-square rounded-full bg-iconsBColor hover:bg-primary transition-all duration-300 transform hover:scale-110">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="cursor-pointer text-primary text-lg group-hover:text-mainWhite"
                />
              </div>
              <div className="w-10 h-10 object-cover flex justify-center items-center group aspect-square rounded-full bg-iconsBColor hover:bg-primary transition-all duration-300 transform hover:scale-110">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="cursor-pointer text-primary text-lg group-hover:text-mainWhite"
                />
              </div>
              <div className="w-10 h-10 object-cover flex justify-center items-center group aspect-square rounded-full bg-iconsBColor hover:bg-primary transition-all duration-300 transform hover:scale-110">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="cursor-pointer text-primary text-lg group-hover:text-mainWhite"
                />
              </div>

              <div className="w-10 h-10 object-cover flex justify-center items-center group aspect-square rounded-full bg-iconsBColor hover:bg-primary transition-all duration-300 transform hover:scale-110">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer text-primary text-lg group-hover:text-mainWhite"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 xs:w-full xs:mb-0 text-center md:text-end sm:text-start">
          <h3 className="font-semibold mb-6 xs:mb-2 text-lg text-mainWhite">
            Our Services
          </h3>
          <ul className="text-sm leading-10">
            <Link to="/services">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                Big Data Analytics
              </li>
            </Link>
            <Link to="/services">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                Data Visualization
              </li>
            </Link>
            <Link to="/services">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                UX/UI Strategy
              </li>
            </Link>
            <Link to="/services">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                Machine Learning
              </li>
            </Link>
            <Link to="/services">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                Cloud Automation
              </li>
            </Link>
          </ul>
        </div>
        <div className="mt-4 xs:w-full xs:mb-0 text-center md:text-start">
          <h3 className="font-semibold mb-6 xs:mb-2 text-lg text-mainWhite">
            Our Links
          </h3>
          <ul className="text-sm leading-10">
            <Link to="/">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                Home
              </li>
            </Link>
            <Link to="/services">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                Services
              </li>
            </Link>
            <Link to="/portfolio">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                Portfolio
              </li>
            </Link>
            <Link to="/about-us">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                About Us
              </li>
            </Link>
            <Link to="/blog">
              <li className="text-footerColor font-semiBold hover:text-primary">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                Blog
              </li>
            </Link>
            <li className="text-footerColor font-semiBold hover:text-primary">
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="mt-4 xs:w-full xs:mb-0 lg:text-start md:text-end sm:text-start">
          <h3 className="font-semibold mb-6 text-lg text-mainWhite">
            Contact Us
          </h3>
          <ul className="text-sm leading-7">
            <li className="flex  gap-3 items-center text-footerColor font-semiBold pb-4 hover:text-primary lg:justify-start md:justify-end sm:justify-start">
              <div className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>
              <a href="/">205 Auburn Street, New York, United State</a>
            </li>
            <li className="flex gap-3 items-center text-footerColor font-semiBold pb-4 hover:text-primary lg:justify-start md:justify-end sm:justify-start">
              <div
                className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor transition-colors duration-300"
                style={{ transform: "rotate(100deg)" }}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>

              <a href="tel:+11234567890">
                +1 (123) 456-7890 <br /> +91-234-567-8900
              </a>
            </li>
            <li className="flex gap-3 items-center text-footerColor font-semiBold pb-4 hover:text-primary lg:justify-start md:justify-end sm:justify-start">
              <div className="w-10 h-10 object-cover flex justify-center items-center aspect-square rounded-full bg-iconsBColor transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="cursor-pointer text-primary text-lg"
                />
              </div>
              <a href="mailto:ailogo@example.com">
                ailogo@example.com <br />
                aitest@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-borderColor py-4 md:flex-col md:items-start">
        <p className="text-sm xs:text-xs text-mainWhite font-semibold md:pb-5">
          © <span className="text-primary cursor-pointer">Ai</span> is Proudly
          Owned by <span className="text-primary cursor-pointer">Bitsclan</span>
        </p>
        <div>
          <ul className="list-disc cursor-pointer flex gap-9 font-semibold sm:flex-col sm:gap-2 sm:text-xs">
            <Link to="/privacy-policy">
              <li className="font-semibold list-none text-mainWhite hover:text-primary">
                Privacy Policy
              </li>
            </Link>
            <li className="font-semibold list-none text-mainWhite hover:text-primary">
              Term of Use
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
