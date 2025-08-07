import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTitle, updateMetaDescription, updateMetaKeywords, pagesSEO } from '../utils/seo';

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    let pageKey: keyof typeof pagesSEO = 'home';

    // Determine page key based on pathname
    if (pathname === '/') pageKey = 'home';
    else if (pathname === '/services') pageKey = 'services';
    else if (pathname === '/portfolio') pageKey = 'portfolio';
    else if (pathname === '/processus') pageKey = 'processus';
    else if (pathname === '/blog') pageKey = 'blog';
    else if (pathname === '/contact') pageKey = 'contact';

    const seoData = pagesSEO[pageKey];

    // Update meta tags
    updateMetaTitle(seoData.title);
    updateMetaDescription(seoData.description);
    updateMetaKeywords(seoData.keywords);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);
};