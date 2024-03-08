import React from "react";
import { Input, Form, Row, Col } from "antd";

const SingleBlogCommentsForm = () => {
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
    <div className="shadow-navbar-button px-12 py-10 sm:px-3 sm:py-8 md:mt-8 mt-10 mb-5">
      <div className="text-3xl font-bold text-darkBlue pb-7 sm:text-lg sm:pb-4">
        Leave A Comment
      </div>
      <div className="w-full">
        <Form
          form={form}
          name="contact-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={24} sm={12}>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name!",
                  },
                ]}
              >
                <Input placeholder="Your Name" size="large" />
              </Form.Item>
            </Col>
            <Col span={24} sm={12}>
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
                <Input placeholder="Your Email" size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="website">
            <Input placeholder="Your Website" size="large" />
          </Form.Item>
          <Form.Item
            name="Type Your Comment"
            rules={[
              {
                required: true,
                message: "Please enter your comment!",
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Message" size="large" />
          </Form.Item>
          <div className="mt-12 sm:mt-5">
            <div
              type="primary"
              htmlType="button"
              className="text-mainWhite font-bold inline px-14 py-4 rounded-full bg-primary cursor-pointer hover:bg-darkBlue transition-all duration-300 transform hover:scale-110 lg:text-sm sm:px-6 sm:py-3 sm:text-xs"
              onClick={handleSubmit}
            >
              Post Comment
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SingleBlogCommentsForm;
