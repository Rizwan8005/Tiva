import React from "react";
import Layout from "../../layout/Layout";

const GoogleMap = () => {
  return (
    <Layout>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27234.828064573016!2d74.24114848519613!3d31.431933502258172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901080b110569%3A0x33b0fb0b941e5adf!2sWAPDA%20Town%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709791614701!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Layout>
  );
};

export default GoogleMap;
