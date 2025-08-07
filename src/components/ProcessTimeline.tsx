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
  CheckCircle
} from 'lucide-react';

interface ProcessTimelineProps {
  onDetailClick?: () => void;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onDetailClick }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: <MessageSquare size={20} />,
      title: 'Brief Express',
      duration: '1-2 jours',
      description: 'Analyse de vos besoins d\'autonomie',
      color: 'accent-green'
    },
    {
      icon: <Lightbulb size={20} />,
      title: 'Stratégie',
      duration: '2-3 jours',
      description: 'Architecture technique optimisée',
      color: 'highlight-brown'
    },
    {
      icon: <Palette size={20} />,
      title: 'Design',
      duration: '3-4 jours',
      description: 'Interface admin ultra-simple',
      color: 'primary'
    },
    {
      icon: <Code size={20} />,
      title: 'Développement',
      duration: '5-8 jours',
      description: 'CMS personnalisé sécurisé',
      color: 'accent-green'
    },
    {
      icon: <TestTube size={20} />,
      title: 'Tests',
      duration: '2-3 jours',
      description: 'Validation interface admin',
      color: 'highlight-brown'
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Formation',
      duration: '1-2 jours',
      description: 'Autonomie totale garantie',
      color: 'primary'
    }
  ];

  // Animation automatique des étapes
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 2000);

      return () => clearInterval(interval);
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
    <section 
      ref={elementRef} 
      className="py-12 md:py-16 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
            Ma méthode pour votre <span className="text-accent-green">autonomie</span>
          </h2>
          <p className="text-base md:text-lg text-primary/80 max-w-2xl mx-auto">
            6 étapes optimisées pour votre <span className="text-highlight-brown font-semibold">indépendance digitale</span>
          </p>
        </div>

        {/* Process Steps - Animation Originale */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative p-3 md:p-4 rounded-xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeStep === index
                    ? `bg-${step.color} text-white shadow-lg scale-110`
                    : 'bg-white border-2 border-gray-100 hover:border-accent-green/30'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                  activeStep === index ? 'ring-2 ring-accent-green/30 ring-offset-2' : ''
                }`} />
                
                <div className="relative text-center">
                  <div className={`inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg mb-2 transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-white/20 text-white' 
                      : `bg-${step.color}/10 text-${step.color}`
                  }`}>
                    {step.icon}
                  </div>
                  <h4 className={`font-semibold text-xs md:text-sm mb-1 ${
                    activeStep === index ? 'text-white' : 'text-primary'
                  }`}>
                    {step.title}
                  </h4>
                  <p className={`text-xs ${
                    activeStep === index ? 'text-white/80' : 'text-primary/60'
                  }`}>
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-gradient-to-r from-sand-light/30 to-beige-gold/30 rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 bg-${processSteps[activeStep].color} text-white`}>
                {React.cloneElement(processSteps[activeStep].icon, { size: 24 })}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                {processSteps[activeStep].title}
              </h3>
              <p className="text-primary/80 mb-4 max-w-md mx-auto">
                {processSteps[activeStep].description}
              </p>
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-${processSteps[activeStep].color}`}>
                {processSteps[activeStep].duration}
              </span>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-8 md:mb-12">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-accent-green scale-125' : 'bg-gray-300 hover:bg-accent-green/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl mb-6 md:mb-8 max-w-2xl mx-auto border border-accent-green/20 shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="text-accent-green flex-shrink-0" size={24} />
              <h3 className="text-xl md:text-2xl font-bold text-primary">Résultat garanti :</h3>
            </div>
            <p className="text-primary/80 text-base md:text-lg leading-relaxed mb-6">
              Vous gérez votre site en <span className="font-bold text-accent-green">totale autonomie</span> 
              - Plus jamais besoin de <span className="text-highlight-brown font-semibold">développeur</span> !
            </p>
            
            {/* Success Metrics */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="text-center p-3 md:p-4 bg-accent-green/5 rounded-xl">
                <div className="text-xl md:text-2xl font-bold text-accent-green mb-1">150+</div>
                <div className="text-primary/70 text-xs md:text-sm">Clients formés</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-highlight-brown/5 rounded-xl">
                <div className="text-xl md:text-2xl font-bold text-highlight-brown mb-1">2h</div>
                <div className="text-primary/70 text-xs md:text-sm">Formation moyenne</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-primary/5 rounded-xl">
                <div className="text-xl md:text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-primary/70 text-xs md:text-sm">Autonomie atteinte</div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleDetailClick}
            className="group bg-gradient-to-r from-accent-green to-highlight-brown text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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