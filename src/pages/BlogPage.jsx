import React, { useEffect } from 'react'
import MainBlogs from '../components/MainBlogs/MainBlogs';

const BlogPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainBlogs />
    </div>
  );
}

export default BlogPage