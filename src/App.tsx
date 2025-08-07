import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { trackWebVitals, preloadImages } from './utils/performance';
import AnalyticsTracker from './components/AnalyticsTracker';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

// Component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Track Web Vitals for performance monitoring
    trackWebVitals();

    // Preload critical images
    const criticalImages = [
      'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];
    preloadImages(criticalImages);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section (placeholder implementation)
    // In a real application, you would implement proper routing
    console.log(`Navigating to section: ${section}`);
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHeroCtaClick = () => {
    // Scroll to process timeline
    const processSection = document.getElementById('process-timeline');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProcessDetailClick = () => {
    // Navigate to process page (placeholder)
    setActiveSection('processus');
    console.log('Navigate to detailed process page');
  };

  const handlePortfolioViewAllClick = () => {
    // Navigate to portfolio page (placeholder)
    setActiveSection('portfolio');
    window.location.href = '/portfolio';
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnalyticsTracker />
        <ScrollToTop />
        <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onHeroCtaClick={handleHeroCtaClick}
                onProcessDetailClick={handleProcessDetailClick}
                onPortfolioViewAllClick={handlePortfolioViewAllClick}
              />
            } 
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/processus" element={<ProcessPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;