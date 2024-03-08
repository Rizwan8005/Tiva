import React from "react";
import { Input, Form } from "antd";
import Layout from "../../layout/Layout";
import HeroWave from "../../assets/images/hero-wave.png";
import AboutUs from '../../assets/images/about-hero.png'

const ContactUsForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values:", values);
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

  return (
    <Layout>
      <div className="px-8 xs:px-3 mt-20 md:mt-8 sm:mt-6">
        <div className="flex items-center gap-3">
          <img src={HeroWave} alt="wave" />
          <p className="text-lightBlue font-semibold">Contact Us</p>
        </div>
        <h1 className="font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
          Get In Touch
        </h1>
        <div className="flex justify-between items-center mb-14 gap-3 sm:flex-col mt-3 sm:mb-8 md:mt-5">
          <div className="w-[47%] sm:w-full">
            <Form
              form={form}
              name="contact-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter your name!",
                  },
                ]}
              >
                <Input placeholder="Name" size="large" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                ]}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input placeholder="Phone" size="large" />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter your message!",
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Message" size="large" />
              </Form.Item>
              <div className="mt-12 sm:mt-5">
                <div
                  type="primary"
                  htmlType="button"
                  className="text-mainWhite font-bold inline px-14 py-4 rounded-full bg-primary cursor-pointer hover:bg-darkBlue transition-all duration-300 transform hover:scale-110 sm:px-6 sm:py-3 sm:text-xs"
                  onClick={handleSubmit}
                >
                  Submit Now
                </div>
              </div>
            </Form>
          </div>
          <div className="w-[47%] sm:w-full sm:mt-5">
            <img
              src={AboutUs}
              alt="about"
              className="max-w-[80%] md:max-w-[100%]"
              data-aos="fade-down"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUsForm;
