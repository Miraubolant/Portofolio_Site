import React, { useEffect, useState, useRef } from 'react';
import { Clock, Code, Palette, Zap, MessageCircle, Mail, CheckCircle, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AvailabilitySection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const competences = [
    { 
      competence: 'Développement Full-Stack', 
      icon: <Code size={24} />, 
      description: 'React, Node.js, Supabase',
      level: '95%'
    },
    { 
      competence: 'Interface Admin Simple', 
      icon: <Palette size={24} />, 
      description: 'UX/UI pour non-techniciens',
      level: '98%'
    },
    { 
      competence: 'Formation Client', 
      icon: <Award size={24} />, 
      description: 'Pédagogie personnalisée',
      level: '100%'
    },
    { 
      competence: 'Livraison Express', 
      icon: <Zap size={24} />, 
      description: 'Méthode optimisée',
      level: '92%'
    }
  ];

  return (
    <section ref={elementRef} className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-highlight-brown/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Mes <span className="text-accent-green">compétences</span> pour votre <span className="text-highlight-brown">autonomie</span>
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Expertise technique + pédagogie personnalisée = votre autonomie digitale garantie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Compétences */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-sand-light/50 to-beige-gold/50 p-8 rounded-2xl">
              <div className="flex items-center justify-center mb-8">
                <Award className="text-accent-green mr-3" size={36} />
                <h3 className="text-2xl font-bold text-primary">Expertise Technique</h3>
              </div>

              <div className="space-y-4">
                {competences.map((comp, index) => (
                  <div
                    key={comp.competence}
                    className={`p-4 bg-white/70 rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-accent-green/10 rounded-lg text-accent-green">
                          {comp.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{comp.competence}</h4>
                          <p className="text-sm text-primary/70">{comp.description}</p>
                        </div>
                      </div>
                      <span className="text-accent-green font-bold">{comp.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent-green to-highlight-brown h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: isVisible ? comp.level : '0%',
                          transitionDelay: `${500 + index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent-green/10 rounded-xl text-center">
                <Clock className="text-accent-green mx-auto mb-2" size={24} />
                <p className="text-primary font-medium">5 ans d'expérience - Formation personnalisée incluse</p>
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
                <Award className="text-highlight-brown mb-4" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Couverture France entière</h3>
                <p className="text-primary/80">
                  150+ sites livrés avec interface admin simple. Méthode éprouvée 
                  pour votre autonomie digitale complète.
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
                  className="flex items-center justify-center space-x-2 bg-accent-green text-white p-4 rounded-xl hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105"
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