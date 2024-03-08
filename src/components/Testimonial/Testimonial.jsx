import React from 'react';
import Layout from '../../layout/Layout';
import HeroWave from "../../assets/images/hero-wave.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { testimonail_data } from '../../Data/TestimonialData';
import TestimonailImg from "../..//assets/images/testimonial.png";

const Testimonial = () => {
  // slides breakpoints
  const breakpoints = {
    1440: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
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
      <div className="bg-featureBgColor">
        <div className="px-8 xs:px-3 mt-12 md:mt-8 sm:mt-6 py-20 md:py-10">
          <div className="flex justify-center items-center gap-3">
            <img src={HeroWave} alt="wave" />
            <p className="text-lightBlue font-semibold">Our Testimonial</p>
          </div>
          <h1 className="text-center font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
            Hear What Our Lovely
            <br /> Clients Say!
          </h1>
          <div className="flex items-center justify-between mt-5 md:flex-col">
            <div className="w-1/2 md:w-full rounded-md">
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
                {testimonail_data.map((testimonial, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-mainWhite px-10 py-10 xs:px-3 xs:py-3">
                      <div className="flex items-center gap-5">
                        <div className="overflow-hidden">
                          <img
                            src={testimonial.user}
                            alt="user1"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-darkBlue text-xl font-bold">
                            {testimonial.user_name}
                          </p>
                          <p className="text-lightBlue font-semibold">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-lightGray leading-loose max-w-[680px] pt-6 sm:pt-3 sm:text-sm xs:text-xs">
                        {testimonial.desc}
                      </p>
                      <div className="pt-6 sm:pt-3">{testimonial.ratings}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-1/2 md:w-full flex justify-center">
              <img
                src={TestimonailImg}
                alt="testimonial"
                className="max-w-[70%] md:max-w-[100%]"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonial;
