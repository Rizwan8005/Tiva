import React from 'react'
import About1 from '../../assets/images/about-image1.png'
import About2 from "../../assets/images/about-image2.png";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPortfolio = () => {
  return (
    <div>
      <p className="text-5xl lg:text-3xl sm:text-2xl xs:text-lg font-bold text-darkBlue mt-8 sm:mt-3">
        About The Project
      </p>
      <p className="pt-6 text-lightGray leading-loose font-semibold max-w-[680px] mb-6 sm:mb-3 sm:pt-3 sm:text-sm xs:text-xs md:pt-3">
        The project aims to develop a comprehensive data analytics platform for
        a retail company to optimize their operations, improve customer
        experience, and increase sales. The platform will leverage data from
        various sources, including sales transactions, customer interactions,
        inventory levels, and external market data, to provide actionable
        insights and recommendations to key stakeholders. Analyze sales data to
        identify trends, patterns, and opportunities for improving sales
        performance. This includes analyzing customer purchase behavior,
        identifying cross-selling and upselling opportunities, and optimizing
        pricing strategies.
      </p>
      <div>
        <div className="flex items-center gap-3 lg:flex-col">
          <img
            src={About1}
            alt="about1"
            className="object-cover max-w-[45%] md:max-w-[100%]"
          />
          <img
            src={About2}
            alt="about2"
            className="object-cover max-w-[45%] md:max-w-[100%]"
          />
        </div>
        <div className="text-3xl font-bold text-darkBlue pt-5 pb-2 sm:text-lg">
          Project Tips
        </div>
        <div>
          <p className=" text-lightGray leading-loose font-semibold max-w-[680px] mb-3 xs:mb-2 sm:text-sm xs:text-xs">
            To ensure the success of your project, start by clearly defining
            your goals and objectives. This will help you stay focused and
            ensure that your efforts are aligned with the desired outcomes.
            Next, create a detailed project plan that outlines the scope,
            timeline, resources, and deliverables. Planning thoroughly will help
            you stay organized and on track throughout the project.
            Communication is key, so keep all stakeholders informed of progress,
            issues, and changes to ensure everyone is on the same page. Identify
            potential risks to your project and develop a plan to mitigate them.
          </p>
          <ul className="text-sm sm:text-xs leading-10 sm:leading-7">
            <li className="text-lightGray">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-2" />
              <span className="font-semibold">
                Communication is key to a successful project.
              </span>
            </li>
            <li className="text-lightGray">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-2" />
              <span className="font-semibold">
                Identify potential risks to your project and develop a plan to
                mitigate them.
              </span>
            </li>
            <li className="text-lightGray">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-2" />
              <span className="font-semibold">
                Regularly monitor and track the progress of your project against
                the plan.
              </span>
            </li>
          </ul>
        </div>
        <div className="text-3xl font-bold text-darkBlue pt-5 pb-2 sm:text-lg sm:pt-2">
          Overview & Challenge
        </div>
        <div>
          <p className=" text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs">
            The project aims to develop an innovative solution for optimizing
            energy usage in smart homes. The goal is to leverage data analytics
            and smart technologies to help homeowners reduce their energy
            consumption, lower costs, and minimize their environmental impact.
            However, the project faces several challenges, including the
            complexity of integrating various smart devices and systems,
            ensuring data security and privacy, and educating users about the
            benefits of energy optimization. Overcoming these challenges will
            require a multidisciplinary approach, involving expertise in data
            analytics, IoT technologies, and user experience design. The project
            team is committed to addressing these challenges and delivering a
            successful solution that benefits both homeowners and the
            environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPortfolio