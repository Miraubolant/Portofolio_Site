import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';
import { trackWhatsAppClick, trackEmailClick } from '../utils/api';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Accueil', path: '/' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'processus', label: 'Processus', path: '/processus' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-accent-green to-highlight-brown rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">VM</span>
            </div>
            <div>
              <span className="font-bold text-xl text-primary relative inline-block">
                Victor Mirault
                <span 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-green to-highlight-brown transition-all duration-300 ease-out"
                  style={{ width: `${20 + scrollProgress * 80}%` }}
                ></span>
              </span>
              <p className="text-sm text-primary/70 mt-1">Sites autonomes express</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.path ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path 
                      ? 'text-accent-green' 
                      : 'text-primary hover:text-accent-green'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-accent-green' 
                      : 'text-primary hover:text-accent-green'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:victor@victormirault.com"
              onClick={trackEmailClick}
              className="flex items-center space-x-2 bg-accent-green text-white px-4 py-2 rounded-lg hover:bg-accent-green/90 transition-colors duration-200"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 py-4 shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {menuItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-left py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path 
                        ? 'text-accent-green' 
                        : 'text-primary hover:text-accent-green'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-accent-green' 
                        : 'text-primary hover:text-accent-green'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-sand-light">
                <a
                  href="https://wa.me/33123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:victor@victormirault.com"
                  onClick={trackEmailClick}
                  className="flex items-center justify-center space-x-2 bg-accent-green text-white px-4 py-3 rounded-lg hover:bg-accent-green/90 transition-colors duration-200"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;