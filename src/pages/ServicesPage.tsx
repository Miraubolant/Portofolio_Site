import React from 'react';
import { Monitor, ShoppingCart, Cog, CheckCircle, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ContactForm from '../components/ContactForm';

const ServicesPage: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const services = [
    {
      id: 'vitrine',
      title: 'Sites Vitrine Autonomes',
      description: 'Site professionnel avec interface admin simple pour gérer votre contenu en toute autonomie',
      icon: <Monitor size={32} />,
      price: 'À partir de 1 500€',
      deliveryTime: '7-10 jours',
      features: [
        'Design responsive premium',
        'Interface admin ultra-simple',
        'Éditeur de contenu WYSIWYG',
        'Gestion des images drag & drop',
        'SEO optimisé',
        'Formation personnalisée incluse',
        'Hébergement + maintenance 1 an',
        'Support formation illimité'
      ],
      process: [
        'Analyse de vos besoins de contenu',
        'Design sur-mesure + interface admin',
        'Développement + CMS personnalisé',
        'Formation prise en main (2h)',
        'Livraison + support continu'
      ]
    },
    {
      id: 'ecommerce',
      title: 'Boutiques E-commerce Autonomes',
      description: 'Boutique en ligne complète avec dashboard simple pour gérer produits, commandes et stocks',
      icon: <ShoppingCart size={32} />,
      price: 'À partir de 2 500€',
      deliveryTime: '2-3 semaines',
      features: [
        'Boutique e-commerce complète',
        'Dashboard produits intuitif',
        'Gestion stocks automatisée',
        'Suivi commandes simplifié',
        'Paiements sécurisés intégrés',
        'Formation gestion boutique',
        'Analytics ventes incluses',
        'Support e-commerce dédié'
      ],
      process: [
        'Audit besoins e-commerce',
        'Architecture boutique + admin',
        'Développement + intégrations',
        'Formation gestion complète (4h)',
        'Déploiement Coolify + accompagnement'
      ]
    },
    {
      id: 'webapp',
      title: 'Applications Web Autonomes',
      description: 'Application web sur-mesure avec interface admin personnalisée selon vos processus métier',
      icon: <Cog size={32} />,
      price: 'À partir de 3 500€',
      deliveryTime: '3-4 semaines',
      features: [
        'Application web sur-mesure',
        'Dashboard admin personnalisé',
        'Gestion utilisateurs avancée',
        'Workflows automatisés',
        'API intégrées',
        'Formation approfondie incluse',
        'Documentation complète',
        'Support technique prioritaire',
        'Hébergement Contabo optimisé'
      ],
      process: [
        'Analyse processus métier',
        'Conception UX/UI + admin',
        'Développement full-stack',
        'Formation équipe (6h)',
        'Déploiement Coolify/Contabo + maintenance'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sand-light via-beige-gold to-sand-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-accent-green/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-highlight-brown/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              <span className="text-accent-green">Services</span> Sites Autonomes Express
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Site professionnel + Interface admin ultra-simple + Formation incluse = 
              <span className="font-semibold text-accent-green">Votre autonomie digitale garantie</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={elementRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-accent-green/10 rounded-xl text-accent-green">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="bg-highlight-brown text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Prix sur devis
                        </span>
                        <span className="bg-accent-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {service.deliveryTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-primary/80 mb-8">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-accent-green flex-shrink-0" size={20} />
                        <span className="text-primary/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-sand-light/50 to-beige-gold/50 p-6 rounded-xl">
                    <h4 className="font-semibold text-primary mb-3">Processus optimisé :</h4>
                    <div className="space-y-2">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-accent-green text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {stepIndex + 1}
                          </div>
                          <span className="text-primary/80">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-accent-green/10 to-highlight-brown/10 p-8 rounded-2xl">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-primary">Interface Admin</h4>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          Simple & Intuitive
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-accent-green/20 rounded"></div>
                        <div className="h-4 bg-highlight-brown/20 rounded w-3/4"></div>
                        <div className="h-4 bg-accent-green/20 rounded w-1/2"></div>
                      </div>
                      <div className="mt-6 text-center">
                        <div className="inline-flex items-center space-x-2 bg-accent-green text-white px-4 py-2 rounded-lg">
                          <CheckCircle size={16} />
                          <span className="text-sm">Formation incluse</span>
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-beige-gold/30 to-sand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Questions sur l'autonomie
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Et si j'ai besoin d'aide après la formation ?",
                a: "Support formation illimité inclus ! Je reste disponible pour toutes vos questions sur l'utilisation de votre interface admin, sans limite de temps."
              },
              {
                q: "L'interface admin est-elle vraiment simple ?",
                a: "Oui ! Conçue pour être utilisée par tous, même sans compétences techniques. Formation personnalisée jusqu'à votre maîtrise complète."
              },
              {
                q: "Que se passe-t-il si je veux ajouter des fonctionnalités ?",
                a: "Évolutions possibles ! L'architecture est conçue pour s'adapter. Je peux ajouter des fonctionnalités tout en gardant l'interface simple."
              },
              {
                q: "L'hébergement et la maintenance sont-ils vraiment inclus ?",
                a: "Oui, 1 an inclus ! Hébergement professionnel + mises à jour sécurité + sauvegardes automatiques + support technique."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-3">{faq.q}</h4>
                <p className="text-primary/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Prêt pour votre <span className="text-accent-green">autonomie digitale</span> ?
              </h2>
              <p className="text-xl text-primary/80 mb-8">
                Choisissez votre service et recevez un devis personnalisé sous 2h. 
                Choisissez votre service et recevez un devis personnalisé sous 48h max. 
                Formation incluse jusqu'à votre maîtrise complète !
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/33123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowRight size={20} />
                </a>
                <a
                  href="mailto:victor@victormirault.com"
                  className="flex items-center justify-center space-x-3 bg-accent-green text-white px-6 py-4 rounded-lg hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105 font-semibold"
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

export default ServicesPage;