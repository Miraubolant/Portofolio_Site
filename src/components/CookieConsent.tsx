import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after 2 seconds
      setTimeout(() => setIsVisible(true), 2000);
    } else {
      setIsAccepted(consent === 'accepted');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsAccepted(true);
    setIsVisible(false);
    
    // Initialize analytics if accepted
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-sand-light/50 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="text-accent-green flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-primary mb-1">Cookies et Confidentialité</h4>
              <p className="text-primary/80 text-sm leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. 
                Vos données restent privées et ne sont jamais vendues.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="flex items-center space-x-2 px-4 py-2 border border-primary/20 text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200"
            >
              <X size={16} />
              <span>Refuser</span>
            </button>
            <button
              onClick={handleAccept}
              className="flex items-center space-x-2 bg-accent-green text-white px-4 py-2 rounded-lg hover:bg-accent-green/90 transition-colors duration-200"
            >
              <Check size={16} />
              <span>Accepter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;