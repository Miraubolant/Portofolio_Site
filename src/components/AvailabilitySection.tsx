import React, { useEffect, useState, useRef } from 'react';
import { Clock, Globe, MessageCircle, Mail, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AvailabilitySection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [currentTime, setCurrentTime] = useState(new Date());

  const timeZones = [
    { city: 'Paris', offset: 1, flag: '🇫🇷' },
    { city: 'New York', offset: -5, flag: '🇺🇸' },
    { city: 'Tokyo', offset: 9, flag: '🇯🇵' },
    { city: 'Sydney', offset: 11, flag: '🇦🇺' }
  ];

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getTimeForZone = (offset: number) => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const zoneTime = new Date(utc + (offset * 3600000));
    return zoneTime.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  const isBusinessHours = (offset: number) => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const zoneTime = new Date(utc + (offset * 3600000));
    const hour = zoneTime.getHours();
    return hour >= 8 && hour <= 20;
  };

  return (
    <section ref={elementRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-highlight-brown/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Disponible <span className="text-accent-green">maintenant</span> dans votre fuseau
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Service international 7j/7 24h/24 avec support formation inclus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* World Clock */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-sand-light/50 to-beige-gold/50 p-8 rounded-2xl">
              <div className="flex items-center justify-center mb-8">
                <Globe className="text-accent-green mr-3" size={36} />
                <h3 className="text-2xl font-bold text-primary">Horloge mondiale</h3>
              </div>

              <div className="space-y-4">
                {timeZones.map((zone, index) => (
                  <div
                    key={zone.city}
                    className={`flex items-center justify-between p-4 bg-white/70 rounded-xl transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{zone.flag}</span>
                      <span className="font-semibold text-primary">{zone.city}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-mono text-primary">
                        {getTimeForZone(zone.offset)}
                      </span>
                      <div className={`w-3 h-3 rounded-full ${
                        isBusinessHours(zone.offset) ? 'bg-green-500' : 'bg-red-400'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent-green/10 rounded-xl text-center">
                <Clock className="text-accent-green mx-auto mb-2" size={24} />
                <p className="text-primary font-medium">Support formation disponible 24h/24</p>
              </div>
            </div>
          </div>

          {/* Availability Features */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sand-light/50">
                <CheckCircle className="text-accent-green mb-4" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Réponse garantie sous 2h</h3>
                <p className="text-primary/80">
                  Quel que soit votre fuseau horaire, je m'adapte à votre planning pour assurer 
                  un support optimal et une formation efficace.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sand-light/50">
                <Globe className="text-highlight-brown mb-4" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Portée internationale</h3>
                <p className="text-primary/80">
                  Clients formés en France, Canada, Suisse, Belgique et dans le monde entier. 
                  Formation à distance optimisée pour tous les fuseaux.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sand-light/50">
                <MessageCircle className="text-accent-green mb-4" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Support formation inclus</h3>
                <p className="text-primary/80">
                  Après livraison, support illimité pour questions sur l'interface admin. 
                  WhatsApp, email, visio - le moyen qui vous convient.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/33123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href="mailto:victor@victormirault.com"
                  className="flex items-center justify-center space-x-2 bg-accent-green text-white p-4 rounded-xl hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail size={20} />
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilitySection;