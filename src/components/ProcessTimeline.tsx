import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  MessageSquare, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  GraduationCap,
  ArrowRight,
  Clock,
  CheckCircle,
  Target
} from 'lucide-react';

interface ProcessTimelineProps {
  onDetailClick?: () => void;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onDetailClick }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const navigate = useNavigate();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const processSteps = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Brief Express & Analyse',
      duration: '1-2 jours',
      description: 'Analyse approfondie de vos besoins d\'autonomie digitale et définition de votre niveau technique',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Stratégie & Architecture',
      duration: '2-3 jours',
      description: 'Conception de l\'architecture technique optimisée et de l\'interface admin ultra-intuitive',
      color: 'text-highlight-brown',
      bgColor: 'bg-highlight-brown'
    },
    {
      icon: <Palette size={24} />,
      title: 'Design & Interface Admin',
      duration: '3-4 jours',
      description: 'Création du design premium du site et de l\'interface admin épurée et intuitive',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green'
    },
    {
      icon: <Code size={24} />,
      title: 'Développement + Backend',
      duration: '5-8 jours',
      description: 'Développement complet avec CMS personnalisé et backend sécurisé pour votre autonomie',
      color: 'text-primary',
      bgColor: 'bg-primary'
    },
    {
      icon: <TestTube size={24} />,
      title: 'Tests & Optimisation',
      duration: '2-3 jours',
      description: 'Validation complète de l\'interface admin et optimisations pour une expérience parfaite',
      color: 'text-highlight-brown',
      bgColor: 'bg-highlight-brown'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Formation & Autonomie',
      duration: '1-2 jours',
      description: 'Formation personnalisée intensive jusqu\'à votre maîtrise complète et autonomie totale',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green'
    }
  ];

  useEffect(() => {
    if (isVisible) {
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
        }, index * 200);
      });
    }
  }, [isVisible, processSteps.length]);

  const handleDetailClick = () => {
    if (onDetailClick) {
      onDetailClick();
    } else {
      navigate('/processus');
    }
  };

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-sand-light/20 via-white to-beige-gold/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-highlight-brown/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ma méthode pour votre <span className="text-accent-green">autonomie</span>
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-8">
            6 étapes optimisées pour vous rendre totalement autonome dans la gestion de votre site web. 
            Formation incluse jusqu'à votre maîtrise complète.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-accent-green/20 via-highlight-brown/20 to-accent-green/20 rounded-full hidden lg:block"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-center">
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left lg:order-2'
                  }`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-sand-light/30 hover:shadow-xl transition-all duration-300">
                      
                      {/* Step Header */}
                      <div className={`flex items-center space-x-4 mb-6 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      } justify-start`}>
                        <div className={`p-3 rounded-xl ${step.bgColor} text-white`}>
                          {step.icon}
                        </div>
                        <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                              Étape {index + 1}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${step.bgColor}`}>
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-lg text-primary/80 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-accent-green shadow-lg transition-all duration-700 z-10 hidden lg:flex items-center justify-center ${
                    visibleSteps.includes(index) ? 'scale-100' : 'scale-0'
                  }`}>
                    <div className={`${step.color}`}>
                      {React.cloneElement(step.icon, { size: 20 })}
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className={`w-full lg:w-5/12 flex ${
                    index % 2 === 0 ? 'lg:justify-start lg:pl-16 lg:order-2' : 'lg:justify-end lg:pr-16'
                  } justify-center lg:justify-end`}>
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-all duration-700 ${
                      visibleSteps.includes(index) ? 'scale-100' : 'scale-75'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl mb-8 max-w-2xl mx-auto border border-accent-green/20 shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Target className="text-accent-green" size={24} />
              <h3 className="text-2xl font-bold text-primary">Résultat garanti :</h3>
            </div>
            <p className="text-primary/80 text-lg leading-relaxed mb-6">
              Vous gérez votre site en <span className="font-bold text-accent-green">totale autonomie</span> 
              - Plus jamais besoin de développeur pour vos mises à jour !
            </p>
            
            {/* Success Metrics */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-accent-green/5 rounded-xl">
                <div className="text-2xl font-bold text-accent-green mb-1">150+</div>
                <div className="text-primary/70 text-sm">Clients formés</div>
              </div>
              <div className="text-center p-4 bg-highlight-brown/5 rounded-xl">
                <div className="text-2xl font-bold text-highlight-brown mb-1">2h</div>
                <div className="text-primary/70 text-sm">Formation moyenne</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-primary/70 text-sm">Autonomie atteinte</div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleDetailClick}
            className="group bg-gradient-to-r from-accent-green to-highlight-brown text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center space-x-3">
              <span>Découvrir le processus détaillé</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;