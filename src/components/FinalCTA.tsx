import React, { useState } from 'react';
import { MessageCircle, Mail, CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-accent-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - CTA Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Votre site <span className="text-sand-light">autonome</span> rapidement ?
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={24} />
                <p className="text-lg">Site professionnel + interface admin simple</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={24} />
                <p className="text-lg">Formation personnalisée incluse</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={24} />
                <p className="text-lg">Support post-formation illimité</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-sand-light flex-shrink-0" size={24} />
                <p className="text-lg">Hébergement + maintenance inclus</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-3">Résultat garanti :</h3>
              <p className="text-lg text-white/90">
                Vous gérez votre site en <span className="font-bold text-sand-light">totale autonomie</span> 
                - Plus jamais besoin de développeur pour vos mises à jour !
              </p>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-accent-green text-white px-6 py-4 rounded-lg hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Direct</span>
              </a>
              <a
                href="mailto:victor@victormirault.com"
                className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Mail size={20} />
                <span>Email Pro</span>
              </a>
            </div>

            <p className="text-white/80 text-sm">
              Formation incluse jusqu'à votre autonomie complète • Réponse sous 48h max
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;