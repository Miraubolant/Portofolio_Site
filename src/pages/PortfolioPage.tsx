import React, { useState } from 'react';
import { ExternalLink, Settings, Star, Filter, CheckCircle } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PortfolioPage: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Boutique Mode Premium',
      type: 'ecommerce',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '2 semaines',
      testimonial: 'Je gère mes produits seule maintenant ! L\'interface est si simple, j\'ajoute de nouveaux articles en 2 minutes.',
      client: 'Sarah L., Créatrice Mode',
      features: ['Gestion produits intuitive', 'Interface stocks simplifiée', 'Formation e-commerce incluse', 'Dashboard ventes'],
      description: 'Boutique e-commerce complète avec interface admin ultra-simple pour la gestion autonome des produits, stocks et commandes.',
      technologies: ['React', 'Node.js', 'Stripe', 'Admin Dashboard'],
      url: 'https://boutique-sarah.com',
      adminDemo: 'Interface admin démo disponible',
      results: ['Autonomie complète en 3h de formation', '+150% ventes en 2 mois', 'Gestion quotidienne en 10min']
    },
    {
      id: 2,
      title: 'Cabinet Médical Dr. Martin',
      type: 'vitrine',
      category: 'Site vitrine',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '10 jours',
      testimonial: 'Mise à jour simple et rapide ! Je modifie mes horaires et actualités en quelques clics, sans stress.',
      client: 'Dr. Martin, Médecin généraliste',
      features: ['Éditeur contenu simple', 'Gestion rendez-vous', 'Autonomie totale', 'Interface médicale'],
      description: 'Site vitrine médical avec interface admin simplifiée pour la gestion autonome du contenu et des informations pratiques.',
      technologies: ['WordPress Custom', 'Admin Simple', 'SEO Médical', 'Responsive'],
      url: 'https://cabinet-martin.fr',
      adminDemo: 'Demo interface disponible',
      results: ['Formation 2h suffisante', 'Mises à jour quotidiennes', '+200% visibilité locale']
    },
    {
      id: 3,
      title: 'App Gestion Projets TechStart',
      type: 'webapp',
      category: 'Application web',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '3 semaines',
      testimonial: 'Dashboard parfait pour mon équipe ! Interface intuitive, formation excellente, on est autonomes.',
      client: 'Marc D., CEO TechStart',
      features: ['Dashboard admin complet', 'Multi-utilisateurs', 'Interface intuitive', 'Workflows personnalisés'],
      description: 'Application web de gestion de projets avec dashboard admin personnalisé pour l\'autonomie complète de l\'équipe.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Dashboard Custom'],
      url: 'https://app-techstart.com',
      adminDemo: 'Demo complète disponible',
      results: ['Équipe autonome en 4h', 'Productivité +80%', 'Gestion simplifiée']
    },
    {
      id: 4,
      title: 'Restaurant Le Gourmet',
      type: 'vitrine',
      category: 'Site vitrine',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '12 jours',
      testimonial: 'Menu et réservations gérés facilement ! Je change les plats du jour en 30 secondes, c\'est magique.',
      client: 'Chef Antoine, Restaurant gastronomique',
      features: ['Gestion menus dynamique', 'Réservations intégrées', 'Photos produits', 'Interface restauration'],
      description: 'Site vitrine restaurant avec interface admin spécialisée pour la gestion autonome des menus et réservations.',
      technologies: ['WordPress Custom', 'Booking System', 'Gallery Manager', 'SEO Local'],
      url: 'https://restaurant-gourmet.fr',
      adminDemo: 'Interface démo restaurant',
      results: ['Autonomie menu complète', '+50% réservations', 'Gestion quotidienne 5min']
    },
    {
      id: 5,
      title: 'Agence Immobilière Premium',
      type: 'webapp',
      category: 'Application web',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '4 semaines',
      testimonial: 'Gestion biens immobiliers simplifiée ! Interface parfaite, formation top, équipe autonome.',
      client: 'Julie R., Directrice agence',
      features: ['Gestion biens immobiliers', 'CRM intégré', 'Interface agents', 'Dashboard complet'],
      description: 'Application immobilière complète avec interface admin pour la gestion autonome des biens et clients.',
      technologies: ['React', 'Node.js', 'CRM Custom', 'Maps Integration'],
      url: 'https://agence-premium.com',
      adminDemo: 'Demo CRM immobilier',
      results: ['Équipe autonome 6h', 'Efficacité +120%', 'Gestion centralisée']
    },
    {
      id: 6,
      title: 'École de Danse Étoile',
      type: 'vitrine',
      category: 'Site vitrine',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '8 jours',
      testimonial: 'Cours et événements mis à jour facilement ! Interface simple, parfait pour notre école.',
      client: 'Marie C., Professeure de danse',
      features: ['Gestion cours/horaires', 'Événements dynamiques', 'Galerie photos', 'Inscriptions en ligne'],
      description: 'Site vitrine école de danse avec interface admin pour la gestion autonome des cours et événements.',
      technologies: ['WordPress Custom', 'Event Manager', 'Gallery System', 'Booking Forms'],
      url: 'https://ecole-etoile.fr',
      adminDemo: 'Interface école disponible',
      results: ['Formation 1h30 suffisante', 'Mises à jour hebdomadaires', '+80% inscriptions']
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets', count: projects.length },
    { id: 'vitrine', label: 'Sites vitrine', count: projects.filter(p => p.type === 'vitrine').length },
    { id: 'ecommerce', label: 'E-commerce', count: projects.filter(p => p.type === 'ecommerce').length },
    { id: 'webapp', label: 'Applications', count: projects.filter(p => p.type === 'webapp').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

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
              <span className="text-accent-green">Portfolio</span> Réalisations Autonomes
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              150+ projets livrés avec interface admin simple + formation incluse = 
              <span className="font-semibold text-accent-green">Clients 100% autonomes</span>
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-accent-green text-white shadow-lg'
                    : 'bg-white/70 text-primary hover:bg-white hover:shadow-md'
                }`}
              >
                <Filter size={18} />
                <span>{filter.label}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={elementRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Interface admin incluse
                    </span>
                  </div>
                  
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {project.deliveryTime}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className={`absolute inset-0 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200">
                      <ExternalLink size={20} className="text-primary" />
                    </button>
                    <button className="bg-accent-green p-3 rounded-full hover:bg-accent-green/90 transition-colors duration-200">
                      <Settings size={20} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl text-primary group-hover:text-accent-green transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-highlight-brown/10 text-highlight-brown px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-primary/80 mb-4 text-sm">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-primary/70 flex items-center">
                        <CheckCircle className="text-accent-green mr-2 flex-shrink-0" size={14} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-sand-light/50 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-accent-green/5 p-3 rounded-lg mb-4">
                    <h4 className="font-semibold text-primary text-sm mb-2">Résultats autonomie :</h4>
                    <div className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-xs text-primary/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-sand-light/50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-primary/80 italic mb-2">"{project.testimonial}"</p>
                    <p className="text-xs text-primary/60 font-medium">- {project.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-beige-gold/30 to-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Résultats <span className="text-accent-green">autonomie</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Sites livrés', sublabel: 'avec interface admin' },
              { number: '100%', label: 'Clients autonomes', sublabel: 'après formation' },
              { number: '2h', label: 'Formation moyenne', sublabel: 'pour maîtrise complète' },
              { number: '24h/24', label: 'Support inclus', sublabel: 'formation illimitée' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/70 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-accent-green mb-2">{stat.number}</div>
                <p className="font-semibold text-primary mb-1">{stat.label}</p>
                <p className="text-primary/70 text-sm">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;