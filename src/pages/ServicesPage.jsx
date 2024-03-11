import React, { useEffect } from 'react'
import MainServices from '../components/MainServices/MainServices';

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainServices />
    </div>
  );
}

export default Services