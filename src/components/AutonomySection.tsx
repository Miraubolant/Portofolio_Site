import React, { useEffect, useState, useRef } from 'react';
import { Edit, Image, ShoppingCart, Play, Monitor, Smartphone } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AutonomySection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [activeDemo, setActiveDemo] = useState(0);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const demoFeatures = [
    {
      icon: <Edit size={24} />,
      title: 'Modifiez textes',
      description: 'Éditeur simple WYSIWYG'
    },
    {
      icon: <Image size={24} />,
      title: 'Changez images',
      description: 'Drag & drop intégré'
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'Gérez produits',
      description: 'Prix, stocks, commandes'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoFeatures.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-sand-light to-beige-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-green/5 via-transparent to-highlight-brown/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Votre site, <span className="text-accent-green">votre autonomie</span>
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-8">
            Plus besoin de développeur pour vos mises à jour quotidiennes. 
            Gérez votre contenu en toute simplicité avec notre interface intuitive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Demo Interface */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Demo Header */}
              <div className="bg-gradient-to-r from-accent-green to-highlight-brown p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                  </div>
                  <p className="text-white font-medium">Interface Admin - Simple & Intuitive</p>
                </div>
              </div>

              {/* Demo Content */}
              <div className={`transition-all duration-500 ${viewMode === 'mobile' ? 'p-4' : 'p-6'}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`font-semibold text-primary transition-all duration-300 ${
                    viewMode === 'mobile' ? 'text-sm' : 'text-base'
                  }`}>
                    {viewMode === 'mobile' ? 'Dashboard Mobile' : 'Dashboard Principal'}
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setViewMode('desktop')}
                      className={`p-1 rounded transition-all duration-300 hover:scale-110 ${
                        viewMode === 'desktop'
                          ? 'text-accent-green bg-accent-green/10' 
                          : 'text-primary/50 hover:text-accent-green'
                      }`}
                      title="Vue Desktop"
                    >
                      <Monitor size={20} />
                    </button>
                    <button
                      onClick={() => setViewMode('mobile')}
                      className={`p-1 rounded transition-all duration-300 hover:scale-110 ${
                        viewMode === 'mobile'
                          ? 'text-accent-green bg-accent-green/10' 
                          : 'text-primary/50 hover:text-accent-green'
                      }`}
                      title="Vue Mobile"
                    >
                      <Smartphone size={20} />
                    </button>
                  </div>
                </div>

                {/* Animated Demo Features */}
                <div className={`transition-all duration-500 ${viewMode === 'mobile' ? 'space-y-2' : 'space-y-4'}`}>
                  {demoFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`${viewMode === 'mobile' ? 'p-2' : 'p-4'} rounded-lg border-2 transition-all duration-500 ${
                        activeDemo === index
                          ? 'border-accent-green bg-accent-green/5 scale-105'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className={`flex items-center ${viewMode === 'mobile' ? 'space-x-2' : 'space-x-3'}`}>
                        <div className={`p-2 rounded-lg ${
                          activeDemo === index ? 'bg-accent-green text-white' : 'bg-gray-200 text-primary'
                        }`}>
                          <div className={viewMode === 'mobile' ? 'scale-75' : ''}>
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className={`font-semibold text-primary ${viewMode === 'mobile' ? 'text-xs' : 'text-sm'}`}>
                            {feature.title}
                          </h4>
                          <p className={`text-primary/70 ${viewMode === 'mobile' ? 'text-xs' : 'text-sm'}`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Demo Video Placeholder */}
                <div className={`${viewMode === 'mobile' ? 'mt-3' : 'mt-6'} bg-gradient-to-br from-primary/5 to-accent-green/5 rounded-lg transition-all duration-500 ${
                  viewMode === 'mobile' ? 'p-3' : 'p-8'
                } text-center`}>
                  <Play className="text-accent-green mx-auto mb-3 transition-all duration-300" size={viewMode === 'mobile' ? 24 : 48} />
                  <p className={`text-primary font-medium mb-2 transition-all duration-300 ${
                    viewMode === 'mobile' ? 'text-xs' : 'text-base'
                  }`}>
                    {viewMode === 'mobile' ? 'Interface Mobile Optimisée' : 'Démo Interface Complète'}
                  </p>
                  <p className={`text-primary/70 transition-all duration-300 ${
                    viewMode === 'mobile' ? 'text-xs' : 'text-sm'
                  }`}>
                    {viewMode === 'mobile' ? 'Gestion tactile simplifiée' : 'Voyez comme c\'est simple à utiliser !'}
                  </p>
                  {viewMode === 'mobile' && (
                    <div className="mt-2 flex justify-center space-x-1">
                      <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                      <div className="w-2 h-2 bg-accent-green/50 rounded-full"></div>
                      <div className="w-2 h-2 bg-accent-green/30 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  "Je modifie mon site moi-même maintenant !"
                </h3>
                <p className="text-primary/80 mb-4">
                  L'interface est si simple, même ma grand-mère y arrive. 
                  Formation personnalisée incluse pour une prise en main rapide.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CM</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Claire Martin</p>
                    <p className="text-primary/70 text-sm">Boutique Mode</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-accent-green mb-2">2h</div>
                  <p className="text-primary/80 text-sm">Formation moyenne</p>
                </div>
                <div className="bg-white/50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-highlight-brown mb-2">100%</div>
                  <p className="text-primary/80 text-sm">Clients autonomes</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent-green/10 to-highlight-brown/10 p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-3">Formation incluse :</h4>
                <ul className="space-y-2 text-primary/80">
                  <li>• Tutoriels vidéo personnalisés</li>
                  <li>• Session 1-on-1 en direct</li>
                  <li>• Documentation pas-à-pas</li>
                  <li>• Support post-formation illimité</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomySection;