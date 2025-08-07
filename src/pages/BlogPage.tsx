import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ContactForm from '../components/ContactForm';
import NewsletterSignup from '../components/NewsletterSignup';

const BlogPage: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Interface Admin Simple : Pourquoi C\'est Essentiel en 2024',
      excerpt: 'Découvrez pourquoi une interface admin intuitive est la clé de votre autonomie digitale et comment elle transforme votre relation avec votre site web.',
      content: 'Une interface admin complexe est le principal frein à l\'autonomie digitale. Après 5 ans d\'expérience, j\'ai identifié les 7 critères essentiels d\'une interface vraiment simple...',
      category: 'Autonomie',
      author: 'Victor Mirault',
      date: '2024-01-15',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Interface Admin', 'Autonomie', 'UX Design'],
      featured: true
    },
    {
      id: 2,
      title: 'Gérer Son Site E-commerce en Autonomie : Guide Complet',
      excerpt: 'Produits, stocks, commandes... Apprenez à gérer votre boutique en ligne sans dépendre d\'un développeur. Formation étape par étape incluse.',
      content: 'La gestion autonome d\'un e-commerce nécessite une interface pensée pour les non-techniciens. Voici ma méthode en 6 étapes pour une autonomie complète...',
      category: 'E-commerce',
      author: 'Victor Mirault',
      date: '2024-01-10',
      readTime: '8 min',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['E-commerce', 'Gestion Autonome', 'Formation'],
      featured: false
    },
    {
      id: 3,
      title: 'Site Web Autonome Rapidement : Ma Méthode Express',
      excerpt: 'Comment livrer un site avec interface admin en 2 semaines ? Découvrez ma méthode optimisée pour votre autonomie rapide.',
      content: 'Livrer rapidement sans sacrifier l\'autonomie client : c\'est possible avec la bonne méthode. Voici comment j\'optimise chaque étape...',
      category: 'Méthode',
      author: 'Victor Mirault',
      date: '2024-01-05',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Livraison Rapide', 'Méthode', 'Efficacité'],
      featured: true
    },
    {
      id: 4,
      title: 'Formation Client : La Clé de l\'Autonomie Digitale',
      excerpt: 'Une formation personnalisée fait toute la différence. Découvrez comment je forme mes clients jusqu\'à leur maîtrise complète.',
      content: 'La formation n\'est pas un bonus, c\'est le cœur de l\'autonomie. Voici ma méthode de formation personnalisée qui garantit votre succès...',
      category: 'Formation',
      author: 'Victor Mirault',
      date: '2023-12-28',
      readTime: '7 min',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Formation', 'Pédagogie', 'Support Client'],
      featured: false
    },
    {
      id: 5,
      title: 'Prix Site Autonome vs Site Classique : Comparatif 2024',
      excerpt: 'Investir dans un site autonome est-il rentable ? Analyse complète des coûts cachés et des économies réalisées.',
      content: 'Un site autonome coûte plus cher à la création mais génère des économies massives. Voici le calcul détaillé sur 3 ans...',
      category: 'Business',
      author: 'Victor Mirault',
      date: '2023-12-20',
      readTime: '9 min',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Pricing', 'ROI', 'Business'],
      featured: false
    },
    {
      id: 6,
      title: 'SEO et Autonomie : Optimiser Son Référencement Soi-Même',
      excerpt: 'Gérez votre SEO en autonomie avec une interface admin optimisée. Méta-données, contenu, performances : tout devient simple.',
      content: 'Le SEO n\'est plus réservé aux experts. Avec la bonne interface, vous pouvez optimiser votre référencement en autonomie...',
      category: 'SEO',
      author: 'Victor Mirault',
      date: '2023-12-15',
      readTime: '10 min',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Référencement', 'Autonomie'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les articles', count: blogPosts.length },
    { id: 'Autonomie', label: 'Autonomie', count: blogPosts.filter(p => p.category === 'Autonomie').length },
    { id: 'E-commerce', label: 'E-commerce', count: blogPosts.filter(p => p.category === 'E-commerce').length },
    { id: 'Formation', label: 'Formation', count: blogPosts.filter(p => p.category === 'Formation').length },
    { id: 'Méthode', label: 'Méthode', count: blogPosts.filter(p => p.category === 'Méthode').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
              Blog <span className="text-accent-green">Autonomie Digitale</span>
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Conseils, méthodes et retours d'expérience pour votre autonomie web. 
              Apprenez à gérer votre site comme un pro !
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-accent-green text-white shadow-lg'
                      : 'bg-white/70 text-primary hover:bg-white hover:shadow-md'
                  }`}
                >
                  <Tag size={16} />
                  <span>{category.label}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Articles <span className="text-accent-green">À la Une</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                      À la Une
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-primary/60">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-accent-green transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-primary/80 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-sand-light/50 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User size={16} className="text-primary/60" />
                      <span className="text-sm text-primary/80">{post.author}</span>
                    </div>
                    <button className="flex items-center space-x-1 text-accent-green hover:text-accent-green/80 transition-colors duration-200">
                      <span className="text-sm font-medium">Lire</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section ref={elementRef} className="py-20 bg-gradient-to-br from-beige-gold/30 to-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Tous les Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-primary/60">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-primary mb-3 group-hover:text-accent-green transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-primary/80 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User size={16} className="text-primary/60" />
                      <span className="text-sm text-primary/80">{post.author}</span>
                    </div>
                    <button className="flex items-center space-x-1 text-accent-green hover:text-accent-green/80 transition-colors duration-200">
                      <span className="text-sm font-medium">Lire</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary/60 text-lg">Aucun article trouvé pour cette recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Prêt à passer à l'<span className="text-sand-light">action</span> ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Vous avez lu mes conseils, maintenant passons à la pratique ! 
                Créons ensemble votre site autonome avec formation incluse.
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

export default BlogPage;