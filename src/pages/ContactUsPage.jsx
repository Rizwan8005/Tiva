import React, { useEffect } from 'react'
import ContactUsMain from '../components/ContactUsMain/ContactUsMain';

const ContactUsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactUsMain />
    </div>
  );
}

export default ContactUsPage