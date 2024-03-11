import React from 'react'
import Layout from '../../layout/Layout'
import { blogs_info_data } from '../../Data/BlogsData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BlogCategory from '../BlogCategory/BlogCategory';
import { Link } from 'react-router-dom';

const BlogsInfo = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 md:mt-8 sm:mt-4">
        <div className="flex justify-between lg:flex-col py-14 sm:py-3">
          <div className="w-[72%] lg:w-full">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5">
              {blogs_info_data.map((blog, i) => {
                return (
                  <Link to={`/blog-details/${blog.id}`}>
                    <div
                      key={i}
                      className="shadow-navbar-button rounded-lg p-4 cursor-pointer sm:p-2"
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
          </div>
          <div className="w-[27%] lg:w-full">
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
            <BlogCategory />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogsInfo