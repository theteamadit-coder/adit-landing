'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // 스크롤 그림자
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // splash-section이 뷰포트에 있으면 다크, 완전히 벗어나면 라이트
    const splashEl = document.getElementById('splash-section');
    if (splashEl) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsDark(entry.isIntersecting);
        },
        { threshold: 0 }
      );
      observer.observe(splashEl);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinkClass = `text-sm font-medium transition-colors duration-300 ${
    isDark
      ? 'text-gray-300 hover:text-white'
      : 'text-gray-600 hover:text-primary'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isDark
          ? 'bg-[#080808]/80'
          : 'bg-white/95'
      } ${isScrolled && !isDark ? 'shadow-sm' : 'shadow-none'}`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* 로고 */}
          <div className="shrink-0">
            <button onClick={scrollToTop} aria-label="홈으로 이동" className="flex items-center cursor-pointer">
              <Image
                src="/asset/only-logo.png"
                alt="ADIT Logo"
                width={40}
                height={40}
                className={`w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 ${
                  isDark ? 'brightness-200' : 'brightness-100'
                }`}
                priority
              />
            </button>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about-section')} className={navLinkClass}>
              소개
            </button>
            <button onClick={() => scrollToSection('services')} className={navLinkClass}>
              서비스
            </button>
            <button onClick={() => scrollToSection('media')} className={navLinkClass}>
              매체
            </button>
            <button onClick={() => scrollToSection('why-us-section')} className={navLinkClass}>
              Why ADIT
            </button>
            <button onClick={() => scrollToSection('clients')} className={navLinkClass}>
              클라이언트
            </button>
            <button onClick={() => scrollToSection('cases')} className={navLinkClass}>
              집행사례
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-5 py-2 rounded-full transition-all duration-300 font-bold text-sm shadow-md transform hover:scale-105 ${
                isDark
                  ? 'bg-white text-[#080808] hover:bg-gray-200'
                  : 'bg-primary hover:bg-primary/90 text-white'
              }`}
            >
              문의하기
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 space-y-1 backdrop-blur-md rounded-xl p-4 mt-2 shadow-lg border transition-all duration-300 ${
            isDark
              ? 'bg-[#111111]/98 border-white/10'
              : 'bg-white/98 border-gray-100'
          }`}>
            {[
              { label: '소개', id: 'about-section' },
              { label: '서비스', id: 'services' },
              { label: '매체', id: 'media' },
              { label: 'Why ADIT', id: 'why-us-section' },
              { label: '클라이언트', id: 'clients' },
              { label: '집행사례', id: 'cases' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left font-medium transition-colors py-2 ${
                  isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full px-6 py-3 rounded-full transition-all font-bold shadow-md transform hover:scale-105 ${
                  isDark
                    ? 'bg-white text-[#080808] hover:bg-gray-200'
                    : 'bg-primary hover:bg-primary/90 text-white'
                }`}
              >
                문의하기
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
