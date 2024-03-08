import React from 'react'
import Layout from '../../layout/Layout'
import HeroWave from "../../assets/images/hero-wave.png";
import {blogs_data} from '../../Data/BlogsData'
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 mt-12 md:mt-8 sm:mt-6 bg-featureBgColor py-20 md:py-10">
        <div className="flex justify-center items-center gap-3">
          <img src={HeroWave} alt="wave" />
          <p className="text-lightBlue font-semibold">News & Blog</p>
        </div>
        <h1 className="text-center font-bold text-6xl pt-3 text-darkBlue lg:text-3xl sm:text-2xl xs:text-lg">
          Stay Update with Tiva From
          <br /> Latest & Popular News
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-12 md:mt-7 gap-5">
          {blogs_data.map((blog, i) => {
            return (
              <Link to={`/blog-details/${blog.id}`}>
                <div
                key={i}
                className="shadow-navbar-button p-4 cursor-pointer sm:p-2"
                data-aos="fade-right"
                data-aos-delay={`${i * 200}`}
              >
                <div>
                  <img src={blog.blogImg} alt="blog" />
                </div>
                <div className="flex items-center gap-3 text-lightGray mt-4">
                  <div className="flex items-center gap-1">
                    <span class="h-2 w-2 rounded-full bg-primary"></span>
                    <p className="pr-2 xs:text-xs">{blog.profession}</p>|
                  </div>
                  <p className="xs:text-xs">{blog.date}</p>
                </div>
                <p className="text-darkBlue text-lg md:text-base font-semibold pt-4 pb-4 hover:text-primary">
                  {blog.title}
                </p>
                
                  <span className="text-lightBlue hover:text-primary cursor-pointer font-bold transition-all duration-300 transform lg:text-sm">
                    {blog.learnMoreBtn}
                  </span>
              </div>
                </Link>
            );
          })}
        </div>
        <p className="text-center text-lightGray pt-8 font-semibold sm:text-sm">
          Get Ready to Start It’s Fast & Easy.{" "}
          <span className="text-primary cursor-pointer">Click Here</span>
        </p>
      </div>
    </Layout>
  );
}

export default Blogs