import React, { useEffect, useState, useRef } from 'react';
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
  Target
} from 'lucide-react';

interface ProcessTimelineProps {
  onDetailClick?: () => void;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onDetailClick }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const navigate = useNavigate();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

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

  // Animation des étapes visibles
  useEffect(() => {
    if (isVisible) {
      // Clear previous animations
      setVisibleSteps([]);
      
      // Stagger animations
      const timeouts: NodeJS.Timeout[] = [];
      processSteps.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
        }, index * 200);
        timeouts.push(timeout);
      });

      // Cleanup timeouts
      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [isVisible, processSteps.length]);

  // Gestion du scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      const startOffset = windowHeight * 0.8;
      const endOffset = -elementHeight + windowHeight * 0.2;
      
      if (elementTop <= startOffset && elementTop >= endOffset) {
        const progress = (startOffset - elementTop) / (startOffset - endOffset);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      } else if (elementTop > startOffset) {
        setScrollProgress(0);
      } else if (elementTop < endOffset) {
        setScrollProgress(1);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const handleDetailClick = () => {
    if (onDetailClick) {
      onDetailClick();
    } else {
      navigate('/processus');
    }
  };

  return (
    <section 
      ref={elementRef} 
      className="py-20 bg-gradient-to-br from-sand-light/20 via-white to-beige-gold/20 relative overflow-hidden"
      aria-label="Processus de développement"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-highlight-brown/5 rounded-full blur-3xl" />
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
        <div ref={timelineRef} className="relative" role="list" aria-label="Étapes du processus">
          {/* Animated Timeline Line - Desktop Only */}
          <div 
            className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-accent-green/20 via-highlight-brown/20 to-accent-green/20 rounded-full hidden lg:block"
            aria-hidden="true"
          >
            <div 
              className="w-full bg-gradient-to-b from-accent-green via-highlight-brown to-accent-green rounded-full transition-all duration-300 ease-out"
              style={{ 
                height: `${scrollProgress * 100}%`,
                boxShadow: scrollProgress > 0 ? '0 0 20px rgba(93, 112, 82, 0.5)' : 'none'
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={`step-${index}`}
                role="listitem"
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node - Desktop Only */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 top-8 hidden lg:block z-10"
                  aria-hidden="true"
                >
                  <div className={`w-12 h-12 rounded-full ${step.bgColor} text-white flex items-center justify-center shadow-lg transition-all duration-500 ${
                    scrollProgress >= (index + 1) / processSteps.length ? 'scale-110 shadow-2xl' : 'scale-100'
                  }`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Content Card */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-sand-light/30 hover:shadow-xl transition-all duration-300">
                      
                      {/* Step Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-3 rounded-xl ${step.bgColor} text-white lg:hidden flex-shrink-0`}>
                          {step.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${step.bgColor} whitespace-nowrap`}>
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-primary break-words">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-lg text-primary/80 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className={`bg-gradient-to-br p-8 rounded-2xl ${
                      step.color === 'text-accent-green' ? 'from-accent-green/10 to-accent-green/5' :
                      step.color === 'text-highlight-brown' ? 'from-highlight-brown/10 to-highlight-brown/5' :
                      'from-primary/10 to-primary/5'
                    }`}>
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="text-center">
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${step.bgColor} text-white`}>
                            {step.icon}
                          </div>
                          <h4 className="font-semibold text-primary mb-2">{step.title}</h4>
                          <p className="text-primary/70 text-sm mb-4">{step.duration}</p>
                          <div className="bg-gradient-to-r from-sand-light/50 to-beige-gold/50 p-4 rounded-lg">
                            <p className="text-primary/80 text-sm">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
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
              <Target className="text-accent-green flex-shrink-0" size={24} />
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
            className="group bg-gradient-to-r from-accent-green to-highlight-brown text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
            aria-label="Découvrir le processus détaillé"
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