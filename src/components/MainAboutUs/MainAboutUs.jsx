import React from 'react'
import AboutUsHero from '../AboutUsHero/AboutUsHero';
import AboutUs from '../AboutUs/AboutUs';
import Counter from '../Counter/Counter';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';
import ClientsInfo from '../ClientsInfo/ClientsInfo';
import Blogs from '../Blogs/Blogs';

const MainAboutUs = () => {
  return (
    <div>
      <AboutUsHero />
      <AboutUs />
      <Counter/>
      <Portfolio />
      <Testimonial />
      <ClientsInfo />
      <Blogs />
    </div>
  );
}

export default MainAboutUs