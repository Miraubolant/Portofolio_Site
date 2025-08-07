import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Play, Edit, Image, ShoppingCart, Settings, Calendar, MapPin, Check, Bell } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PremiumInterfaceDemo: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [autoDemo, setAutoDemo] = useState(true);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [demoData, setDemoData] = useState({
    title: 'Bienvenue chez Boulangerie Moderne',
    price: '2.50€',
    hours: '7h - 19h',
    notification: ''
  });

  const demoSequence = [
    { action: 'title', label: 'Modification du titre' },
    { action: 'image', label: 'Changement d\'image' },
    { action: 'price', label: 'Mise à jour des prix' },
    { action: 'reset', label: 'Retour initial' }
  ];

  useEffect(() => {
    if (autoDemo && isVisible) {
      const interval = setInterval(() => {
        const sequence = demoSequence[currentDemo];
        setIsEditing(sequence.action);
        
        setTimeout(() => {
          switch (sequence.action) {
            case 'title':
              setDemoData(prev => ({ ...prev, title: 'Bienvenue chez Artisan Boulanger', notification: 'Titre mis à jour ✅' }));
              break;
            case 'image':
              setDemoData(prev => ({ ...prev, notification: 'Image mise à jour ✅' }));
              break;
            case 'price':
              setDemoData(prev => ({ ...prev, price: '2.80€', notification: 'Prix mis à jour ✅' }));
              break;
            case 'reset':
              setDemoData({ title: 'Bienvenue chez Boulangerie Moderne', price: '2.50€', hours: '7h - 19h', notification: '' });
              break;
          }
          setIsEditing(null);
        }, 2000);

        setCurrentDemo((prev) => (prev + 1) % demoSequence.length);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [autoDemo, isVisible, currentDemo]);

  const handleModeSwitch = (mode: 'desktop' | 'mobile') => {
    setViewMode(mode);
    setAutoDemo(false);
    setTimeout(() => setAutoDemo(true), 3000);
  };

  return (
    <section ref={elementRef} className="py-16 bg-gradient-to-br from-sand-light to-beige-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-green/5 via-transparent to-highlight-brown/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Votre site, <span className="text-accent-green">votre autonomie</span>
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-8">
            Plus besoin de développeur pour vos mises à jour quotidiennes. 
            Gérez votre contenu en toute simplicité avec notre interface intuitive.
          </p>
        </div>

        {/* Demo Container */}
        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{ width: '90%', margin: '0 auto' }}>
          
          {/* Control Buttons */}
          <div className="flex justify-center space-x-4 p-6 bg-gradient-to-r from-sand-light/30 to-beige-gold/30">
            <button
              onClick={() => handleModeSwitch('desktop')}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium text-base transition-all duration-300 transform hover:scale-105 ${
                viewMode === 'desktop'
                  ? 'bg-accent-green text-white shadow-lg'
                  : 'bg-highlight-brown/20 text-highlight-brown hover:bg-highlight-brown/30'
              }`}
            >
              <Monitor size={20} />
              <span>Mode Desktop</span>
            </button>
            <button
              onClick={() => handleModeSwitch('mobile')}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium text-base transition-all duration-300 transform hover:scale-105 ${
                viewMode === 'mobile'
                  ? 'bg-accent-green text-white shadow-lg'
                  : 'bg-highlight-brown/20 text-highlight-brown hover:bg-highlight-brown/30'
              }`}
            >
              <Smartphone size={20} />
              <span>Mode Mobile</span>
            </button>
          </div>

          {/* Demo Interface */}
          <div className="relative overflow-hidden">
            <div className={`transition-transform duration-500 ${
              viewMode === 'mobile' ? 'translate-x-0' : 'translate-x-0'
            }`}>
              
              {/* Desktop Version */}
              {viewMode === 'desktop' && (
                <div className="p-8">
                  {/* Browser Window */}
                  <div className="bg-gray-100 rounded-t-xl p-3">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-white rounded px-3 py-1 ml-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">admin.victormirault.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="bg-white px-3 py-1 rounded-t text-sm font-medium text-accent-green border-b-2 border-accent-green">
                        Dashboard
                      </div>
                      <div className="bg-gray-200 px-3 py-1 rounded-t text-sm text-gray-600">
                        Contenu
                      </div>
                      <div className="bg-gray-200 px-3 py-1 rounded-t text-sm text-gray-600">
                        Médias
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="bg-white border-x border-b rounded-b-xl">
                    {/* Header */}
                    <div className="p-6 border-b bg-gradient-to-r from-accent-green/5 to-highlight-brown/5">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Bonjour ! Gérez votre site en toute simplicité
                      </h3>
                      {demoData.notification && (
                        <div className="flex items-center space-x-2 bg-green-50 text-green-800 px-3 py-2 rounded-lg">
                          <Bell size={16} />
                          <span className="text-sm">{demoData.notification}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex">
                      {/* Sidebar */}
                      <div className="w-64 bg-gray-50 p-4 border-r">
                        <nav className="space-y-2">
                          <div className="flex items-center space-x-3 bg-accent-green text-white px-3 py-2 rounded-lg">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-sm font-medium">📊 Tableau de bord</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-600 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Edit size={16} />
                            <span className="text-sm">✏️ Modifier le contenu</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-600 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Image size={16} />
                            <span className="text-sm">🖼️ Gérer les images</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-600 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <ShoppingCart size={16} />
                            <span className="text-sm">🛒 Produits</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-600 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Settings size={16} />
                            <span className="text-sm">⚙️ Paramètres</span>
                          </div>
                        </nav>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 p-6">
                        <div className="grid grid-cols-2 gap-6">
                          {/* Title Editor */}
                          <div className={`bg-white border-2 rounded-xl p-4 transition-all duration-300 ${
                            isEditing === 'title' ? 'border-accent-green bg-accent-green/5 scale-105' : 'border-gray-200 hover:border-accent-green/50'
                          }`}>
                            <div className="flex items-center space-x-2 mb-3">
                              <Edit className="text-accent-green" size={20} />
                              <h4 className="font-semibold text-primary">Modifier le titre de votre page</h4>
                            </div>
                            <input
                              type="text"
                              value={demoData.title}
                              className="w-full p-2 border border-gray-300 rounded-lg focus:border-accent-green focus:ring-1 focus:ring-accent-green"
                              readOnly
                            />
                            <div className="mt-2 text-xs text-gray-500">Cliquez pour modifier</div>
                          </div>

                          {/* Image Manager */}
                          <div className={`bg-white border-2 rounded-xl p-4 transition-all duration-300 ${
                            isEditing === 'image' ? 'border-accent-green bg-accent-green/5 scale-105' : 'border-gray-200 hover:border-accent-green/50'
                          }`}>
                            <div className="flex items-center space-x-2 mb-3">
                              <Image className="text-accent-green" size={20} />
                              <h4 className="font-semibold text-primary">Changer votre image de bannière</h4>
                            </div>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                              <div className="text-gray-500 text-sm">Glissez votre image ici</div>
                              <div className="text-xs text-gray-400 mt-1">ou cliquez pour parcourir</div>
                            </div>
                          </div>

                          {/* Price Manager */}
                          <div className={`bg-white border-2 rounded-xl p-4 transition-all duration-300 ${
                            isEditing === 'price' ? 'border-accent-green bg-accent-green/5 scale-105' : 'border-gray-200 hover:border-accent-green/50'
                          }`}>
                            <div className="flex items-center space-x-2 mb-3">
                              <ShoppingCart className="text-accent-green" size={20} />
                              <h4 className="font-semibold text-primary">Actualiser vos tarifs</h4>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span className="text-sm">Pain traditionnel</span>
                                <input
                                  type="text"
                                  value={demoData.price}
                                  className="w-16 p-1 text-sm border border-gray-300 rounded text-center"
                                  readOnly
                                />
                              </div>
                            </div>
                          </div>

                          {/* Hours Manager */}
                          <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-accent-green/50 transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-3">
                              <Calendar className="text-accent-green" size={20} />
                              <h4 className="font-semibold text-primary">Horaires d'ouverture</h4>
                            </div>
                            <input
                              type="text"
                              value={demoData.hours}
                              className="w-full p-2 border border-gray-300 rounded-lg"
                              readOnly
                            />
                          </div>
                        </div>

                        {/* Save Button */}
                        <div className="mt-6 text-center">
                          <button className="bg-accent-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105">
                            Sauvegarder les modifications
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Version */}
              {viewMode === 'mobile' && (
                <div className="p-8 flex justify-center">
                  <div className="w-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    {/* Mobile Screen */}
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* Mobile Header */}
                      <div className="bg-accent-green text-white p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold">VM</span>
                          </div>
                          <span className="font-semibold">Admin Mobile</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Mobile Content */}
                      <div className="p-4 space-y-4">
                        {/* Quick Actions Cards */}
                        <div className={`bg-gradient-to-r from-accent-green/10 to-highlight-brown/10 p-4 rounded-xl border-2 transition-all duration-300 ${
                          isEditing === 'title' ? 'border-accent-green scale-105' : 'border-transparent'
                        }`}>
                          <div className="flex items-center space-x-3 mb-2">
                            <Edit className="text-accent-green" size={20} />
                            <span className="font-semibold text-primary text-sm">Modifier votre page</span>
                          </div>
                          <div className="text-xs text-primary/70 mb-2">{demoData.title}</div>
                          <button className="bg-accent-green text-white px-3 py-1 rounded-full text-xs">
                            Éditer
                          </button>
                        </div>

                        <div className={`bg-gradient-to-r from-highlight-brown/10 to-sand-light/20 p-4 rounded-xl border-2 transition-all duration-300 ${
                          isEditing === 'image' ? 'border-accent-green scale-105' : 'border-transparent'
                        }`}>
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="flex space-x-1">
                              <div className="w-6 h-6 bg-highlight-brown/20 rounded flex items-center justify-center">
                                📷
                              </div>
                              <div className="w-6 h-6 bg-highlight-brown/20 rounded flex items-center justify-center">
                                🖼️
                              </div>
                            </div>
                            <span className="font-semibold text-primary text-sm">Ajouter une photo</span>
                          </div>
                          <div className="flex space-x-2">
                            <button className="bg-highlight-brown text-white px-3 py-1 rounded-full text-xs">
                              Caméra
                            </button>
                            <button className="bg-highlight-brown/20 text-highlight-brown px-3 py-1 rounded-full text-xs">
                              Galerie
                            </button>
                          </div>
                        </div>

                        <div className={`bg-gradient-to-r from-primary/10 to-accent-green/10 p-4 rounded-xl border-2 transition-all duration-300 ${
                          isEditing === 'price' ? 'border-accent-green scale-105' : 'border-transparent'
                        }`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <ShoppingCart className="text-primary" size={16} />
                              <span className="font-semibold text-primary text-sm">Prix et produits</span>
                            </div>
                            <span className="text-accent-green font-bold text-sm">{demoData.price}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 h-1 bg-accent-green/20 rounded-full">
                              <div className="h-1 bg-accent-green rounded-full w-3/4"></div>
                            </div>
                            <span className="text-xs text-primary/70">Swipe pour modifier</span>
                          </div>
                        </div>

                        {/* Notification */}
                        {demoData.notification && (
                          <div className="bg-green-50 border border-green-200 p-3 rounded-xl">
                            <div className="flex items-center space-x-2">
                              <Check className="text-green-600" size={16} />
                              <span className="text-green-800 text-sm">{demoData.notification}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Mobile Bottom Navigation */}
                      <div className="bg-gray-50 p-4 border-t">
                        <div className="flex justify-around">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-accent-green rounded-lg flex items-center justify-center mb-1">
                              <span className="text-white text-xs">🏠</span>
                            </div>
                            <span className="text-xs text-accent-green font-medium">Accueil</span>
                          </div>
                          <div className="text-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-gray-600 text-xs">📝</span>
                            </div>
                            <span className="text-xs text-gray-600">Contenu</span>
                          </div>
                          <div className="text-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-gray-600 text-xs">📸</span>
                            </div>
                            <span className="text-xs text-gray-600">Photos</span>
                          </div>
                          <div className="text-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-gray-600 text-xs">🛒</span>
                            </div>
                            <span className="text-xs text-gray-600">Boutique</span>
                          </div>
                          <div className="text-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-gray-600 text-xs">👤</span>
                            </div>
                            <span className="text-xs text-gray-600">Profil</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Demo Annotations */}
          <div className="p-6 bg-gradient-to-r from-sand-light/20 to-beige-gold/20 border-t">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                <span className="text-sm text-primary/80">Interface personnalisée selon votre secteur</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-highlight-brown rounded-full animate-pulse"></div>
                <span className="text-sm text-primary/80">Formation incluse pour maîtriser ces outils</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-primary/80">Mis à jour automatiquement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Résultat garanti :</h3>
            <p className="text-primary/80 text-lg">
              Vous gérez votre site en <span className="font-bold text-accent-green">totale autonomie</span> 
              - Plus jamais besoin de développeur pour vos mises à jour !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumInterfaceDemo;