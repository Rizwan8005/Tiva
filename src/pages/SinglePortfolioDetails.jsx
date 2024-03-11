import React, { useEffect } from 'react'
import MainSinglePortfolioDetails from '../components/MainSinglePortfolioDetails/MainSinglePortfolioDetails';

const SinglePortfolioDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainSinglePortfolioDetails />
    </div>
  );
}

export default SinglePortfolioDetails