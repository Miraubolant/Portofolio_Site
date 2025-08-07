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
      description: 'Analyse approfondie de vos besoins d\'autonomie digitale',
      color: 'accent-green',
      details: [
        'Audit complet de votre activité et objectifs',
        'Évaluation de votre niveau technique actuel',
        'Définition précise du niveau d\'autonomie souhaité',
        'Identification des fonctionnalités prioritaires'
      ],
      deliverables: [
        'Cahier des charges personnalisé',
        'Maquette interface admin sur-mesure',
        'Plan de formation adapté à votre profil',
        'Devis détaillé avec planning précis'
      ]
    },
    {
      icon: <Lightbulb size={20} />,
      title: 'Stratégie',
      duration: '2-3 jours',
      description: 'Conception architecture technique et interface admin',
      color: 'highlight-brown',
      details: [
        'Architecture backend sécurisée et performante',
        'Conception interface admin ultra-intuitive',
        'Définition des workflows de gestion',
        'Planification détaillée de la formation'
      ],
      deliverables: [
        'Architecture technique documentée',
        'Wireframes interface admin validés',
        'Spécifications fonctionnelles complètes',
        'Planning de développement optimisé'
      ]
    },
    {
      icon: <Palette size={20} />,
      title: 'Design',
      duration: '3-4 jours',
      description: 'Création design site + dashboard admin épuré',
      color: 'primary',
      details: [
        'Design responsive premium du site web',
        'Interface admin épurée et accessible',
        'UX optimisée pour non-techniciens',
        'Système de prévisualisation temps réel'
      ],
      deliverables: [
        'Maquettes finales haute-fidélité',
        'Design system complet et cohérent',
        'Prototypes interface admin interactifs',
        'Guide d\'utilisation visuel détaillé'
      ]
    },
    {
      icon: <Code size={20} />,
      title: 'Développement',
      duration: '5-8 jours',
      description: 'Développement complet avec CMS sur-mesure',
      color: 'accent-green',
      details: [
        'Développement frontend responsive et rapide',
        'Backend sécurisé avec API optimisées',
        'CMS personnalisé ultra-simple d\'utilisation',
        'Intégrations tierces nécessaires (paiement, email...)'
      ],
      deliverables: [
        'Site web complet et fonctionnel',
        'Interface admin opérationnelle et testée',
        'Documentation technique complète',
        'Tests de sécurité et performance validés'
      ]
    },
    {
      icon: <TestTube size={20} />,
      title: 'Tests',
      duration: '2-3 jours',
      description: 'Tests complets et optimisation performance',
      color: 'highlight-brown',
      details: [
        'Tests utilisabilité interface admin poussés',
        'Optimisation vitesse et performances',
        'Tests responsive sur tous devices',
        'Validation sécurité et sauvegardes automatiques'
      ],
      deliverables: [
        'Site optimisé et ultra-sécurisé',
        'Interface admin validée par tests utilisateurs',
        'Rapport de performance détaillé',
        'Environnement de formation configuré'
      ]
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Formation',
      duration: '1-2 jours',
      description: 'Formation personnalisée jusqu\'à maîtrise complète',
      color: 'primary',
      details: [
        'Session formation 1-on-1 personnalisée et interactive',
        'Création de tutoriels vidéo sur-mesure',
        'Documentation pas-à-pas illustrée et claire',
        'Support post-formation illimité et réactif'
      ],
      deliverables: [
        'Client 100% autonome et confiant',
        'Bibliothèque de tutoriels vidéo personnalisés',
        'Documentation complète et accessible',
        'Accès privilégié au support formation'
      ]
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
          <div className="bg-gradient-to-r from-sand-light/30 to-beige-gold/30 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 border border-accent-green/20">
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
              
              {/* Detailed Information */}
              <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <div className="w-2 h-2 bg-accent-green rounded-full mr-2"></div>
                    Détails du processus
                  </h4>
                  <div className="space-y-2">
                    {processSteps[activeStep].details?.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="text-accent-green flex-shrink-0 mt-0.5" size={14} />
                        <span className="text-primary/80 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <div className="w-2 h-2 bg-highlight-brown rounded-full mr-2"></div>
                    Livrables inclus
                  </h4>
                  <div className="space-y-2">
                    {processSteps[activeStep].deliverables?.map((deliverable, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <ArrowRight className="text-highlight-brown flex-shrink-0 mt-0.5" size={14} />
                        <span className="text-primary/80 text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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