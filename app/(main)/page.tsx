// app/(default)/page.tsx
'use client';

import { useEffect } from 'react';
import { useThreeJs } from '../context/ThreeJsContext';
import Hero from '../../components/hero';
import Features from '../../components/features';
import Features02 from '../../components/features-02';
import FeaturedProjects from '../../components/featured-projects';
import Faqs from '../../components/faqs';
import TestimonialsCarousel from '../../components/testimonials';
import Cta from '../../components/cta';
import Footer from '../../components/ui/footer';

export default function Home() {
  const { isInitialized } = useThreeJs();

  useEffect(() => {
    // You can add section-specific three.js effects here if needed
    if (isInitialized) {
      // For example, you could change particle density or color when scrolling to specific sections
      console.log('Three.js background is initialized and ready');
    }
  }, [isInitialized]);

  return (
    <>
      <Hero />
      <Features />
      <Features02 />
      <FeaturedProjects />
      <Faqs />
      <TestimonialsCarousel />
      <Cta />
      <Footer/>
    </>
  );
}