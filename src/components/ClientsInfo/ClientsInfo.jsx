import React from 'react'
import Layout from '../../layout/Layout'
import HeroWave from "../../assets/images/hero-wave.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { clients_info, sec_clients_info } from "../../Data/ClientsInfo";

const ClientsInfo = () => {
  // slides breakpoints
  const breakpoints = {
    1440: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
    },
    280: {
      slidesPerView: 1,
    },
  };
  return (
    <Layout>
      <div className="px-8 xs:px-3 mt-12 md:mt-8 sm:mt-6">
        <div className="flex justify-center items-center gap-3">
          <img src={HeroWave} alt="wave" />
          <p className="text-lightBlue font-semibold">Over 100K+ Clients</p>
        </div>
        <h1 className="text-center font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
          Join 100.000+ Companies
          <br /> Who Have Reached
        </h1>
        <div className="mt-8 shadow-navbar-button p-16 rounded-lg">
          <div className="flex justify-between">
            <Swiper
              modules={[Navigation, Scrollbar, Autoplay]}
              breakpoints={breakpoints}
              spaceBetween={50}
              speed={3000}
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              //    Responsive breakpoints
              onSwiper={(swiper) => console.log(swiper)}
            >
              {clients_info.map((client, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img
                      src={client.clientLogo}
                      alt="logo1"
                      className="opacity-30 hover:opacity-100 transition-opacity duration-300"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          
          {/* second slider */}
          <div className="flex justify-between mt-7">
            <Swiper
              modules={[Navigation, Scrollbar, Autoplay]}
              breakpoints={breakpoints}
              spaceBetween={50}
              speed={3000}
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              //    Responsive breakpoints
              onSwiper={(swiper) => console.log(swiper)}
            >
              {sec_clients_info.map((client, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img
                      src={client.clientLogo}
                      alt="logo1"
                      className="opacity-30 hover:opacity-100 transition-opacity duration-300"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClientsInfo