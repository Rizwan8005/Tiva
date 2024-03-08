import React from 'react'
import SingleBlog1 from '../../assets/images/single-blog1.jpg'
import SingleBlog2 from "../../assets/images/single-blog2.jpg";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleBlogComments from '../SingleBlogComments/SingleBlogComments';
import SingleBlogCommentsForm from '../SingleBlogCommentsForm/SingleBlogCommentsForm';

const SingleBlogInfo = () => {
  return (
    <>
      <p className="text-5xl lg:text-3xl sm:text-2xl xs:text-lg font-bold text-darkBlue mt-8">
        Creative Solutions to Improve Your Business!
      </p>
      <div className="flex items-center gap-3 text-lightGray mt-4">
        <div className="flex items-center gap-1">
          <span class="h-2 w-2 rounded-full bg-primary"></span>
          <p className="font-semibold xs:text-xs">Business</p>|
          <p className="font-semibold xs:text-xs">Nov 08, 2022</p>
        </div>
      </div>
      <p className="pt-3 text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs md:pt-3">
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
      <div className="shadow-navbar-button p-4 mt-6 Left-to-right rounded-s-lg  border-lightBlue border-l-4 mb-7">
        <p className=" text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque otam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae nt explicabo. Nemo enim
          ipsam voluptatem quia voluptas sit
          <p className="text-lightBlue pt-2">_Robert Brown</p>
        </p>
      </div>
      <div className="text-3xl font-bold text-darkBlue pb-2 sm:text-lg">
        How Ai Technology Work?
      </div>
      <p className=" text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudan tiumt otam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dictasu nt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ration.
      </p>
      <div className="flex items-center gap-3 mt-6 sm:flex-col">
        <img
          src={SingleBlog1}
          alt="blog1"
          className="max-w-[40%] rounded-lg sm:max-w-[100%]"
          data-aos="fade-right"
        />
        <img
          src={SingleBlog2}
          alt="blog2"
          className="max-w-[40%] rounded-lg sm:max-w-[100%]"
          data-aos="fade-right"
        />
      </div>
      <p className=" text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm pt-5 xs:text-xs">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudan tiumt otam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dictasu nt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
      </p>
      <div className="mt-5 flex justify-between items-center md:flex-col md:justify-start md:items-start">
        <div className="flex gap-3 items-center md:pb-4 md:justify-start">
          <p className="text-darkBlue font-bold">Tags:</p>
          <p className="text-lightGray cursor-pointer border border-inputBorder font-semibold px-5 py-3 hover:bg-primary hover:text-mainWhite rounded-lg transition-all duration-500 sm:py-2 xs:text-xs xs:px-3">
            Data Analytics
          </p>
          <p className="text-lightGray cursor-pointer border border-inputBorder font-semibold px-5 py-3 hover:bg-primary hover:text-mainWhite rounded-lg transition-all duration-500 sm:py-2 xs:text-xs xs:px-3">
            AI Development
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 object-cover flex justify-center items-center group cursor-pointer shadow-lg aspect-square rounded-full bg-mainWhite hover:bg-primary transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="cursor-pointer text-darkBlue text-lg group-hover:text-mainWhite"
              />
            </div>
            <div className="w-10 h-10 object-cover flex justify-center items-center group shadow-lg cursor-pointer aspect-square rounded-full bg-mainWhite group hover:bg-primary transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon
                icon={faTwitter}
                className="cursor-pointer text-darkBlue text-lg group-hover:text-mainWhite"
              />
            </div>
            <div className="w-10 h-10 object-cover flex justify-center items-center group shadow-lg cursor-pointer aspect-square rounded-full bg-mainWhite hover:bg-primary transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="cursor-pointer text-darkBlue text-lg group-hover:text-mainWhite"
              />
            </div>

            <div className="w-10 h-10 object-cover flex justify-center items-center shadow-lg cursor-pointer group aspect-square rounded-full bg-mainWhite hover:bg-primary transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon
                icon={faInstagram}
                className="cursor-pointer text-darkBlue text-lg group-hover:text-mainWhite"
              />
            </div>
          </div>
        </div>
      </div>
      <SingleBlogComments />
      <SingleBlogCommentsForm />
    </>
  );
}

export default SingleBlogInfo