import React, { useEffect, useState, useRef } from 'react';
import { Users, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Presentation: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [counters, setCounters] = useState({ sites: 0, clients: 0 });

  useEffect(() => {
    if (isVisible) {
      animateCounters();
    }
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const sitesTarget = 150;
    const clientsTarget = 95;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        sites: Math.floor(sitesTarget * progress),
        clients: Math.floor(clientsTarget * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  return (
    <section ref={elementRef} className="py-16 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-sand-light rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-beige-gold/30 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="flex items-center space-x-4 mb-8">
              <span className="bg-accent-green text-white px-4 py-2 rounded-full font-semibold">Express</span>
              <span className="bg-highlight-brown text-white px-4 py-2 rounded-full font-semibold">Autonome</span>
              <span className="bg-primary text-white px-4 py-2 rounded-full font-semibold">Disponible</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Interface simple -<br />
              <span className="text-accent-green">Vous gérez votre contenu</span><br />
              <span className="text-highlight-brown">en autonomie</span>
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent-green flex-shrink-0" size={24} />
                <p className="text-primary/80 text-lg">Plus besoin de développeur pour vos mises à jour</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent-green flex-shrink-0" size={24} />
                <p className="text-primary/80 text-lg">Formation incluse jusqu'à votre maîtrise complète</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent-green flex-shrink-0" size={24} />
                <p className="text-primary/80 text-lg">Hébergement + maintenance + support formation</p>
              </div>
            </div>

            <div className="flex items-center space-x-8 p-6 bg-gradient-to-r from-sand-light to-beige-gold rounded-xl">
              <MapPin className="text-accent-green" size={32} />
              <div>
                <p className="font-semibold text-primary text-lg">France • 7j/7 disponible</p>
                <p className="text-primary/70">Adapté aux horaires français</p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-accent-green/10 to-highlight-brown/10 p-8 rounded-2xl">
              {/* Animated Stats */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-green mb-2">{counters.sites}+</div>
                  <p className="text-primary/80">Sites livrés</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-highlight-brown mb-2">{counters.clients}%</div>
                  <p className="text-primary/80">Clients autonomes</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="relative h-48 overflow-hidden rounded-xl bg-white/50">
                <div className={`absolute top-4 left-4 w-16 h-16 bg-accent-green/20 rounded-full transition-transform duration-3000 ${
                  isVisible ? 'translate-x-12 translate-y-8' : ''
                }`}></div>
                <div className={`absolute top-8 right-8 w-12 h-12 bg-highlight-brown/20 rounded-full transition-transform duration-2000 delay-500 ${
                  isVisible ? '-translate-x-8 translate-y-12' : ''
                }`}></div>
                <div className={`absolute bottom-8 left-1/2 w-20 h-20 bg-primary/10 rounded-full transition-transform duration-2500 delay-700 ${
                  isVisible ? '-translate-x-8 -translate-y-4' : ''
                }`}></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Users className="text-accent-green mx-auto mb-3" size={36} />
                    <p className="font-semibold text-primary">Modifiez textes, images, prix...</p>
                    <p className="text-primary/70 text-sm">en quelques clics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;