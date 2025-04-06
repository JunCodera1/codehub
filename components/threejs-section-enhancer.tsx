// components/threejs-section-enhancer.tsx
'use client';

import { useEffect, useState } from 'react';
import { useThreeJs } from '../app/context/ThreeJsContext';

type SectionEffect = 'particles' | 'waves' | 'grid' | null;

interface ThreeJsSectionEnhancerProps {
  sectionId: string;
  effect?: SectionEffect;
  color?: string;
  intensity?: number;
  children: React.ReactNode;
}

export default function ThreeJsSectionEnhancer({
  sectionId,
  effect = null,
  color = '#4F46E5',
  intensity = 1,
  children,
}: ThreeJsSectionEnhancerProps) {
  const { isInitialized, scene } = useThreeJs();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isInitialized || !scene) return;

    // Set up intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }

    // Apply effect when section is visible
    if (isVisible) {
      // Here you could modify the Three.js scene based on the effect prop
      // Example: increase particle density, change colors, etc.
      console.log(`Section ${sectionId} is visible, applying ${effect} effect`);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isInitialized, scene, sectionId, effect, isVisible, color, intensity]);

  return (
    <section id={sectionId}>
      {children}
    </section>
  );
}

// Usage example:
// <ThreeJsSectionEnhancer sectionId="hero" effect="particles" color="#6366F1" intensity={1.5}>
//   <Hero />
// </ThreeJsSectionEnhancer>