'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // 헤더 높이
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <button onClick={scrollToTop} aria-label="홈으로 이동" className="flex items-center cursor-pointer">
              <Image
                src="/asset/only-logo.png"
                alt="ADIT Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                priority
              />
            </button>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm text-gray-300 hover:text-primary font-medium transition-colors"
            >
              서비스
            </button>
            <button 
              onClick={() => scrollToSection('media')}
              className="text-sm text-gray-300 hover:text-primary font-medium transition-colors"
            >
              매체 소개
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-sm text-gray-300 hover:text-primary font-medium transition-colors"
            >
              클라이언트
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all font-bold text-sm shadow-lg transform hover:scale-105"
            >
              문의하기
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-black/95 backdrop-blur-md rounded-lg p-4 mt-2">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-primary font-medium transition-colors py-2"
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection('media')}
              className="block w-full text-left text-gray-300 hover:text-primary font-medium transition-colors py-2"
            >
              매체 소개
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="block w-full text-left text-gray-300 hover:text-primary font-medium transition-colors py-2"
            >
              클라이언트
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all font-bold shadow-lg transform hover:scale-105"
            >
              문의하기
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
