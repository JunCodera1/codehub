"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../public/images/hero-image.png';
import { TypeAnimation } from 'react-type-animation';
import * as THREE from 'three';

interface SceneRef {
  scene: THREE.Scene | null;
  camera: THREE.PerspectiveCamera | null;
  renderer: THREE.WebGLRenderer | null;
  animationFrameId: number | null;
  particles: THREE.Points | null;
  raycaster: THREE.Raycaster | null;
  mouse: THREE.Vector2 | null;
  imageTexture: THREE.Texture | null;
  imageMesh: THREE.Mesh | null;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sceneRef = useRef<SceneRef>({
    scene: null,
    camera: null,
    renderer: null,
    animationFrameId: null,
    particles: null,
    raycaster: null,
    mouse: null,
    imageTexture: null,
    imageMesh: null,
  });

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    
    // Mouse tracking for interactivity
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(0.5, 0.5);
    
    // Particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2500;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    // Create particles in a circular formation around the center
    for (let i = 0; i < particlesCount; i++) {
      // Position
      const i3 = i * 3;
      const radius = 5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      
      posArray[i3] = radius * Math.sin(theta) * Math.cos(phi);
      posArray[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      posArray[i3 + 2] = radius * Math.cos(theta);
      
      // Color - gradient from indigo to orange/red
      const colorFactor = Math.random();
      colorArray[i3] = 0.5 + colorFactor * 0.5; // R: from medium to high (orange/red)
      colorArray[i3 + 1] = 0.2 + colorFactor * 0.3; // G: low to medium
      colorArray[i3 + 2] = 0.8 - colorFactor * 0.5; // B: high to medium (indigo to less blue)
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Store references early so they're available to event handlers
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      raycaster,
      mouse,
      imageTexture: null,
      imageMesh: null,
      animationFrameId: null
    };
    
    // Load hero image as a texture for 3D
    const textureLoader = new THREE.TextureLoader();
    // Convert imported Next.js image to URL string that Three.js can use
    const imageUrl = HeroImage.src;
    
    textureLoader.load(
      imageUrl,
      (texture) => {
        const imageTexture = texture;
        const imageAspect = texture.image.width / texture.image.height;
        
        // Create slightly curved plane for the image
        const planeGeometry = new THREE.PlaneGeometry(4 * imageAspect, 4, 20, 20);
        
        // Add subtle curve to the plane
        const positionAttribute = planeGeometry.attributes.position;
        for (let i = 0; i < positionAttribute.count; i++) {
          const x = positionAttribute.getX(i);
          const z = positionAttribute.getZ(i);
          // Apply a slight curve based on x position
          positionAttribute.setZ(i, z + 0.1 * Math.sin(x * 0.5));
        }
        
        const planeMaterial = new THREE.MeshBasicMaterial({ 
          map: texture,
          transparent: true,
        });
        
        const imageMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        imageMesh.position.z = -1;
        scene.add(imageMesh);
        
        // Update references with image-related objects
        sceneRef.current.imageTexture = imageTexture;
        sceneRef.current.imageMesh = imageMesh;
        
        setImageLoaded(true);
      }
    );
    
    // Animation loop
    const animate = () => {
      const { particles, raycaster, camera, mouse, scene, renderer, imageMesh } = sceneRef.current;
      
      if (!particles || !raycaster || !camera || !mouse || !scene || !renderer) return;
      
      // Rotate particles slowly
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0008;
      
      // Make particles react to mouse position
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(particles);
      
      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object as THREE.Points;
        if (intersectedObject.geometry.attributes.color && intersectedObject.geometry.attributes.position) {
          const color = intersectedObject.geometry.attributes.color;
          const position = intersectedObject.geometry.attributes.position;
          
          for (let i = 0; i < position.count; i++) {
            // Amplify color of particles near mouse pointer
            const i3 = i * 3;
            const x = position.array[i3];
            const y = position.array[i3 + 1];
            
            const mouseX = mouse.x * 5; // scale to scene coordinates
            const mouseY = mouse.y * 5;
            
            const distance = Math.sqrt(
              Math.pow(x - mouseX, 2) + 
              Math.pow(y - mouseY, 2)
            );
            
            if (distance < 1) {
              // Enhance color of particles near mouse
              color.array[i3] = Math.min(1, color.array[i3] + 0.2);
              color.array[i3 + 1] = Math.min(1, color.array[i3 + 1] + 0.1);
            }
          }
          color.needsUpdate = true;
        }
      }
      
      // Gently animate the image if loaded
      if (imageMesh) {
        imageMesh.rotation.y = Math.sin(Date.now() * 0.0005) * 0.05;
        imageMesh.position.y = Math.sin(Date.now() * 0.001) * 0.05;
      }
      
      renderer.render(scene, camera);
      const animationFrameId = window.requestAnimationFrame(animate);
      sceneRef.current.animationFrameId = animationFrameId;
    };
    
    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      if (sceneRef.current.mouse) {
        // Convert mouse position to normalized device coordinates
        sceneRef.current.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        sceneRef.current.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }
    };
    
    // Handle window resize
    const handleResize = () => {
      const { camera, renderer, imageMesh, imageTexture } = sceneRef.current;
      
      if (container && camera && renderer) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        // Also adjust image size when window is resized
        if (imageMesh && imageTexture) {
          const imageAspect = imageTexture.image.width / imageTexture.image.height;
          imageMesh.scale.set(width / 800 * imageAspect, width / 800, 1);
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current.animationFrameId) {
        window.cancelAnimationFrame(sceneRef.current.animationFrameId);
      }
      
      // Dispose of Three.js resources
      if (sceneRef.current.particles) {
        const particles = sceneRef.current.particles;
        if (particles.geometry) particles.geometry.dispose();
        if (particles.material) {
          // Handle single material case
          if (particles.material instanceof THREE.Material) {
            particles.material.dispose();
          } 
          // Handle array of materials case
          else if (Array.isArray(particles.material)) {
            particles.material.forEach(material => material.dispose());
          }
        }
        if (sceneRef.current.scene) {
          sceneRef.current.scene.remove(particles);
        }
      }
      
      if (sceneRef.current.imageMesh) {
        const imageMesh = sceneRef.current.imageMesh;
        if (imageMesh.geometry) imageMesh.geometry.dispose();
        if (imageMesh.material) {
          // Handle single material case
          if (imageMesh.material instanceof THREE.Material) {
            if ((imageMesh.material as THREE.MeshBasicMaterial).map) {
              (imageMesh.material as THREE.MeshBasicMaterial).map?.dispose();
            }
            imageMesh.material.dispose();
          } 
          // Handle array of materials case
          else if (Array.isArray(imageMesh.material)) {
            imageMesh.material.forEach(material => {
              if ((material as THREE.MeshBasicMaterial).map) {
                (material as THREE.MeshBasicMaterial).map?.dispose();
              }
              material.dispose();
            });
          }
        }
        if (sceneRef.current.scene) {
          sceneRef.current.scene.remove(imageMesh);
        }
      }
    };
  }, []);
  
  return (
    <section className="relative overflow-hidden">
      {/* Three.js canvas - absolute positioned to cover the hero section */}
      <div ref={containerRef} className="absolute inset-0 -z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl mb-6 h2 font-sans" data-aos="fade-up">
              The first Hub for{' '}
              <TypeAnimation
                sequence={[
                  'Developers', 2000,
                  'Designers', 2000,
                  'Creators', 2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="bg-gradient-to-tr from-orange-500 to-red-500 bg-clip-text text-transparent"
              />
            </h1>
            <p className="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">
              Build your skills, connect with top companies, and grow your career in tech — all in one place.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                  href="/signup"
                >
                  Get Started Free
                </Link>
              </div>
              <div>
                <a
                  className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm"
                  href="#0"
                >
                  Read Docs
                </a>
              </div>
            </div>
          </div>
          
          {/* Hidden original image - ThreeJS will display the 3D version instead */}
          <div
            className={`pt-16 md:pt-20 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              className="mx-auto"
              src={HeroImage}
              width={920}
              height={518}
              alt="Hero"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}