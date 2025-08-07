import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-green to-highlight-brown rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">VM</span>
                </div>
                <h3 className="text-xl font-bold">Victor Mirault</h3>
              </div>
              <p className="text-white/80 text-sm">
                Sites autonomes express avec formation incluse
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:victor@victormirault.com"
                className="flex items-center justify-center space-x-2 bg-accent-green px-4 py-2 rounded-lg hover:bg-accent-green/90 transition-colors duration-200 text-sm"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>

            {/* Info */}
            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm mb-1">
                Réponse sous 48h max
              </p>
              <p className="text-white/60 text-xs">
                Formation incluse • Support illimité
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="text-center">
            <p className="text-white/60 text-sm">
              © 2024 Victor Mirault • Sites autonomes express • Formation incluse
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;