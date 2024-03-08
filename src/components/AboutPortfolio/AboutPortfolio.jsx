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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudan tiumt otam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ration.
          </p>
          <ul className="text-sm sm:text-xs leading-10 sm:leading-7">
            <li className="text-lightGray">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-2" />
              <span className="font-semibold">
                Fusce justo risus placerat in risus eget tincidunt consequat
                elit
              </span>
            </li>
            <li className="text-lightGray">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-2" />
              <span className="font-semibold">
                Nunc fermentum sem sit amet dolor laoreet placerat.
              </span>
            </li>
            <li className="text-lightGray">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-2" />
              <span className="font-semibold">
                Integer quis lorem est uspendisse eu augue porta ullamcorper
                dictum.
              </span>
            </li>
          </ul>
        </div>
        <div className="text-3xl font-bold text-darkBlue pt-5 pb-2 sm:text-lg sm:pt-2">
          Overview & Challenge
        </div>
        <div>
          <p className=" text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudan tiumt otam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dictasu nt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ration. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudan tiumt otam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dictasu nt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPortfolio