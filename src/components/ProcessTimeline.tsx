import React, { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  MessageSquare, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';

interface ProcessTimelineProps {
  onDetailClick: () => void;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onDetailClick }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const processSteps = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Brief Express & Analyse',
      description: 'Analyse de vos besoins d\'autonomie',
      color: 'text-accent-green',
      details: [
        'Audit de vos besoins de contenu et fonctionnalités',
        'Définition du niveau d\'autonomie souhaité',
        'Analyse de votre niveau technique actuel',
        'Identification des processus métier à automatiser'
      ]
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Stratégie & Architecture',
      description: 'Conception interface admin sur-mesure',
      color: 'text-highlight-brown',
      details: [
        'Architecture backend optimisée pour l\'autonomie',
        'Conception interface admin intuitive',
        'Définition des workflows de gestion',
        'Planification de la formation client'
      ]
    },
    {
      icon: <Palette size={24} />,
      title: 'Design & Interface Admin Simple',
      description: 'Design site + dashboard intuitif',
      color: 'text-accent-green',
      details: [
        'Design responsive premium du site',
        'Interface admin épurée et intuitive',
        'UX optimisée pour non-techniciens',
        'Système de prévisualisation temps réel'
      ]
    },
    {
      icon: <Code size={24} />,
      title: 'Développement + Backend Autonome',
      description: 'Code propre + CMS personnalisé',
      color: 'text-primary',
      details: [
        'Développement frontend responsive',
        'Backend sécurisé et performant',
        'CMS sur-mesure ultra-simple',
        'Intégrations API nécessaires'
      ]
    },
    {
      icon: <TestTube size={24} />,
      title: 'Tests & Optimisation',
      description: 'Validation interface admin complète',
      color: 'text-highlight-brown',
      details: [
        'Tests utilisabilité interface admin',
        'Optimisation performances',
        'Tests responsive tous devices',
        'Validation sécurité et sauvegardes'
      ]
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Livraison + Formation Autonomie',
      description: 'Formation jusqu\'à votre maîtrise totale',
      color: 'text-accent-green',
      details: [
        'Session formation 1-on-1 personnalisée',
        'Tutoriels vidéo sur-mesure',
        'Documentation pas-à-pas illustrée',
        'Support post-formation illimité'
      ]
    }
  ];

  useEffect(() => {
    if (isVisible) {
      // Animate steps with delay
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section ref={elementRef} className="py-16 bg-gradient-to-br from-sand-light/20 via-white to-beige-gold/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-highlight-brown/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ma méthode pour votre <span className="text-accent-green">autonomie</span>
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            6 étapes optimisées pour vous rendre totalement autonome dans la gestion de votre site web
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-accent-green/20">
              <span className="text-accent-green font-semibold">✓ Formation incluse</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-highlight-brown/20">
              <span className="text-highlight-brown font-semibold">✓ Support illimité</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative hidden lg:block">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-accent-green via-highlight-brown to-accent-green rounded-full shadow-lg z-10"></div>

          {/* Steps */}
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 z-20 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-center">
                  {/* Content */}
                  <div className={`w-5/12 ${
                    index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left order-2'
                  }`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-sand-light/30 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                        step.color === 'text-accent-green' ? 'bg-accent-green/10' :
                        step.color === 'text-highlight-brown' ? 'bg-highlight-brown/10' :
                        'bg-primary/10'
                      }`}>
                        <div className={step.color}>
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-primary/80 leading-relaxed">{step.description}</p>
                      <div className="mt-4 flex items-center justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-accent-green to-highlight-brown rounded-full"></div>
                      </div>
                    </div>
                    
                  </div>

                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 shadow-xl transition-all duration-500 z-30 ${
                    step.color === 'text-accent-green' ? 'border-accent-green' :
                    step.color === 'text-highlight-brown' ? 'border-highlight-brown' :
                    'border-primary'
                  } ${visibleSteps.includes(index) ? 'scale-100 animate-pulse' : 'scale-0'}`}></div>

                  {/* Step Number */}
                  <div className={`w-5/12 flex ${
                    index % 2 === 0 ? 'justify-start pl-12 order-2' : 'justify-end pr-12'
                  }`}>
                    <div className={`w-20 h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 ${
                      step.color === 'text-accent-green' ? 'from-accent-green to-accent-green/80' :
                      step.color === 'text-highlight-brown' ? 'from-highlight-brown to-highlight-brown/80' :
                      'from-primary to-primary/80'
                    } ${visibleSteps.includes(index) ? 'rotate-0 scale-100' : 'rotate-180 scale-75'}`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Clickable Cards */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-sand-light/30 transition-all duration-500 ${
                visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <button
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-2xl ${
                    step.color === 'text-accent-green' ? 'from-accent-green to-accent-green/80' :
                    step.color === 'text-highlight-brown' ? 'from-highlight-brown to-highlight-brown/80' :
                    'from-primary to-primary/80'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                    <p className="text-primary/80 text-sm">{step.description}</p>
                  </div>
                  <ArrowRight 
                    className={`text-primary/60 transition-transform duration-300 ${
                      expandedStep === index ? 'rotate-90' : ''
                    }`} 
                    size={20} 
                  />
                </div>
              </button>
              
              {expandedStep === index && (
                <div className="px-6 pb-6 border-t border-sand-light/30 pt-4">
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-primary/80 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Résultat garanti :</h3>
            <p className="text-primary/80 text-lg">
              Vous gérez votre site en <span className="font-bold text-accent-green">totale autonomie</span> 
              - Plus jamais besoin de développeur pour vos mises à jour !
            </p>
          </div>
          <button
            onClick={onDetailClick}
            className="group bg-gradient-to-r from-accent-green to-highlight-brown text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
          >
            <span className="mr-3">🚀</span>
            Voir le processus détaillé
            <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;