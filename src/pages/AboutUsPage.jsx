import React, { useEffect } from 'react'
import MainAboutUs from '../components/MainAboutUs/MainAboutUs';

const AboutUsPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainAboutUs />
    </div>
  );
}

export default AboutUsPage