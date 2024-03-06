import React from 'react'
import {category_data, tags_data} from '../../Data/categoryData'

const BlogCategory = () => {
  return (
    <div className="mt-8 lg:mt-4">
      <div className="shadow-navbar-button p-4 rounded-lg">
        <div className="text-2xl font-bold text-darkBlue pb-6 sm:text-lg sm:pb-3">
          Category
        </div>
        <div className="grid gap-y-6 sm:gap-y-3">
          {category_data.map((cat, i) => {
            return (
              <div className="group relative overflow-hidden cursor-pointer" key={i}>
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
  );
};


export default BlogCategory