'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinkClass = "text-sm text-left hover:text-primary transition-colors cursor-pointer";

  return (
    <footer className="bg-black/95 text-gray-300 border-t border-white/10">
      {/* 메인 푸터 */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
          {/* 푸터 네비게이션 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div>
              <h4 className="text-white font-semibold mb-4">서비스</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('services')} className={navLinkClass}>타겟 메시징</button></li>
                <li><button onClick={() => scrollToSection('services')} className={navLinkClass}>앱 패키지</button></li>
                <li><button onClick={() => scrollToSection('services')} className={navLinkClass}>인플루언서 광고</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">매체</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('media')} className={navLinkClass}>직방 &amp; 호갱노노</button></li>
                <li><button onClick={() => scrollToSection('media')} className={navLinkClass}>카드사</button></li>
                <li><button onClick={() => scrollToSection('media')} className={navLinkClass}>통신사</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">회사</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about-section')} className={navLinkClass}>애드잇 소개</button></li>
                <li><button onClick={() => scrollToSection('clients')} className={navLinkClass}>클라이언트</button></li>
                <li><button onClick={() => scrollToSection('clients')} className={navLinkClass}>집행사례</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">지원</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('contact')} className={navLinkClass}>문의하기</button></li>
                <li><button onClick={scrollToTop} className={navLinkClass}>개인정보처리방침</button></li>
                <li><button onClick={scrollToTop} className={navLinkClass}>이용약관</button></li>
              </ul>
            </div>
          </div>

          {/* 회사 정보 */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold mb-6">
              주식회사 <span className="text-primary">애드잇</span>
            </h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">상호명</span>
                <span>: (주)애드잇</span>
              </p>
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">대표</span>
                <span>: 송영주</span>
              </p>
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">주소</span>
                <span>: 서울특별시 강남구 언주로 129길 6, 902호 3</span>
              </p>
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">고객센터</span>
                <span className="text-primary">: 02-6949-5032</span>
              </p>
              <p>
                <span className="inline-block min-w-[100px] font-semibold text-gray-400">E-mail</span>
                <span className="text-primary">: team@ad-it.co.kr</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 카피라이트 */}
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Copyright ⓒ 2026 애드잇 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
