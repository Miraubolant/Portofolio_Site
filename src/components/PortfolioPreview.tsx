import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Settings, Star, ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';
import LazyImage from './LazyImage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PortfolioPreviewProps {
  onViewAllClick: () => void;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ onViewAllClick }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const projects = [
    {
      title: 'Boutique Mode Premium',
      type: 'E-commerce',
      image: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '2 semaines',
      testimonial: 'Je gère mes produits seule maintenant ! L\'interface est si simple, j\'ajoute de nouveaux articles en 2 minutes.',
      client: 'Sarah L.',
      features: ['Gestion produits intuitive', 'Interface stocks simplifiée', 'Formation e-commerce incluse'],
      autonomyLevel: '100%',
      formationTime: '3h',
      color: 'from-pink-500/20 to-purple-500/20',
      accentColor: 'text-pink-600'
    },
    {
      title: 'Cabinet Médical Dr. Martin',
      type: 'Site vitrine',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '10 jours',
      testimonial: 'Mise à jour simple et rapide ! Je modifie mes horaires et actualités en quelques clics, sans stress.',
      client: 'Dr. Martin',
      features: ['Éditeur contenu simple', 'Gestion rendez-vous', 'Autonomie totale'],
      autonomyLevel: '100%',
      formationTime: '2h',
      color: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'text-blue-600'
    },
    {
      title: 'App Gestion Projets TechStart',
      type: 'Application web',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '3 semaines',
      testimonial: 'Dashboard parfait pour mon équipe ! Interface intuitive, formation excellente, on est autonomes.',
      client: 'Marc D., CEO',
      features: ['Dashboard admin complet', 'Multi-utilisateurs', 'Interface intuitive'],
      autonomyLevel: '100%',
      formationTime: '4h',
      color: 'from-green-500/20 to-emerald-500/20',
      accentColor: 'text-green-600'
    },
    {
      title: 'Restaurant Le Gourmet',
      type: 'Site vitrine + Réservations',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '12 jours',
      testimonial: 'Menu et réservations gérés facilement ! Je change les plats du jour en 30 secondes, c\'est magique.',
      client: 'Chef Antoine',
      features: ['Gestion menus dynamique', 'Réservations intégrées', 'Photos produits'],
      autonomyLevel: '100%',
      formationTime: '2h30',
      color: 'from-orange-500/20 to-red-500/20',
      accentColor: 'text-orange-600'
    },
    {
      title: 'École de Danse Étoile',
      type: 'Site vitrine + Inscriptions',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '8 jours',
      testimonial: 'Cours et événements mis à jour facilement ! Interface simple, parfait pour notre école.',
      client: 'Marie C.',
      features: ['Gestion cours/horaires', 'Événements dynamiques', 'Inscriptions en ligne'],
      autonomyLevel: '100%',
      formationTime: '1h30',
      color: 'from-purple-500/20 to-indigo-500/20',
      accentColor: 'text-purple-600'
    },
    {
      title: 'Agence Immobilière Premium',
      type: 'Application web',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      deliveryTime: '4 semaines',
      testimonial: 'Gestion biens immobiliers simplifiée ! Interface parfaite, formation top, équipe autonome.',
      client: 'Julie R.',
      features: ['Gestion biens immobiliers', 'CRM intégré', 'Interface agents'],
      autonomyLevel: '100%',
      formationTime: '6h',
      color: 'from-teal-500/20 to-cyan-500/20',
      accentColor: 'text-teal-600'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isPlaying && isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isVisible, projects.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetCarousel = () => {
    setCurrentSlide(0);
    setIsPlaying(true);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  const currentProject = projects[currentSlide];

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-beige-gold/30 to-sand-light relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-highlight-brown/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Mes réalisations <span className="text-accent-green">autonomes</span>
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-8">
            Chaque projet livré avec son interface admin simple et sa formation personnalisée
          </p>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={togglePlayPause}
              className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-accent-green/20 hover:bg-white/90 transition-all duration-300"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span className="text-sm font-medium">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button
              onClick={resetCarousel}
              className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-highlight-brown/20 hover:bg-white/90 transition-all duration-300"
            >
              <RotateCcw size={16} />
              <span className="text-sm font-medium">Reset</span>
            </button>
          </div>
        </div>

        {/* Main Carousel */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Featured Project Display */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-12 border border-white/50">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <LazyImage
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="transition-all duration-1000 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.color} opacity-80`}></div>
                
                {/* Floating Badges */}
                <div className="absolute top-6 left-6">
                  <span className="bg-accent-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Interface admin incluse
                  </span>
                </div>
                
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {currentProject.deliveryTime}
                  </span>
                </div>

                {/* Autonomy Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className={`text-2xl font-bold ${currentProject.accentColor} mb-1`}>
                          {currentProject.autonomyLevel}
                        </div>
                        <div className="text-xs text-primary/70">Autonomie atteinte</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-highlight-brown mb-1">
                          {currentProject.formationTime}
                        </div>
                        <div className="text-xs text-primary/70">Formation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${currentProject.accentColor} bg-current/10`}>
                    {currentProject.type}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-accent-green/10 rounded-full hover:bg-accent-green/20 transition-colors duration-200">
                      <ExternalLink size={18} className="text-accent-green" />
                    </button>
                    <button className="p-2 bg-highlight-brown/10 rounded-full hover:bg-highlight-brown/20 transition-colors duration-200">
                      <Settings size={18} className="text-highlight-brown" />
                    </button>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-primary mb-4">
                  {currentProject.title}
                </h3>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                      <span className="text-primary/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-sand-light/50 to-beige-gold/50 p-6 rounded-2xl mb-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-primary/80 italic mb-3 leading-relaxed">
                    "{currentProject.testimonial}"
                  </p>
                  <p className="text-primary/60 font-medium">- {currentProject.client}</p>
                </div>

                {/* Action Button */}
                <button className="bg-gradient-to-r from-accent-green to-highlight-brown text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Voir le projet complet
                </button>
              </div>
            </div>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-accent-green rounded-full'
                    : 'w-3 h-3 bg-primary/30 rounded-full hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Mini Projects Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  index === currentSlide ? 'ring-2 ring-accent-green scale-105' : ''
                }`}
              >
                <div className="relative h-32 overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60`}></div>
                  
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-accent-green/20 animate-pulse"></div>
                  )}
                </div>

                <div className="p-3">
                  <h4 className="font-semibold text-primary text-sm mb-1 truncate">
                    {project.title}
                  </h4>
                  <p className="text-xs text-primary/70 mb-2">{project.type}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-accent-green/10 text-accent-green px-2 py-1 rounded-full">
                      {project.formationTime}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={8} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-accent-green/90 flex items-center justify-center transition-all duration-300">
                    <div className="text-center text-white">
                      <Play size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">Voir le projet</span>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl mb-8 max-w-2xl mx-auto border border-accent-green/20 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Résultat garanti pour tous mes clients :
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-green mb-2">150+</div>
                <div className="text-primary/70 text-sm">Sites livrés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-highlight-brown mb-2">100%</div>
                <div className="text-primary/70 text-sm">Clients autonomes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2h</div>
                <div className="text-primary/70 text-sm">Formation moyenne</div>
              </div>
            </div>
            <p className="text-primary/80">
              Interface admin simple + Formation incluse = <span className="font-bold text-accent-green">Votre autonomie totale</span>
            </p>
          </div>

          <button
            onClick={onViewAllClick}
            className="group bg-gradient-to-r from-primary to-accent-green text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
          >
            <div className="flex items-center space-x-3">
              <span>Voir tous mes projets autonomes</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;