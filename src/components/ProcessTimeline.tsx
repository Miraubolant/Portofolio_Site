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
  Clock,
  CheckCircle,
  Users,
  Target,
  Zap,
  Award,
  Shield,
  Rocket
} from 'lucide-react';

interface ProcessTimelineProps {
  onDetailClick?: () => void;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onDetailClick }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const navigate = useNavigate();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<number | null>(null);
  const [progressLine, setProgressLine] = useState(0);

  const processSteps = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Brief Express & Analyse',
      subtitle: 'Analyse de vos besoins d\'autonomie',
      duration: '1-2 jours',
      description: 'Analyse approfondie de vos besoins d\'autonomie digitale et définition de votre niveau technique',
      color: 'text-accent-green',
      bgColor: 'from-accent-green/10 to-accent-green/5',
      borderColor: 'border-accent-green',
      details: [
        'Audit complet de vos besoins de contenu et fonctionnalités',
        'Définition précise du niveau d\'autonomie souhaité',
        'Analyse de votre niveau technique actuel',
        'Identification des processus métier à automatiser',
        'Définition des objectifs de formation personnalisée'
      ],
      deliverables: [
        'Cahier des charges détaillé et personnalisé',
        'Maquette interface admin sur-mesure',
        'Plan de formation adapté à votre niveau',
        'Devis précis avec délais garantis'
      ],
      stats: { time: '24h', satisfaction: '100%' }
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Stratégie & Architecture',
      subtitle: 'Conception interface admin sur-mesure',
      duration: '2-3 jours',
      description: 'Conception de l\'architecture technique optimisée et de l\'interface admin ultra-intuitive',
      color: 'text-highlight-brown',
      bgColor: 'from-highlight-brown/10 to-highlight-brown/5',
      borderColor: 'border-highlight-brown',
      details: [
        'Architecture backend optimisée pour l\'autonomie maximale',
        'Conception interface admin ultra-intuitive',
        'Définition des workflows de gestion simplifiés',
        'Planification détaillée de la formation client',
        'Optimisation UX pour non-techniciens'
      ],
      deliverables: [
        'Architecture technique documentée',
        'Wireframes interface admin détaillés',
        'Spécifications fonctionnelles complètes',
        'Planning de développement optimisé'
      ],
      stats: { time: '48h', satisfaction: '98%' }
    },
    {
      icon: <Palette size={24} />,
      title: 'Design & Interface Admin Simple',
      subtitle: 'Design site + dashboard intuitif',
      duration: '3-4 jours',
      description: 'Création du design premium du site et de l\'interface admin épurée et intuitive',
      color: 'text-accent-green',
      bgColor: 'from-accent-green/10 to-accent-green/5',
      borderColor: 'border-accent-green',
      details: [
        'Design responsive premium du site web',
        'Interface admin épurée et ultra-intuitive',
        'UX optimisée spécifiquement pour non-techniciens',
        'Système de prévisualisation en temps réel',
        'Design system cohérent et professionnel'
      ],
      deliverables: [
        'Maquettes finales validées et approuvées',
        'Design system complet et documenté',
        'Prototypes interface admin interactifs',
        'Guide d\'utilisation visuel détaillé'
      ],
      stats: { time: '72h', satisfaction: '100%' }
    },
    {
      icon: <Code size={24} />,
      title: 'Développement + Backend Autonome',
      subtitle: 'Code propre + CMS personnalisé',
      duration: '5-8 jours',
      description: 'Développement complet avec CMS personnalisé et backend sécurisé pour votre autonomie',
      color: 'text-primary',
      bgColor: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary',
      details: [
        'Développement frontend responsive et performant',
        'Backend sécurisé et optimisé pour la performance',
        'CMS sur-mesure ultra-simple d\'utilisation',
        'Intégrations API nécessaires et sécurisées',
        'Tests automatisés et validation continue'
      ],
      deliverables: [
        'Site web complet et fonctionnel',
        'Interface admin opérationnelle et testée',
        'Documentation technique complète',
        'Tests de sécurité validés et certifiés'
      ],
      stats: { time: '120h', satisfaction: '99%' }
    },
    {
      icon: <TestTube size={24} />,
      title: 'Tests & Optimisation',
      subtitle: 'Validation interface admin complète',
      duration: '2-3 jours',
      description: 'Validation complète de l\'interface admin et optimisations pour une expérience parfaite',
      color: 'text-highlight-brown',
      bgColor: 'from-highlight-brown/10 to-highlight-brown/5',
      borderColor: 'border-highlight-brown',
      details: [
        'Tests utilisabilité poussés de l\'interface admin',
        'Optimisation performances et vitesse de chargement',
        'Tests responsive sur tous les devices',
        'Validation sécurité et système de sauvegardes',
        'Tests d\'accessibilité et conformité'
      ],
      deliverables: [
        'Site optimisé et sécurisé à 100%',
        'Interface admin validée par tests utilisateurs',
        'Rapport de tests complet et détaillé',
        'Environnement de formation prêt à l\'emploi'
      ],
      stats: { time: '48h', satisfaction: '100%' }
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Formation & Autonomie Totale',
      subtitle: 'Formation jusqu\'à votre maîtrise totale',
      duration: '1-2 jours',
      description: 'Formation personnalisée intensive jusqu\'à votre maîtrise complète et autonomie totale',
      color: 'text-accent-green',
      bgColor: 'from-accent-green/10 to-accent-green/5',
      borderColor: 'border-accent-green',
      details: [
        'Session formation 1-on-1 personnalisée et intensive',
        'Tutoriels vidéo sur-mesure pour votre secteur',
        'Documentation pas-à-pas illustrée et détaillée',
        'Support post-formation illimité à vie',
        'Certification de votre autonomie digitale'
      ],
      deliverables: [
        'Client 100% autonome et certifié',
        'Bibliothèque tutoriels vidéo personnalisés',
        'Documentation complète et actualisée',
        'Accès support formation prioritaire'
      ],
      stats: { time: '16h', satisfaction: '100%' }
    }
  ];

  useEffect(() => {
    if (isVisible) {
      // Animate steps with staggered delay
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
        }, index * 300);
      });

      // Animate progress line
      setTimeout(() => {
        setProgressLine(100);
      }, 1000);

      // Auto-animate steps
      const interval = setInterval(() => {
        setActiveAnimation(prev => {
          const next = prev === null ? 0 : (prev + 1) % processSteps.length;
          return next;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handleDetailClick = () => {
    if (onDetailClick) {
      onDetailClick();
    } else {
      navigate('/processus');
    }
  };

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-sand-light/20 via-white to-beige-gold/20 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-highlight-brown/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-accent-green/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-highlight-brown/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-accent-green/20">
            <Rocket className="text-accent-green animate-pulse" size={24} />
            <span className="text-accent-green font-semibold">Méthode Éprouvée</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Ma méthode pour votre <span className="text-accent-green relative">
              autonomie
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent-green to-highlight-brown rounded-full transform scale-x-0 animate-[scaleX_2s_ease-out_1s_forwards]"></div>
            </span>
          </h2>
          
          <p className="text-xl text-primary/80 max-w-4xl mx-auto mb-8">
            6 étapes optimisées et éprouvées pour vous rendre totalement autonome dans la gestion de votre site web. 
            <span className="font-semibold text-accent-green">150+ clients déjà formés avec succès !</span>
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-accent-green/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Award className="text-accent-green" size={20} />
                <span className="text-accent-green font-semibold">Formation incluse</span>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-highlight-brown/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Shield className="text-highlight-brown" size={20} />
                <span className="text-highlight-brown font-semibold">Support illimité</span>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Target className="text-primary" size={20} />
                <span className="text-primary font-semibold">100% autonomie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Animated Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-accent-green/20 via-highlight-brown/20 to-accent-green/20 rounded-full shadow-lg z-10">
            <div 
              className="w-full bg-gradient-to-b from-accent-green via-highlight-brown to-accent-green rounded-full transition-all duration-3000 ease-out"
              style={{ height: `${progressLine}%` }}
            ></div>
          </div>

          {/* Enhanced Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 z-20 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                } ${activeAnimation === index ? 'animate-pulse-soft' : ''}`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="flex items-center justify-center">
                  {/* Enhanced Content */}
                  <div className={`w-5/12 ${
                    index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left order-2'
                  }`}>
                    <div className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-2 transition-all duration-700 transform hover:scale-105 hover:shadow-3xl ${
                      step.borderColor
                    } ${activeAnimation === index ? 'scale-105 shadow-3xl' : ''}`}>
                      
                      {/* Step Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-4 rounded-2xl ${step.bgColor} ${step.color} transform transition-all duration-500 hover:scale-110`}>
                          {step.icon}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                              Étape {index + 1}
                            </span>
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg ${
                              step.color === 'text-accent-green' ? 'bg-accent-green' :
                              step.color === 'text-highlight-brown' ? 'bg-highlight-brown' :
                              'bg-primary'
                            }`}>
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-primary mb-1">{step.title}</h3>
                          <p className="text-primary/70 font-medium">{step.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-lg text-primary/80 mb-6 leading-relaxed">{step.description}</p>

                      {/* Enhanced Details Grid */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-4 flex items-center">
                            <CheckCircle className="text-accent-green mr-2" size={18} />
                            Processus détaillé :
                          </h4>
                          <div className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start space-x-3 group">
                                <div className="w-2 h-2 bg-accent-green rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                                <span className="text-primary/80 text-sm leading-relaxed group-hover:text-primary transition-colors duration-300">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-4 flex items-center">
                            <ArrowRight className="text-highlight-brown mr-2" size={18} />
                            Livrables garantis :
                          </h4>
                          <div className="space-y-3">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <div key={deliverableIndex} className="flex items-start space-x-3 group">
                                <div className="w-2 h-2 bg-highlight-brown rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                                <span className="text-primary/80 text-sm leading-relaxed group-hover:text-primary transition-colors duration-300">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-center space-x-6 pt-4 border-t border-sand-light/30">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent-green">{step.stats.time}</div>
                          <div className="text-xs text-primary/60">Délai moyen</div>
                        </div>
                        <div className="w-px h-8 bg-sand-light/50"></div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-highlight-brown">{step.stats.satisfaction}</div>
                          <div className="text-xs text-primary/60">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 shadow-2xl transition-all duration-700 z-30 ${
                    step.borderColor
                  } ${visibleSteps.includes(index) ? 'scale-100' : 'scale-0'} ${
                    activeAnimation === index ? 'animate-pulse scale-125' : ''
                  }`}>
                    <div className={`w-full h-full rounded-full ${step.bgColor} flex items-center justify-center`}>
                      <div className={`${step.color} transform transition-all duration-500`}>
                        {React.cloneElement(step.icon, { size: 20 })}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Step Number */}
                  <div className={`w-5/12 flex ${
                    index % 2 === 0 ? 'justify-start pl-16 order-2' : 'justify-end pr-16'
                  }`}>
                    <div className={`w-24 h-24 bg-gradient-to-br rounded-3xl flex items-center justify-center text-white font-bold text-3xl shadow-2xl transform transition-all duration-700 hover:scale-110 hover:rotate-3 ${
                      step.color === 'text-accent-green' ? 'from-accent-green to-accent-green/80' :
                      step.color === 'text-highlight-brown' ? 'from-highlight-brown to-highlight-brown/80' :
                      'from-primary to-primary/80'
                    } ${visibleSteps.includes(index) ? 'rotate-0 scale-100' : 'rotate-180 scale-75'} ${
                      activeAnimation === index ? 'scale-110 rotate-3' : ''
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border-2 transition-all duration-700 transform hover:scale-105 ${
                step.borderColor
              } ${visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${
                activeAnimation === index ? 'scale-105 shadow-2xl' : ''
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <button
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br rounded-3xl flex items-center justify-center text-white font-bold text-xl shadow-2xl ${
                    step.color === 'text-accent-green' ? 'from-accent-green to-accent-green/80' :
                    step.color === 'text-highlight-brown' ? 'from-highlight-brown to-highlight-brown/80' :
                    'from-primary to-primary/80'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                        Étape {index + 1}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        step.color === 'text-accent-green' ? 'bg-accent-green' :
                        step.color === 'text-highlight-brown' ? 'bg-highlight-brown' :
                        'bg-primary'
                      }`}>
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">{step.title}</h3>
                    <p className="text-primary/70 text-sm">{step.subtitle}</p>
                  </div>
                  <ArrowRight 
                    className={`text-primary/60 transition-transform duration-300 ${
                      expandedStep === index ? 'rotate-90' : ''
                    }`} 
                    size={20} 
                  />
                </div>
                
                <p className="text-primary/80 mb-4">{step.description}</p>
                
                {/* Mobile Stats */}
                <div className="flex items-center justify-center space-x-6 py-3 bg-gradient-to-r from-sand-light/20 to-beige-gold/20 rounded-xl">
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent-green">{step.stats.time}</div>
                    <div className="text-xs text-primary/60">Délai</div>
                  </div>
                  <div className="w-px h-6 bg-sand-light/50"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-highlight-brown">{step.stats.satisfaction}</div>
                    <div className="text-xs text-primary/60">Satisfaction</div>
                  </div>
                </div>
              </button>
              
              {expandedStep === index && (
                <div className="px-6 pb-6 border-t border-sand-light/30 pt-6 animate-fade-in">
                  <div className="grid gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <CheckCircle className="text-accent-green mr-2" size={16} />
                        Processus détaillé :
                      </h4>
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-primary/80 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <ArrowRight className="text-highlight-brown mr-2" size={16} />
                        Livrables garantis :
                      </h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-highlight-brown rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-primary/80 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center mt-24 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm p-10 rounded-3xl mb-10 max-w-4xl mx-auto border border-accent-green/20 shadow-2xl">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Target className="text-accent-green animate-pulse" size={32} />
              <h3 className="text-3xl font-bold text-primary">Résultat 100% garanti :</h3>
            </div>
            <p className="text-primary/80 text-xl leading-relaxed mb-6">
              Vous gérez votre site en <span className="font-bold text-accent-green bg-accent-green/10 px-3 py-1 rounded-full">totale autonomie</span> 
              - Plus jamais besoin de développeur pour vos mises à jour !
            </p>
            
            {/* Success Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-accent-green/5 rounded-2xl">
                <div className="text-3xl font-bold text-accent-green mb-2">150+</div>
                <div className="text-primary/70 text-sm">Clients formés</div>
              </div>
              <div className="text-center p-4 bg-highlight-brown/5 rounded-2xl">
                <div className="text-3xl font-bold text-highlight-brown mb-2">2h</div>
                <div className="text-primary/70 text-sm">Formation moyenne</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-primary/70 text-sm">Autonomie atteinte</div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleDetailClick}
            className="group bg-gradient-to-r from-accent-green via-highlight-brown to-accent-green text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-highlight-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center space-x-3">
              <Rocket className="group-hover:animate-bounce" size={24} />
              <span>Découvrir le processus détaillé</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;