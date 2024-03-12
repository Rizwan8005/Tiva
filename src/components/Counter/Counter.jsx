import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import VideoShape from "../../assets/images/video-shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { counter_data } from "../../Data/CounterData";

const Counter = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("counter-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setStartCounting(true);
          window.removeEventListener("scroll", onScroll);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Layout>
      <div className="px-8 xs:px-3 mt-12 md:mt-8 sm:mt-6 bg-counterBg w-full min-h-[500px] sm:min-h-[300px]">
        <div className="py-20">
          <div className="flex gap-3 items-center justify-center">
            <img src={VideoShape} alt="video-shape" />
            <p className="text-mainWhite sm:text-sm">
              CHECK 1 MIN OUR INTRO VIDEO
            </p>
          </div>
          <h1 className="text-center text-5xl lg:text-3xl sm:text-2xl xs:text-lg text-mainWhite font-bold">
            Our Most Recent Data Analytics
            <br /> Strategy Story
          </h1>
          <div className="flex justify-center mt-10 cursor-pointer">
            <div className="h-14 w-14 relative flex justify-end ">
              <span class="animate-ping absolute block h-full w-full rounded-full bg-lightBlue opacity-75"></span>
              <span class="absolute block rounded-full h-3 w-3 bg-sky-500"></span>
              <div className="w-14 h-14 aspect-square rounded-full bg-mainWhite flex items-center justify-center">
                <FontAwesomeIcon icon={faPlay} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="counter-section" className="px-12 md:px-10 sm:px-2 xs:px-6">
        <div className="px-20 xs:px-3 -mt-32 z-40  md:mt-8 xs:-mt-8 sm:-mt-8 bg-lightBlue py-20 md:py-10 rounded-lg">
          <div className="grid grid-cols-4 md:grid-cols-2 gap-y-8">
            {counter_data.map((item, i) => {
              const isLastItem = i === counter_data.length - 1;
              const isSecondInMd = i === 1 && counter_data.length >= 2;
              return (
                <div
                  className={`text-mainWhite border-borderLight flex justify-around sm:text-center ${
                    isLastItem ? "" : "border-r"
                  } ${isSecondInMd ? "md:border-r-0" : ""}`}
                  key={i}
                >
                  <div>
                    <CountUp
                      end={startCounting ? item.num : 0}
                      duration={2}
                      separator=","
                      className="text-6xl lg:text-3xl md:text-2xl sm:text-lg font-bold pb-3"
                    />
                    <p className="font-semiBold lg:text-sm">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Counter;
