import React, { useEffect } from 'react'
import MainPortfolio from '../components/MainPortfolio/MainPortfolio'

const PortfolioPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div><MainPortfolio /></div>
  )
}

export default PortfolioPage