// app/context/ThreeJsContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeJsContextProps {
  scene: THREE.Scene | null;
  camera: THREE.PerspectiveCamera | null;
  renderer: THREE.WebGLRenderer | null;
  isInitialized: boolean;
}

const ThreeJsContext = createContext<ThreeJsContextProps>({
  scene: null,
  camera: null,
  renderer: null,
  isInitialized: false,
});

export const useThreeJs = () => useContext(ThreeJsContext);

export const ThreeJsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    // Create container for Three.js canvas
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '-1';
    container.style.pointerEvents = 'none';
    container.style.opacity = '0.4';
    document.body.appendChild(container);
    containerRef.current = container;

    // Initialize Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create material with indigo color to match the theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x4F46E5, // Indigo color
      transparent: true,
      opacity: 0.8
    });

    // Create points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    camera.position.z = 5;

    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Animation function
    const animate = () => {
      if (particles) {
        particles.rotation.x += 0.0002;
        particles.rotation.y += 0.0002;
      }
      
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    setIsInitialized(true);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      if (containerRef.current && rendererRef.current?.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
      }

      // Clean up particle system
      if (particlesRef.current) {
        if (particlesRef.current.geometry) {
          particlesRef.current.geometry.dispose();
        }
        if (particlesRef.current.material) {
          (particlesRef.current.material as THREE.Material).dispose();
        }
        if (sceneRef.current) {
          sceneRef.current.remove(particlesRef.current);
        }
      }
    };
  }, []);

  const value = {
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer: rendererRef.current,
    isInitialized,
  };

  return (
    <ThreeJsContext.Provider value={value}>
      {children}
    </ThreeJsContext.Provider>
  );
};