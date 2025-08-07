import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/api';

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    const pageName = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    trackPageView(pageName);
  }, [location]);

  useEffect(() => {
    // Initialize Google Analytics if in production
    if (process.env.NODE_ENV === 'production') {
      // Add Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, []);

  return null;
};

export default AnalyticsTracker;