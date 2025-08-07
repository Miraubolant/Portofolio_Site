import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Settings, Star, ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PortfolioPreviewProps {
  onViewAllClick: () => void;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ onViewAllClick }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Boutique Mode Premium',
      type: 'E-commerce',
      image: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '2 semaines',
      testimonial: 'Je gère mes produits seule maintenant !',
      client: 'Sarah L.',
      features: ['Gestion produits', 'Interface stocks', 'Formation incluse']
    },
    {
      title: 'Cabinet Médical',
      type: 'Site vitrine',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '10 jours',
      testimonial: 'Mise à jour simple et rapide !',
      client: 'Dr. Martin',
      features: ['Éditeur simple', 'Gestion rendez-vous', 'Autonomie totale']
    },
    {
      title: 'App Gestion Projets',
      type: 'Application web',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '3 semaines',
      testimonial: 'Dashboard parfait pour mon équipe !',
      client: 'Tech Startup',
      features: ['Dashboard admin', 'Multi-utilisateurs', 'Interface intuitive']
    },
    {
      title: 'Restaurant Gastronomique',
      type: 'Site vitrine + Réservations',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '12 jours',
      testimonial: 'Menu et réservations gérés facilement !',
      client: 'Chef Antoine',
      features: ['Gestion menus', 'Réservations', 'Photos produits']
    }
  ];

  useEffect(() => {
    // Component logic here
  }, []);

  return (
    <section ref={elementRef} className="py-16 bg-gradient-to-br from-beige-gold/30 to-sand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Mes réalisations <span className="text-accent-green">autonomes</span>
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Chaque projet livré avec son interface admin simple et sa formation personnalisée
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
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
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                    <ExternalLink size={18} className="text-primary" />
                  </button>
                  <button className="bg-accent-green p-2 rounded-full hover:bg-accent-green/90 transition-colors duration-200">
                    <Settings size={18} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-primary group-hover:text-accent-green transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-highlight-brown/10 text-highlight-brown px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-primary/70 flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-sand-light/50 p-3 rounded-lg">
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

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onViewAllClick}
            className="group bg-gradient-to-r from-primary to-accent-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Voir tous mes projets
            <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;