import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { subscribeToNewsletter, trackEvent } from '../utils/api';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Veuillez entrer un email valide');
      return;
    }

    setStatus('loading');
    
    try {
      // For now, we'll simulate the API call since we don't have backend yet
      // In production, this would call the actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Inscription réussie ! Vérifiez votre email.');
      setEmail('');
      
      // Track newsletter signup
      trackEvent('newsletter_signup', {
        email: email,
        source: 'website',
        timestamp: new Date().toISOString(),
      });
      
      // Auto-hide success message
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (error) {
      setStatus('error');
      setMessage('Erreur lors de l\'inscription. Réessayez plus tard.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-accent-green/10 to-highlight-brown/10 p-8 rounded-2xl">
      <div className="text-center mb-6">
        <Mail className="text-accent-green mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold text-primary mb-2">
          Newsletter <span className="text-accent-green">Autonomie</span>
        </h3>
        <p className="text-primary/80">
          Recevez mes conseils exclusifs pour votre autonomie digitale. 
          1 email par semaine, désabonnement en 1 clic.
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
          <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
          <p className="text-green-800">{message}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
          <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
          <p className="text-red-800">{message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            className="flex-1 px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-accent-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            {status === 'loading' ? (
              <>
                <Loader className="animate-spin" size={20} />
                <span>Inscription...</span>
              </>
            ) : (
              <span>S'abonner</span>
            )}
          </button>
        </div>
      </form>

      <p className="text-primary/60 text-sm mt-4 text-center">
        Pas de spam • Conseils pratiques • Désabonnement facile
      </p>
    </div>
  );
};

export default NewsletterSignup;