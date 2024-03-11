import React from "react";
import { comments_data } from "../../Data/BlogsData";

const SingleBlogComments = () => {
  return (
    <div className="shadow-navbar-button px-12 py-10 sm:px-3 sm:py-4 md:mt-8 mt-10 mb-5 rounded-lg">
      <div className="text-3xl font-bold text-darkBlue pb-7 sm:text-lg sm:pb-0">
        2 Comments
      </div>
      <div>
        {comments_data.map((blog, i) => {
          return (
            <div
              className={`flex justify-between items-center border-b ${
                i === comments_data.length - 1
                  ? "border-transparent"
                  : "border-inputBorder"
              } py-8 md:flex-col md:justify-start md:items-start sm:py-3`}
              key={i}
            >
              <div className="flex items-center gap-6 pb-4 xs:flex-col xs:gap-3 sm:justify-start sm:items-start">
                <div className="w-[100px] h-[100px]">
                  <img
                    src={blog.userImg}
                    alt="user1"
                    className="rounded-full aspect-square object-cover xs:w-[100px]"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold">{blog.user_name}</p>
                  <p className=" text-lightGray font-semibold max-w-[680px] sm:text-sm xs:text-xs md:pb-3 sm:pb-2">
                    {blog.date}
                  </p>
                  <p className=" text-lightGray leading-loose font-semibold max-w-[680px] sm:text-sm xs:text-xs">
                    {blog.desc}
                  </p>
                </div>
              </div>
              <div className="bg-lightBlue text-mainWhite font-semibold px-6 py-2 hover:text-primary rounded-md cursor-pointer hover:transition-all transition 500 sm:text-xs sm:px-4">
                Reply
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleBlogComments;
