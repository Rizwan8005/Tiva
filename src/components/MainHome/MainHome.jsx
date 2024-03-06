import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import AboutUs from '../AboutUs/AboutUs';
import OurServices from '../OurServices/OurServices';
import Counter from '../Counter/Counter';
import OurExperties from '../OurExperties/OurExperties';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';
import ClientsInfo from '../ClientsInfo/ClientsInfo';
import Blogs from '../Blogs/Blogs';

const MainHome = () => {
  //  <div
  //    style={{
  //      height: "100vh",
  //      display: "flex",
  //      justifyContent: "center",
  //      alignItems: "center",
  //    }}
  //  >
  //    <BeatLoader loading={true} color="black" />
  //    {/* <Spin /> */}
  //  </div>;
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <OurServices />
      <Counter />
      <OurExperties />
      <Portfolio />
      <Testimonial />
      <ClientsInfo />
      <Blogs />
    </div>
  );
}

export default MainHome