import React, { useState, useEffect } from "react";
import HeaderLogo from "../../assets/images/header-logo.png";
import { Drawer, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands";
import { Links } from "../../Data/NavbarLinks";
import Layout from "../../layout/Layout";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showTopDrawer, setShowTopDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
  const [form] = Form.useForm();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
console.log(isScrolled, "this is isScrolled");
  // handle drawer
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // handle responsive drawer
  const handleTopDrawer = () => {
    setShowTopDrawer(!showTopDrawer);
  };

  const handleTopDrawerClose = () => {
    setShowTopDrawer(false);
  };
  // handle submit
  const handleSubmit = () => {
    form
      .validateFields()
      .then(() => {
        console.log(form.getFieldsValue());
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };
// drawer screen size
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setShowTopDrawer(false);
      setOpen(false);
    } else if (window.innerWidth < 1024) {
      setOpen(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


  return (
    <Layout>
      <div
        className={`flex justify-between items-center fixed w-full top-0 bg-mainWhite z-40 lg:px-10 sm:px-3 ${
          isScrolled ? "shadow-navbar-button" : ""
        } py-2`}
      >
        <NavLink to="/">
          <div className="pl-8 lg:pl-0">
            <img
              src={HeaderLogo}
              alt="logo"
              className="w-[200px] md:w-150 sm:w-100 xs:w-40"
            />
          </div>
        </NavLink>
        <div className="lg:hidden">
          <ul className="list-disc flex gap-9">
            {Links.map((navItem, i) => {
              return (
                <li
                  className="text-darkBlue font-semibold flex items-center gap-2 list-none hover:text-primary"
                  key={i}
                >
                  <NavLink to={navItem.link}>{navItem.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="lg:block hidden cursor-pointer"
          onClick={handleTopDrawer}
        >
          <div className="w-8 h-0.5 bg-primary my-1"></div>
          <div className="w-8 h-0.5 bg-primary my-1"></div>
          <div className="w-8 h-0.5 bg-primary my-1"></div>
        </div>
        <div className="lg:hidden">
          <div
            type="primary"
            onClick={showDrawer}
            className="bg-blue px-16 py-8 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl text-mainWhite"
            />
          </div>
          <Drawer
            title={
              <div className="flex justify-between items-center">
                <div>
                  <img
                    src={HeaderLogo}
                    alt="logo"
                    className="w-[200px] md:w-150 sm:w-100 xs:w-40 cursor-pointer"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={onClose}
                    className="text-xl cursor-pointer"
                  />
                </div>
              </div>
            }
            onClose={onClose}
            closable={false}
            open={open}
          >
            <h3 className="text-darkBlue text-xl font-bold pb-6">
              Contact Information
            </h3>
            <div>
              <a href="tel:+11234567890">
                <div className="flex items-center gap-2 text-lg pb-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="cursor-pointer text-primary"
                  />
                  <p className="text-darkBlue hover:text-primary">
                    +990-123-4567
                  </p>
                </div>
              </a>
              <a href="mailto:ailogo@example.com">
                <div className="flex items-center gap-2 text-lg pb-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="cursor-pointer text-primary"
                  />
                  <p className="text-darkBlue hover:text-primary cursor-pointer decoration-transparent">
                    ailogo@example.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-2 text-lg cursor-pointer">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="cursor-pointer text-primary"
                />
                <p className="text-darkBlue hover:text-primary cursor-pointer">
                  413 North Las Vegas, NV 89032
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-6">
              <div className="w-10 h-10 cursor-pointer object-cover flex justify-center items-center aspect-square rounded-full bg-gray hover:bg-darkBlue">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-mainWhite text-lg"
                />
              </div>
              <div className="w-10 h-10 cursor-pointer object-cover flex justify-center items-center aspect-square rounded-full bg-gray hover:bg-darkBlue">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-mainWhite text-lg"
                />
              </div>
              <div className="w-10 h-10 cursor-pointer object-cover flex justify-center items-center aspect-square rounded-full bg-gray hover:bg-darkBlue">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-mainWhite text-lg"
                />
              </div>
              <div className="w-10 h-10 cursor-pointer object-cover flex justify-center items-center aspect-square rounded-full bg-gray hover:bg-darkBlue">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-mainWhite text-lg"
                />
              </div>
            </div>
            <h3 className="text-darkBlue text-xl font-bold mt-6 pb-4">
              Ready to Get Started?
            </h3>
            <Form form={form} className="flex flex-col gap-3">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="Your name" size="large" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="Your email" size="large" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: "Please enter your phone" }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="Your phone" size="large" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
                size="large"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input.TextArea placeholder="Enter your message" size="large" />
              </Form.Item>
            </Form>
            <div
              onClick={handleSubmit}
              className="bg-primary mt-3 text-center text-mainWhite py-2 cursor-pointer font-bold rounded-md hover:bg-darkBlue transition-all duration-300"
            >
              Send Message
            </div>
          </Drawer>
        </div>
      </div>
      <div className="lg:block hidden">
        <Drawer
          title={
            <div className="flex justify-between items-center">
              <div>
                <img
                  src={HeaderLogo}
                  alt="logo"
                  className="w-[200px] md:w-150 sm:w-100 xs:w-40"
                />
              </div>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={handleTopDrawerClose}
                className="text-xl cursor-pointer text-primary"
              />
            </div>
          }
          placement="top"
          onClose={handleTopDrawerClose}
          closable={false}
          open={showTopDrawer}
          visible={showTopDrawer}
        >
          {/* Content for the top drawer */}
          <ul className="list-disc gap-9">
            {Links.map((navItem, i) => {
              return (
                <li
                  className="text-darkBlue font-semibold list-none hover:text-primary gap-3"
                  key={i}
                >
                  <div className="border-t border-borderLight py-3">
                    <NavLink
                      to={navItem.link}
                      onClick={() => setShowTopDrawer(false)}
                    >
                      {navItem.name}
                    </NavLink>
                  </div>
                </li>
              );
            })}
          </ul>
        </Drawer>
      </div>
    </Layout>
  );
};

export default Header;
