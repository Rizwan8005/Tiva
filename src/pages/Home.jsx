import React, { useEffect } from 'react'
import MainHome from '../components/MainHome/MainHome';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainHome />
    </div>
  );
}

export default Home