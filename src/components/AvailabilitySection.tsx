import React, { useEffect, useState, useRef } from 'react';
import { Clock, MapPin, MessageCircle, Mail, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AvailabilitySection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const frenchRegions = [
    { region: 'Île-de-France', icon: '🏢', specialty: 'Startups & E-commerce' },
    { region: 'Auvergne-Rhône-Alpes', icon: '🏔️', specialty: 'PME & Artisans' },
    { region: 'Nouvelle-Aquitaine', icon: '🍷', specialty: 'Commerce & Tourisme' },
    { region: 'Occitanie', icon: '☀️', specialty: 'Tech & Innovation' }
  ];

  return (
    <section ref={elementRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-highlight-brown/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Disponible <span className="text-accent-green">maintenant</span> en France
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Service français 7j/7 avec support formation inclus et réponse garantie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* French Regions Coverage */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-sand-light/50 to-beige-gold/50 p-8 rounded-2xl">
              <div className="flex items-center justify-center mb-8">
                <MapPin className="text-accent-green mr-3" size={36} />
                <h3 className="text-2xl font-bold text-primary">Couverture France</h3>
              </div>

              <div className="space-y-4">
                {frenchRegions.map((region, index) => (
                  <div
                    key={region.region}
                    className={`flex items-center justify-between p-4 bg-white/70 rounded-xl transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{region.icon}</span>
                      <span className="font-semibold text-primary">{region.region}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-primary/80 font-medium">
                        {region.specialty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent-green/10 rounded-xl text-center">
                <Clock className="text-accent-green mx-auto mb-2" size={24} />
                <p className="text-primary font-medium">Support formation 7j/7 - Horaires français</p>
              </div>
            </div>
          </div>

          {/* Availability Features */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sand-light/50">
                <CheckCircle className="text-accent-green mb-4" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Réponse garantie sous 48h max</h3>
                <p className="text-primary/80">
                  Basé en France, je m'adapte à votre planning pour assurer 
                  un support optimal et une formation efficace sur tout le territoire.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sand-light/50">
                <MapPin className="text-highlight-brown mb-4" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Couverture France entière</h3>
                <p className="text-primary/80">
                  Clients formés dans toute la France. Formation à distance optimisée 
                  avec créneaux adaptés aux horaires français.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sand-light/50">
                <MessageCircle className="text-accent-green mb-4" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Support formation inclus</h3>
                <p className="text-primary/80">
                  Après livraison, support illimité pour questions sur l'interface admin. 
                  WhatsApp, email, visio - le moyen qui vous convient.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/33123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href="mailto:victor@victormirault.com"
                  className="flex items-center justify-center space-x-2 bg-accent-green text-white p-4 rounded-xl hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail size={20} />
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilitySection;