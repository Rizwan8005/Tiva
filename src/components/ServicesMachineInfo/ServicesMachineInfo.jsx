import React from 'react'
import {machine_learning_data} from '../../Data/ServicesData'
import AboutMachineInfo from '../../assets/images/about-machine-image.png'
import Blog1 from '../../assets/images/blog-1.jpg'
import Blog2 from "../../assets/images/blog-2.jpg";

const ServicesMachineInfo = () => {
  return (
    <div>
      <p className="text-5xl lg:text-3xl sm:text-2xl xs:text-lg font-bold text-darkBlue mt-8 sm:mt-3">
        Machine Learning
      </p>
      <p className="pt-6 text-lightGray leading-loose font-semibold max-w-[680px] mb-6 sm:mb-3 sm:text-sm xs:text-xs md:pt-3 sm:pt-1">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudan tiumt otam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dictasu nt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ration. Sed
        ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudan tiumt otam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae dictasu nt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
      </p>
      <div className="text-3xl font-bold text-darkBlue pb-2 sm:text-lg">
        Data Analysis
      </div>
      <div className="flex items-center sm:flex-col">
        <div>
          <p className=" text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudan tiumt.
          </p>
          <ul className="text-sm leading-10 sm:leading-7">
            {machine_learning_data.map((info, i) => {
              return (
                <li
                  className="text-lightGray flex items-center gap-2 sm:text-xs sm:py-2"
                  key={i}
                >
                  <span className="text-lightBlue">{info.icon}</span>
                  <span className="font-semibold">{info.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <img
            src={AboutMachineInfo}
            alt="about"
            className="max-w-[70%] sm:max-w-[100%]"
            data-aos="zoom-in"
          />
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold text-darkBlue sm:text-lg">
          Our Work Process
        </p>
        <p className="pt-3 text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs md:pt-3">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudan tiumt otam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dictasu
          nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ration.
        </p>
      </div>
      <div className="flex items-center gap-3 mt-6 sm:flex-col">
        <img
          src={Blog2}
          alt="blog2"
          className="max-w-[40%] rounded-lg sm:max-w-[100%]"
          data-aos="fade-right"
        />
        <img
          src={Blog1}
          alt="blog1"
          className="max-w-[40%] rounded-lg sm:max-w-[100%]"
          data-aos="fade-right"
        />
      </div>
      <div>
        <div className="text-3xl font-bold text-darkBlue pb-2 sm:text-lg mt-4">
          Why Choose Our Services ?
        </div>
        <p className="text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudan tiumt otam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dictasu
          nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ration. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudan tiumt otam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dictasu
          nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          aut.
        </p>
      </div>
    </div>
  );
}

export default ServicesMachineInfo