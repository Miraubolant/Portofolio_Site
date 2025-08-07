// SEO utilities for better search engine optimization

export const updateMetaTitle = (title: string) => {
  document.title = title;
};

export const updateMetaDescription = (description: string) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};

export const updateMetaKeywords = (keywords: string) => {
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords);
  }
};

export const updateOpenGraphMeta = (title: string, description: string, image?: string) => {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');

  if (ogTitle) ogTitle.setAttribute('content', title);
  if (ogDescription) ogDescription.setAttribute('content', description);
  if (ogImage && image) ogImage.setAttribute('content', image);
};

export const generateStructuredData = (type: 'WebPage' | 'Service' | 'Article', data: any) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

// Page-specific SEO data
export const pagesSEO = {
  home: {
    title: 'Victor Mirault - Sites Web Autonomes | Interface Simple + Formation Incluse',
    description: 'Développeur web express spécialisé en sites autonomes. Interface admin simple + formation incluse = autonomie totale. Livraison rapide garantie.',
    keywords: 'site web autonome, interface admin simple, développeur web express, formation client incluse'
  },
  services: {
    title: 'Services Sites Autonomes - Victor Mirault | Formation Incluse',
    description: 'Sites vitrine, e-commerce et applications web avec interface admin simple. Formation personnalisée incluse pour votre autonomie complète.',
    keywords: 'services web autonomes, site vitrine autonome, e-commerce autonome, application web autonome'
  },
  portfolio: {
    title: 'Portfolio Sites Autonomes - Victor Mirault | 150+ Projets Livrés',
    description: 'Découvrez mes réalisations : sites autonomes avec interface admin simple. 150+ clients formés et autonomes dans la gestion de leur site.',
    keywords: 'portfolio sites autonomes, réalisations web autonomes, projets interface admin simple'
  },
  processus: {
    title: 'Ma Méthode pour Votre Autonomie - Victor Mirault | 6 Étapes',
    description: 'Découvrez ma méthode en 6 étapes pour vous rendre totalement autonome dans la gestion de votre site web. Formation incluse jusqu\'à maîtrise.',
    keywords: 'méthode autonomie web, processus développement autonome, formation site web'
  },
  blog: {
    title: 'Blog Autonomie Digitale - Victor Mirault | Conseils & Méthodes',
    description: 'Conseils, méthodes et retours d\'expérience pour votre autonomie web. Apprenez à gérer votre site comme un pro !',
    keywords: 'blog autonomie digitale, conseils gestion site web, autonomie web'
  },
  contact: {
    title: 'Contact Victor Mirault - Devis Site Autonome | Réponse 48h',
    description: 'Contactez-moi pour votre projet de site autonome. Devis personnalisé sous 48h. Formation incluse jusqu\'à votre autonomie complète.',
    keywords: 'contact développeur web autonome, devis site autonome, formation web incluse'
  }
};