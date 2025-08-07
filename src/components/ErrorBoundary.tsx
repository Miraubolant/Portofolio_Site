import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erreur capturée par ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-sand-light to-beige-gold flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
            <AlertTriangle className="text-highlight-brown mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-primary mb-4">
              Oups ! Une erreur s'est produite
            </h2>
            <p className="text-primary/80 mb-6">
              Désolé, quelque chose s'est mal passé. Essayez de recharger la page.
            </p>
            <button
              onClick={this.handleReload}
              className="flex items-center justify-center space-x-2 bg-accent-green text-white px-6 py-3 rounded-lg hover:bg-accent-green/90 transition-colors duration-200 mx-auto"
            >
              <RefreshCw size={20} />
              <span>Recharger la page</span>
            </button>
            <p className="text-primary/60 text-sm mt-4">
              Si le problème persiste, contactez-moi via WhatsApp
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;