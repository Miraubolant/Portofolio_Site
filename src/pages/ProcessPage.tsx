import React, { useState } from 'react';
import { 
  MessageSquare, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  GraduationCap,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Zap
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ContactForm from '../components/ContactForm';

const ProcessPage: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      icon: <MessageSquare size={32} />,
      title: 'Brief Express & Analyse',
      duration: '1-2 jours',
      description: 'Analyse approfondie de vos besoins d\'autonomie digitale',
      details: [
        'Audit de vos besoins de contenu et fonctionnalités',
        'Définition du niveau d\'autonomie souhaité',
        'Analyse de votre niveau technique actuel',
        'Identification des processus métier à automatiser'
      ],
      deliverables: [
        'Cahier des charges détaillé',
        'Maquette interface admin personnalisée',
        'Plan de formation sur-mesure',
        'Devis précis avec délais'
      ],
      color: 'accent-green'
    },
    {
      id: 2,
      icon: <Lightbulb size={32} />,
      title: 'Stratégie & Architecture',
      duration: '2-3 jours',
      description: 'Conception de l\'architecture technique et de l\'interface admin',
      details: [
        'Architecture backend optimisée pour l\'autonomie',
        'Conception interface admin intuitive',
        'Définition des workflows de gestion',
        'Planification de la formation client'
      ],
      deliverables: [
        'Architecture technique documentée',
        'Wireframes interface admin',
        'Spécifications fonctionnelles',
        'Planning de développement'
      ],
      color: 'highlight-brown'
    },
    {
      id: 3,
      icon: <Palette size={32} />,
      title: 'Design & Interface Admin',
      duration: '3-4 jours',
      description: 'Création du design site + dashboard admin ultra-simple',
      details: [
        'Design responsive premium du site',
        'Interface admin épurée et intuitive',
        'UX optimisée pour non-techniciens',
        'Système de prévisualisation temps réel'
      ],
      deliverables: [
        'Maquettes finales validées',
        'Design system complet',
        'Prototypes interface admin',
        'Guide d\'utilisation visuel'
      ],
      color: 'accent-green'
    },
    {
      id: 4,
      icon: <Code size={32} />,
      title: 'Développement + Backend',
      duration: '5-8 jours',
      description: 'Développement complet avec CMS personnalisé',
      details: [
        'Développement frontend responsive',
        'Backend sécurisé et performant',
        'CMS sur-mesure ultra-simple',
        'Intégrations API nécessaires'
      ],
      deliverables: [
        'Site web complet fonctionnel',
        'Interface admin opérationnelle',
        'Documentation technique',
        'Tests de sécurité validés'
      ],
      color: 'primary'
    },
    {
      id: 5,
      icon: <TestTube size={32} />,
      title: 'Tests & Optimisation',
      duration: '2-3 jours',
      description: 'Validation complète de l\'interface admin et optimisations',
      details: [
        'Tests utilisabilité interface admin',
        'Optimisation performances',
        'Tests responsive tous devices',
        'Validation sécurité et sauvegardes'
      ],
      deliverables: [
        'Site optimisé et sécurisé',
        'Interface admin validée',
        'Rapport de tests complet',
        'Environnement de formation prêt'
      ],
      color: 'highlight-brown'
    },
    {
      id: 6,
      icon: <GraduationCap size={32} />,
      title: 'Formation & Autonomie',
      duration: '1-2 jours',
      description: 'Formation personnalisée jusqu\'à votre maîtrise complète',
      details: [
        'Session formation 1-on-1 personnalisée',
        'Tutoriels vidéo sur-mesure',
        'Documentation pas-à-pas illustrée',
        'Support post-formation illimité'
      ],
      deliverables: [
        'Client 100% autonome',
        'Tutoriels vidéo personnalisés',
        'Documentation complète',
        'Accès support formation'
      ],
      color: 'accent-green'
    }
  ];

  const tools = [
    { name: 'React/Next.js', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js/Express', category: 'Backend', icon: '🟢' },
    { name: 'Supabase/MySQL', category: 'Database', icon: '🗄️' },
    { name: 'CMS Personnalisé', category: 'CMS', icon: '📝' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
    { name: 'Coolify/Contabo', category: 'Hosting', icon: '🚀' }
  ];

  const guarantees = [
    {
      icon: <Users size={24} />,
      title: 'Formation jusqu\'à maîtrise',
      description: 'Support inclus jusqu\'à votre autonomie complète'
    },
    {
      icon: <Clock size={24} />,
      title: 'Délais respectés',
      description: 'Livraison dans les temps ou remboursement'
    },
    {
      icon: <Target size={24} />,
      title: 'Interface ultra-simple',
      description: 'Utilisable même sans compétences techniques'
    },
    {
      icon: <Zap size={24} />,
      title: 'Support réactif',
      description: 'Réponse sous 2h garantie 7j/7'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-4 pb-12 md:pb-16 bg-gradient-to-br from-sand-light via-beige-gold to-sand-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-accent-green/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-highlight-brown/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              <span className="text-accent-green">Ma Méthode</span> <span className="text-highlight-brown">Autonomie</span> Express
            </h1>
            <p className="text-base md:text-lg text-primary/80 max-w-3xl mx-auto">
              Processus éprouvé en 6 étapes pour votre autonomie digitale complète.
              <span className="font-semibold text-accent-green"> Formation personnalisée jusqu'à maîtrise totale.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline Detailed */}
      <section ref={elementRef} className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 rounded-xl text-white ${
                      step.color === 'accent-green' ? 'bg-accent-green' :
                      step.color === 'highlight-brown' ? 'bg-highlight-brown' :
                      'bg-primary'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                          Étape {step.id}
                        </span>
                        <span className="bg-accent-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {step.duration}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-primary">{step.title}</h2>
                    </div>
                  </div>

                  <p className="text-lg text-primary/80 mb-8">{step.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-4">Détails du processus :</h4>
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="text-accent-green flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-primary/80 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-4">Livrables :</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-start space-x-3">
                            <ArrowRight className="text-highlight-brown flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-primary/80 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`bg-gradient-to-br p-8 rounded-2xl ${
                    step.color === 'accent-green' ? 'from-accent-green/10 to-accent-green/5' :
                    step.color === 'highlight-brown' ? 'from-highlight-brown/10 to-highlight-brown/5' :
                    'from-primary/10 to-primary/5'
                  }`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                          step.color === 'accent-green' ? 'bg-accent-green' :
                          step.color === 'highlight-brown' ? 'bg-highlight-brown' :
                          'bg-primary'
                        } text-white`}>
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
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-gradient-to-br from-beige-gold/30 to-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Technologies & Outils
            </h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Stack technique moderne pour des sites performants et des interfaces admin ultra-simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h4 className="font-semibold text-primary mb-1">{tool.name}</h4>
                <p className="text-primary/60 text-sm">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Garanties <span className="text-accent-green">Autonomie</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-sand-light/20 to-beige-gold/20 p-6 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-green text-white rounded-full mb-4">
                  {guarantee.icon}
                </div>
                <h4 className="font-semibold text-primary mb-2">{guarantee.title}</h4>
                <p className="text-primary/70 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Prêt pour votre <span className="text-sand-light">autonomie digitale</span> ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Découvrez comment ma méthode peut vous rendre totalement autonome 
                dans la gestion de votre site web. Formation incluse jusqu'à maîtrise !
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/33123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-accent-green text-white px-6 py-4 rounded-lg hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowRight size={20} />
                </a>
                <a
                  href="mailto:victor@victormirault.com"
                  className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <span>Email Professionnel</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;