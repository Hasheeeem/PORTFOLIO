import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience'; // NEW!
import { Expertise } from '@/components/sections/Expertise';
import { Projects } from '@/components/sections/Projects';
import { Zypher } from '@/components/sections/Zypher';
import { AIJourney } from '@/components/sections/AIJourney';
import { Contact } from '@/components/sections/Contact';
import { PagePreloader } from '@/components/ui/PagePreloader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple timeout for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hasheem — Developer, Founder & Creator</title>
        <meta name="description" content="Building next-gen digital products with AI, stunning design, and clean code. Founder of ZYPHER." />
      </Helmet>

      <PagePreloader isLoading={isLoading} />

      <Layout>
        <Hero />
        <About />
        <Experience /> {/* 🔥 NEW SECTION */}
        <Expertise />
        <Projects />
        <Zypher />
        <AIJourney />
        <Contact />
      </Layout>
    </>
  );
};

export default Index;