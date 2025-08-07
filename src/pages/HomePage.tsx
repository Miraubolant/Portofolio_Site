import React from 'react';
import Hero from '../components/Hero';
import Presentation from '../components/Presentation';
import PremiumInterfaceDemo from '../components/PremiumInterfaceDemo';
import ProcessTimeline from '../components/ProcessTimeline';
import PortfolioPreview from '../components/PortfolioPreview';
import AvailabilitySection from '../components/AvailabilitySection';
import FinalCTA from '../components/FinalCTA';

interface HomePageProps {
  onHeroCtaClick: () => void;
  onProcessDetailClick: () => void;
  onPortfolioViewAllClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  onHeroCtaClick,
  onProcessDetailClick,
  onPortfolioViewAllClick
}) => {
  return (
    <>
      <Hero onCtaClick={onHeroCtaClick} />
      <Presentation />
      <div id="process-timeline">
        <ProcessTimeline onDetailClick={onProcessDetailClick} />
      </div>
      <PremiumInterfaceDemo />
      <PortfolioPreview onViewAllClick={onPortfolioViewAllClick} />
      <AvailabilitySection />
      <FinalCTA />
    </>
  );
};

export default HomePage;
