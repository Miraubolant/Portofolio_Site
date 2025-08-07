// API utilities for backend functionality

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.victormirault.com' 
  : 'http://localhost:3001';

// Newsletter subscription
export const subscribeToNewsletter = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, message: 'Erreur lors de l\'inscription' };
  }
};

// Analytics tracking
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      custom_parameter: properties,
    });
  }
  
  // Also track with custom analytics if needed
  console.log('Event tracked:', eventName, properties);
};

// Contact form analytics
export const trackFormSubmission = (formType: string, success: boolean) => {
  trackEvent('form_submission', {
    form_type: formType,
    success: success,
    timestamp: new Date().toISOString(),
  });
};

// Page view tracking
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_name: pageName,
    timestamp: new Date().toISOString(),
  });
};

// Lead scoring
export const trackLeadAction = (action: string, value: number = 1) => {
  trackEvent('lead_action', {
    action: action,
    value: value,
    timestamp: new Date().toISOString(),
  });
};

// WhatsApp click tracking
export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    source: 'website',
    timestamp: new Date().toISOString(),
  });
};

// Email click tracking
export const trackEmailClick = () => {
  trackEvent('email_click', {
    source: 'website',
    timestamp: new Date().toISOString(),
  });
};