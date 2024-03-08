import React from 'react'
import PortfolioHero from '../PortfolioHero/PortfolioHero';
import PortfolioCards from '../PortfolioCards/PortfolioCards';
import ContactPortfolio from '../ContactPortfolio/ContactPortfolio';

const MainPortfolio = () => {
  return (
    <div>
      <PortfolioHero />
      <PortfolioCards />
      <ContactPortfolio />
    </div>
  );
}

export default MainPortfolio