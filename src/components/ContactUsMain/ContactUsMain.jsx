import React from 'react'
import ContactUsHero from '../ContactUsHero/ContactUsHero';
import GoogleMap from '../GoogleMap/GoogleMap';
import ContactUsForm from '../ContactUsForm/ContactUsForm';

const ContactUsMain = () => {
  return (
    <div>
      <ContactUsHero />
      <GoogleMap />
      <ContactUsForm />
    </div>
  );
}

export default ContactUsMain