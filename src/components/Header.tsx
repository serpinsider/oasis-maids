'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed w-full top-12 z-[70] bg-[rgba(31,31,31,0.95)] backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Oasis Maids"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu - Center (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/#services" 
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/#how-it-works" 
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/#areas" 
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              Areas We Serve
            </Link>
            <Link 
              href="/#faq" 
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="/#contact" 
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons - Right (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+14076892100" 
              className="text-[#CEC28D] hover:text-[#CEC28D]/80 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">(407) 689-2100</span>
            </a>
            <Link 
              href="/booking" 
              className="bg-[#CEC28D] hover:bg-[#CEC28D]/90 text-[#1F1F1F] px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
            >
              Book Online
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[rgba(31,31,31,0.98)] backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/#services" 
              className="block text-white/90 hover:text-white font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#how-it-works" 
              className="block text-white/90 hover:text-white font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="/#areas" 
              className="block text-white/90 hover:text-white font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Areas We Serve
            </Link>
            <Link 
              href="/#faq" 
              className="block text-white/90 hover:text-white font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/#contact" 
              className="block text-white/90 hover:text-white font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a 
                href="tel:+14076892100" 
                className="flex items-center text-[#CEC28D] hover:text-[#CEC28D]/80 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (407) 689-2100
              </a>
              <Link 
                href="/booking" 
                className="block bg-[#CEC28D] hover:bg-[#CEC28D]/90 text-[#1F1F1F] px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}