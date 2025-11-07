import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-black text-white antialiased">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};