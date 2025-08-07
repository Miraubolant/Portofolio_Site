import React from 'react';
import Hero from '../components/Hero';
import Presentation from '../components/Presentation';
import ProcessTimeline from '../components/ProcessTimeline';
import PremiumInterfaceDemo from '../components/PremiumInterfaceDemo';
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
    <div className="overflow-x-hidden">
      <Hero onCtaClick={onHeroCtaClick} />
      <Presentation />
      <div id="process-timeline">
        <ProcessTimeline onDetailClick={onProcessDetailClick} />
      </div>
      <PremiumInterfaceDemo />
      <PortfolioPreview onViewAllClick={onPortfolioViewAllClick} />
      <AvailabilitySection />
      <FinalCTA />
    </div>
  );
};

export default HomePage;