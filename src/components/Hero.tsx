import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, Globe, Zap } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sand-light via-beige-gold to-sand-light">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-32 h-32 bg-accent-green/10 rounded-full blur-xl transition-transform duration-1000 ${
          isVisible ? 'translate-x-0 rotate-12' : '-translate-x-full'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-48 h-48 bg-highlight-brown/10 rounded-full blur-xl transition-transform duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 -rotate-12' : 'translate-x-full'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl transition-transform duration-1000 delay-150 ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo Hero */}
          <div className={`flex justify-center mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent-green to-highlight-brown rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-xl sm:text-2xl">VM</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Victor Mirault
              <span className="block text-accent-green">Sites Autonomes</span>
              <span className="block text-highlight-brown">Express</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg md:text-xl text-primary/80 mb-8 max-w-4xl mx-auto">
              Votre site + interface simple + formation = <span className="font-semibold text-accent-green">Autonomie totale rapidement</span>
            </p>
          </div>

          {/* Features */}
          <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="text-accent-green" size={20} />
              <span className="font-medium text-primary">Express</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Globe className="text-highlight-brown" size={20} />
              <span className="font-medium text-primary">Autonome</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="text-accent-green" size={20} />
              <span className="font-medium text-primary">7j/7 24h/24</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={onCtaClick}
              className="group bg-accent-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Découvrir ma méthode
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
          </div>

          {/* Availability */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-primary/70 mb-4">Interface simple - Vous gérez votre contenu en autonomie</p>
            <p className="text-sm text-primary/60">International • Disponible maintenant dans votre fuseau</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;