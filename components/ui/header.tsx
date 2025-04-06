'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';

export default function Header({ nav = true }: { nav?: boolean }) {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header className="absolute w-full z-30 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left section */}
          <div className="flex items-center gap-x-8">
            {/* Logo */}
            <Link className="block" href="/" aria-label="pancaronadev">
              <Image
                className="w-16 h-16 md:w-25 md:h-25" // đã phóng to lên gấp đôi
                src={Logo}
                width={200}
                height={200}
                alt="Logo"
              />
            </Link>

            {/* Navigation links */}
            {nav && (
              <nav className="hidden md:flex items-center gap-x-6">
                <Link href="/learn" className="text-slate-700 hover:text-indigo-500 font-medium transition-colors">
                  Learn
                </Link>
                <Link href="/catalog" className="text-slate-700 hover:text-indigo-500 font-medium transition-colors">
                  Catalog
                </Link>
                <div 
                  className="relative group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    ref={buttonRef}
                    className="text-slate-700 hover:text-indigo-500 font-medium flex items-center gap-x-1"
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  >
                    Resources
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    ref={dropdownRef}
                    className={`absolute bg-white shadow-lg rounded-lg p-4 min-w-[200px] mt-2 transition-all duration-200 ${isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}
                  >
                    <Link href="/blog" className="block py-2 px-4 hover:bg-slate-50 rounded transition-colors">Blog</Link>
                    <Link href="/docs" className="block py-2 px-4 hover:bg-slate-50 rounded transition-colors">Documentation</Link>
                    <Link href="/community" className="block py-2 px-4 hover:bg-slate-50 rounded transition-colors">Community</Link>
                  </div>
                </div>
              </nav>
            )}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-x-4">
            {nav ? (
              <>
                <Link
                  href="/signin"
                  className="text-slate-700 hover:text-indigo-500 font-medium hidden md:inline-block"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm group px-6 py-2.5 rounded-md font-medium"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <div className="h-8 w-8 rounded-full bg-slate-100" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}