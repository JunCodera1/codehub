'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Illustration from '../public/images/features-illustration-02.svg';
import FeaturesImage from '../public/images/features-image.svg';
import * as THREE from 'three';

export default function Features02() {
  const [category, setCategory] = useState<string>('1');
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    animationFrameId: number | null;
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Three.js scene
    const container = canvasRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create material with indigo color to match the theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x4F46E5, // Indigo color
      transparent: true,
      opacity: 0.8
    });

    // Create points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    camera.position.z = 3;

    // Animation function
    const animate = () => {
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;
      renderer.render(scene, camera);
      const animationFrameId = window.requestAnimationFrame(animate);
      
      if (sceneRef.current) {
        sceneRef.current.animationFrameId = animationFrameId;
      }
    };

    // Handle window resize
    const handleResize = () => {
      if (container) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();

    // Store scene references for cleanup
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      animationFrameId: null
    };

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current?.animationFrameId) {
        window.cancelAnimationFrame(sceneRef.current.animationFrameId);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative border-t border-slate-300">
      {/* Three.js background canvas */}
      <div 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />
      
      {/* Original gradient (can keep or remove) */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-indigo-700 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      
      {/* Illustration */}
      <div
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="453"
          alt="Features 02 Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-sans">
              Designed for all creators and collaborators
            </h2>
          </div>

          {/* Box */}
          <div className="bg-indigo-200 drop-shadow-md bg-opacity-60 rounded overflow-hidden backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '1'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('1')}
                    >
                      Everyone
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '2'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('2')}
                    >
                      Freelancers
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '3'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('3')}
                    >
                      Organizations
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className={`${category !== '1' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Join. Learn. Build together.
                    </h3>
                    <div className="text-lg text-slate-600">
                      Whether you're new or experienced, our platform helps you connect, collaborate, and grow with a supportive global community. Find your tribe and start creating today.
                    </div>
                  </div>
                  <div className={`${category !== '2' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Find projects. Get noticed.
                    </h3>
                    <div className="text-lg text-slate-600">
                      Freelancers can browse opportunities, build portfolios, and collaborate with others on exciting real-world projects. Showcase your talent, build your network, and get hired.
                    </div>
                  </div>
                  <div className={`${category !== '3' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Empower your teams with talent
                    </h3>
                    <div className="text-lg text-slate-600">
                      Organizations can source talent, manage distributed teams, and drive innovation through open collaboration. Build impactful products with the best minds worldwide.
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={FeaturesImage}
                className="md:max-w-none"
                width="480"
                height="414"
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}