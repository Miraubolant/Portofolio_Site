import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { ContactFormData } from '../types';
import { trackFormSubmission } from '../utils/api';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/myzpezbg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: `Nouveau projet autonome - ${data.name}`,
          _replyto: data.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        trackFormSubmission('contact', true);
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setSubmitStatus('error');
      trackFormSubmission('contact', false);
      console.error('Erreur formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
      <h3 className="text-2xl font-bold text-primary mb-6">Parlons de votre projet</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
          <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
          <div>
            <p className="text-green-800 font-medium">Message envoyé avec succès !</p>
            <p className="text-green-700 text-sm">Je vous réponds sous 48h max.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
          <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
          <div>
            <p className="text-red-800 font-medium">Erreur lors de l'envoi</p>
            <p className="text-red-700 text-sm">Contactez-moi directement par WhatsApp ou email.</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { 
              required: 'Le nom est requis',
              minLength: { value: 2, message: 'Minimum 2 caractères' }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors ${
              errors.name ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Votre nom"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email professionnel *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'L\'email est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email invalide'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="votre@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="project" className="block text-sm font-medium text-primary mb-2">
            Type de projet *
          </label>
          <select
            id="project"
            {...register('project', { required: 'Veuillez choisir un type de projet' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors ${
              errors.project ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Choisir un type</option>
            <option value="vitrine">Site vitrine autonome</option>
            <option value="ecommerce">Boutique e-commerce autonome</option>
            <option value="webapp">Application web autonome</option>
            <option value="autre">Autre projet</option>
          </select>
          {errors.project && (
            <p className="mt-1 text-sm text-red-600">{errors.project.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="autonomyLevel" className="block text-sm font-medium text-primary mb-2">
            Niveau technique actuel *
          </label>
          <select
            id="autonomyLevel"
            {...register('autonomyLevel', { required: 'Veuillez évaluer votre niveau' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors ${
              errors.autonomyLevel ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Évaluer mon niveau</option>
            <option value="debutant">Débutant - J'ai besoin de formation complète</option>
            <option value="intermediaire">Intermédiaire - Quelques bases informatiques</option>
            <option value="avance">Avancé - Je veux juste l'autonomie</option>
          </select>
          {errors.autonomyLevel && (
            <p className="mt-1 text-sm text-red-600">{errors.autonomyLevel.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-primary mb-2">
            Délai souhaité *
          </label>
          <select
            id="timeline"
            {...register('timeline', { required: 'Veuillez choisir un délai' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors ${
              errors.timeline ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Choisir un délai</option>
            <option value="urgent">Urgent (1 semaine)</option>
            <option value="rapide">Rapide (2 semaines)</option>
            <option value="standard">Standard (3-4 semaines)</option>
            <option value="flexible">Flexible</option>
          </select>
          {errors.timeline && (
            <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
            Détails du projet (optionnel)
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors resize-none"
            placeholder="Décrivez votre projet, vos besoins spécifiques..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-accent-green to-highlight-brown text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Loader className="animate-spin" size={20} />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Démarrer mon projet autonome</span>
            </>
          )}
        </button>
      </form>

      <p className="text-primary/70 text-xs text-center mt-4">
        Formation incluse • Support illimité • Garantie autonomie • Réponse sous 48h max
      </p>
    </div>
  );
};

export default ContactForm;