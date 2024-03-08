import React from 'react'
import Layout from '../../layout/Layout'
import Blog1 from "../../assets/images/blog-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {tags_data} from '../../Data/categoryData'
import {blog_posts} from '../../Data/BlogsData'
import { category_data } from '../../Data/categoryData';
import SingleBlogInfo from '../SingleBlogInfo/SingleBlogInfo';

const SingleBlogSolution = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 md:mt-8 sm:mt-4">
        <div className="flex justify-between gap-6 lg:flex-col py-14 sm:py-3">
          <div className="w-[64%] lg:w-full">
            <div>
              <img
                src={Blog1}
                alt="blog"
                className="rounded-lg"
                data-aos="zoom-in"
              />
            </div>
            <SingleBlogInfo />
          </div>
          <div className="w-[35%] lg:w-full">
            <div className="shadow-navbar-button p-4 rounded-lg lg:mt-4">
              <div className="flex items-center">
                <input
                  className="w-full h-[56px] border-[1px] border-inputBorder outline-none focus:border-primary py-1 px-2 rounded-l-lg shadow-input sm:h-[40px]"
                  type="text"
                  placeholder="Search"
                  name="email"
                  required
                />
                <div className="bg-primary rounded-r-lg px-6 py-4 sm:px-3 sm:py-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-mainWhite text-lg sm:text-base"
                  />
                </div>
              </div>
            </div>
            <div className="shadow-navbar-button p-4 rounded-lg mt-8 sm:mt-8">
              <div className="text-2xl font-bold text-darkBlue pb-6 sm:text-lg sm:pb-3">
                Category
              </div>
              <div className="grid gap-y-6 sm:gap-y-3">
                {category_data.map((cat, i) => {
                  return (
                    <div
                      className="group relative overflow-hidden cursor-pointer"
                      key={i}
                    >
                      <div className="flex items-center gap-2 border border-inputBorder p-4 rounded-lg relative z-10 sm:text-sm sm:p-2">
                        <p className="text-lightBlue font-bold group-hover:text-mainWhite">
                          {cat.icon}
                        </p>
                        <p className="font-semibold group-hover:text-mainWhite text-lightGray">
                          {cat.title}
                        </p>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-lightBlue transition-all duration-500 rounded-lg transform scale-y-0 origin-bottom z-0 group-hover:scale-y-100"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Recent Posts */}
            <div className="shadow-navbar-button p-4 rounded-lg mt-8 lg:mt-4">
              <div className="text-2xl font-bold text-darkBlue sm:text-lg">
                Recent Post
              </div>
              {blog_posts.map((blog, i) => {
                return (
                  <div
                    className={`grid sm:gap-y-3 border-b border-inputBorder py-4 ${
                      i === blog_posts.length - 1
                        ? "border-transparent"
                        : "border-inputBorder"
                    }`}
                    key={i}
                  >
                    <div>
                      <p className="text-darkBlue cursor-pointer font-bold hover:text-primary">
                        {blog.title}
                      </p>
                      <div className="flex items-center gap-3 text-lightGray mt-2">
                        <div className="flex items-center gap-1">
                          <span class="h-2 w-2 rounded-full bg-primary"></span>
                          <p className="font-semibold xs:text-xs">
                            {blog.profession}
                          </p>
                          |
                          <p className="font-semibold xs:text-xs">
                            {blog.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* // tags */}
            <div className="mt-8 lg:mt-4">
              <div className="shadow-navbar-button p-4 rounded-lg">
                <div className="text-2xl font-bold text-darkBlue pb-6 sm:text-lg sm:pb-3">
                  Tags
                </div>
                <div className="flex gap-3 flex-wrap sm:text-sm">
                  {tags_data.map((item, i) => {
                    return (
                      <p
                        className="text-lightGray cursor-pointer border border-inputBorder font-semibold px-5 py-3 hover:bg-lightBlue hover:text-mainWhite rounded-lg transition-all duration-500 sm:py-2"
                        key={i}
                      >
                        {item.title}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleBlogSolution