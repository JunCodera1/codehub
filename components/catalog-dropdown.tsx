'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function CatalogDropdown() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  let timeoutId: NodeJS.Timeout | undefined;

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsCatalogOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsCatalogOpen(false);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsCatalogOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button 
        ref={buttonRef}
        className="text-slate-700 hover:text-indigo-500 font-medium flex items-center gap-x-1"
        onClick={() => setIsCatalogOpen(!isCatalogOpen)}
      >
        Catalog
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div 
        ref={dropdownRef}
        className={`absolute bg-white shadow-lg rounded-lg p-6 mt-2 transition-all duration-200 w-[800px] grid grid-cols-3 gap-4 z-50 ${isCatalogOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}
      >
        {/* Popular course topics */}
        <div className="col-span-1">
          <h3 className="font-semibold text-lg mb-3">Popular course topics</h3>
          <ul className="space-y-2">
            <li><Link href="/catalog/python" className="block py-1 hover:text-indigo-500">Python</Link></li>
            <li><Link href="/catalog/javascript" className="block py-1 hover:text-indigo-500">JavaScript</Link></li>
            <li><Link href="/catalog/html-css" className="block py-1 hover:text-indigo-500">HTML & CSS</Link></li>
            <li><Link href="/catalog/sql" className="block py-1 hover:text-indigo-500">SQL</Link></li>
            <li><Link href="/catalog/java" className="block py-1 hover:text-indigo-500">Java</Link></li>
            <li><Link href="/catalog/cpp" className="block py-1 hover:text-indigo-500">C++</Link></li>
          </ul>
        </div>
        
        {/* More topics */}
        <div className="col-span-1">
          <h3 className="font-semibold text-lg mb-3">More topics</h3>
          <ul className="space-y-2">
            <li><Link href="/catalog/csharp" className="block py-1 hover:text-indigo-500">C#</Link></li>
            <li><Link href="/catalog/c" className="block py-1 hover:text-indigo-500">C</Link></li>
            <li><Link href="/catalog/php" className="block py-1 hover:text-indigo-500">PHP</Link></li>
            <li><Link href="/catalog/r" className="block py-1 hover:text-indigo-500">R</Link></li>
            <li><Link href="/catalog/it" className="block py-1 hover:text-indigo-500">IT</Link></li>
            <li><Link href="/catalog/cybersecurity" className="block py-1 hover:text-indigo-500">Cybersecurity</Link></li>
          </ul>
        </div>
        
        {/* Learning paths */}
        <div className="col-span-1">
          <h3 className="font-semibold text-lg mb-3">Learning paths</h3>
          <ul className="space-y-2">
            <li><Link href="/catalog/cloud-computing" className="block py-1 hover:text-indigo-500">Cloud computing</Link></li>
            <li><Link href="/catalog/ai" className="block py-1 hover:text-indigo-500">AI</Link></li>
            <li><Link href="/catalog/web-development" className="block py-1 hover:text-indigo-500">Web development</Link></li>
            <li><Link href="/catalog/data-science" className="block py-1 hover:text-indigo-500">Data science</Link></li>
            <li><Link href="/catalog/web-design" className="block py-1 hover:text-indigo-500">Web design</Link></li>
            <li><Link href="/catalog/professional-skills" className="block py-1 hover:text-indigo-500">Professional skills</Link></li>
          </ul>
        </div>
        
        {/* Footer with explore all button */}
        <div className="col-span-3 mt-4 pt-4 border-t border-slate-200">
          <Link 
            href="/catalog" 
            className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
          >
            Explore all courses
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}