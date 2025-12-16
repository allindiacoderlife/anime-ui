import React from 'react';

import { Nav } from '@/components/docs/nav';
import Hero from '@/components/home/hero';
import { Features } from '@/components/home/features';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/home/footer';

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
