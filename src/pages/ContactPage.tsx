import React from 'react';
import { MessageCircle, Mail, Clock, Globe, CheckCircle, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ContactPage: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const contactMethods = [
    {
      icon: <MessageCircle size={32} />,
      title: 'WhatsApp Direct',
      description: 'Réponse immédiate 7j/7',
      action: 'Discuter maintenant',
      link: 'https://wa.me/33123456789',
      color: 'bg-green-500 hover:bg-green-600',
      available: '24h/24'
    },
    {
      icon: <Mail size={32} />,
      title: 'Email Professionnel',
      description: 'victor@victormirault.com',
      action: 'Envoyer un email',
      link: 'mailto:victor@victormirault.com',
      color: 'bg-accent-green hover:bg-accent-green/90',
      available: 'Réponse sous 2h'
    },
    {
      icon: <Phone size={32} />,
      title: 'Consultation Gratuite',
      description: 'Appel découverte 30min',
      action: 'Réserver un créneau',
      link: '#',
      color: 'bg-highlight-brown hover:bg-highlight-brown/90',
      available: 'Sur rendez-vous'
    }
  ];

  const faqs = [
    {
      question: 'Combien de temps pour avoir un site autonome ?',
      answer: 'Entre 1 et 4 semaines selon la complexité. Site vitrine : 7-10 jours, E-commerce : 2-3 semaines, Application : 3-4 semaines. Formation incluse dans tous les cas.'
    },
    {
      question: 'Et si je ne suis pas technique du tout ?',
      answer: 'C\'est exactement pour ça que j\'existe ! Mon interface admin est conçue pour les non-techniciens. Formation personnalisée jusqu\'à votre maîtrise complète, support illimité inclus.'
    },
    {
      question: 'Que se passe-t-il après la livraison ?',
      answer: 'Formation personnalisée 1-on-1, tutoriels vidéo sur-mesure, documentation complète, et support formation illimité. Vous ne serez jamais seul(e) !'
    },
    {
      question: 'L\'hébergement et la maintenance sont-ils inclus ?',
      answer: 'Oui ! 1 an d\'hébergement professionnel + maintenance + mises à jour sécurité + sauvegardes automatiques inclus. Puis 15€/mois seulement.'
    },
    {
      question: 'Quels outils utilisez-vous pour l\'hébergement ?',
      answer: 'J\'utilise Coolify pour le déploiement automatisé et Contabo pour l\'hébergement haute performance. Stack moderne, sécurisée et économique pour mes clients.'
    },
    {
      question: 'Travaillez-vous à l\'international ?',
      answer: 'Je me concentre sur la France pour offrir un service optimal. Formation à distance dans toute la France, disponible 7j/7 avec horaires adaptés.'
    }
  ];

  const guarantees = [
    {
      icon: <CheckCircle size={24} />,
      title: 'Formation jusqu\'à autonomie',
      description: 'Support inclus jusqu\'à votre maîtrise complète'
    },
    {
      icon: <Clock size={24} />,
      title: 'Réponse sous 2h garantie',
      description: '7j/7 24h/24 dans votre fuseau horaire'
    },
    {
      icon: <Globe size={24} />,
      title: 'Service France entière',
      description: 'Clients formés dans toute la France'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Formation à distance',
      description: 'Visio, WhatsApp, email - comme vous préférez'
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
              Parlons de votre <span className="text-accent-green">autonomie web</span>
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Prêt(e) pour un site avec interface simple + formation incluse ? 
              Contactez-moi pour démarrer votre autonomie digitale !
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-white/70 backdrop-blur-sm p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-green/10 rounded-full mb-6 text-accent-green">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
                <p className="text-primary/80 mb-2">{method.description}</p>
                <p className="text-primary/60 text-sm mb-6">{method.available}</p>
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 ${method.color}`}
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Formulaire de Contact
              </h2>
              <p className="text-primary/80 mb-8">
                Décrivez-moi votre projet et vos besoins d'autonomie. 
                Je vous réponds avec un devis personnalisé sous 2h !
              </p>
              <ContactForm />
            </div>

            {/* Contact Info & Guarantees */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Pourquoi me choisir ?
                </h3>
                <div className="space-y-6">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center text-accent-green">
                        {guarantee.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{guarantee.title}</h4>
                        <p className="text-primary/70 text-sm">{guarantee.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent-green/10 to-highlight-brown/10 p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-3">Engagement Autonomie :</h4>
                <ul className="space-y-2 text-primary/80 text-sm">
                  <li>• Interface admin ultra-simple garantie</li>
                  <li>• Formation personnalisée jusqu'à maîtrise</li>
                  <li>• Support post-formation illimité</li>
                  <li>• Hébergement + maintenance 1 an inclus</li>
                  <li>• Satisfaction client ou remboursement</li>
                </ul>
              </div>

              <div className="bg-white border border-sand-light/50 p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-3">Disponibilité :</h4>
                <div className="space-y-2 text-primary/80 text-sm">
                  <p><strong>Lundi - Dimanche :</strong> 8h - 20h (heure française)</p>
                  <p><strong>France entière :</strong> Adaptation à vos horaires</p>
                  <p><strong>Contact :</strong> WhatsApp et Email</p>
                  <p><strong>Formation :</strong> Créneaux flexibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={elementRef} className="py-20 bg-gradient-to-br from-beige-gold/30 to-sand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Questions <span className="text-accent-green">Fréquentes</span>
            </h2>
            <p className="text-primary/80">
              Toutes les réponses sur l'autonomie digitale et ma méthode
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white/70 backdrop-blur-sm p-6 rounded-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="font-semibold text-primary mb-3 text-lg">{faq.question}</h4>
                <p className="text-primary/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-primary/70 mb-6">
              Une autre question ? Contactez-moi directement !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:victor@victormirault.com"
                className="flex items-center justify-center space-x-3 bg-accent-green text-white px-6 py-3 rounded-lg hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt(e) pour votre <span className="text-sand-light">autonomie digitale</span> ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ne restez plus dépendant(e) d'un développeur. 
            Créons ensemble votre site autonome avec formation incluse !
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4">Ce que vous obtenez :</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={20} />
                <span>Site professionnel complet</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={20} />
                <span>Interface admin ultra-simple</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={20} />
                <span>Formation personnalisée incluse</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={20} />
                <span>Support formation illimité</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={20} />
                <span>Hébergement + maintenance 1 an</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={20} />
                <span>Autonomie totale garantie</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              <MessageCircle size={24} />
              <span>Démarrer maintenant</span>
            </a>
            <a
              href="mailto:victor@victormirault.com"
              className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              <Mail size={24} />
              <span>Email Direct</span>
            </a>
          </div>

          <p className="text-white/70 text-sm mt-6">
            Réponse sous 48h max • Formation incluse • Support illimité
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;