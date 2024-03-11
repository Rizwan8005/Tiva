import React, { useEffect } from 'react'
import MainSingleBlog from '../components/MainSingleBlog/MainSingleBlog'

const SingleBlogPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div><MainSingleBlog /></div>
  )
}

export default SingleBlogPage