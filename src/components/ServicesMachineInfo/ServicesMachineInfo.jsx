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
      <p className="pt-6 text-lightGray leading-loose font-semibold max-w-[680px] mb-2 sm:mb-3 sm:text-sm xs:text-xs md:pt-3 sm:pt-1">
        Machine learning is a subset of artificial intelligence (AI) that
        focuses on the development of algorithms and models that enable
        computers to learn from and make predictions or decisions based on data.
        Unlike traditional programming, where explicit instructions are provided
        to solve a specific task, machine learning algorithms use statistical
        techniques to enable computers to learn and improve their performance
        over time without being explicitly programmed. Machine learning
        algorithms require large amounts of data to learn from. Data preparation
        involves collecting, cleaning, and preprocessing data to ensure it is
        suitable for training machine learning models.Machine learning has a
        wide range of applications, including natural language processing, image
        recognition, medical diagnosis, autonomous vehicles, and recommendation
        systems. Machine learning has a wide range of applications, including
        natural language processing, image recognition, medical diagnosis,
        autonomous vehicles, and recommendation systems.
      </p>
      <div className="text-3xl font-bold text-darkBlue pb-2 sm:text-lg">
        Data Analysis
      </div>
      <div className="flex items-center sm:flex-col">
        <div>
          <p className=" text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs">
            Data analysis is the process of inspecting, cleaning, transforming,
            and modeling data with the goal of discovering useful information,
            and supporting decision-making.
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
        <p className="text-3xl font-bold text-darkBlue pt-1 sm:text-lg">
          Our Work Process
        </p>
        <p className="pt-2 text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs md:pt-3">
          Our work process is designed to ensure that we deliver high-quality
          results to our clients while maximizing efficiency and collaboration
          within our team. We begin by meeting with the client to understand
          their goals, requirements, and expectations for the project. This
          helps us define the scope of work and develop a clear understanding of
          what needs to be accomplished. Based on the initial consultation, we
          develop a detailed project plan that outlines the steps, timeline, and
          resources required to complete the project successfully.
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
          There are several reasons why clients choose our services for their
          data science and analytics needs:
          <br /> Our team consists of highly skilled professionals with
          expertise in data science, analytics, and related fields. We have the
          knowledge and experience to tackle complex problems and deliver
          innovative solutions. We understand that every client is unique, which
          is why we tailor our solutions to meet the specific needs and goals of
          each client. Our customized approach ensures that our solutions are
          effective and impactful. We prioritize client satisfaction above all
          else. We strive to exceed expectations and ensure that our clients are
          happy with the results of our work. Cost-Effective Solutions: We
          understand the importance of cost-effectiveness, which is why we offer
          competitive pricing for our services. We strive to deliver maximum
          value to our clients within their budget constraints.
        </p>
      </div>
    </div>
  );
}

export default ServicesMachineInfo