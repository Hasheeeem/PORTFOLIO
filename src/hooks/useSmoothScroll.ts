import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Simple CSS scroll behavior - Lenis causes lag
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};