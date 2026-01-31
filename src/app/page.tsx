import { HeroSection } from '@/widgets/hero';
import { AboutSection } from '@/widgets/about';
import { ServicesSection } from '@/widgets/services';
import { MediaCoverageSection } from '@/widgets/media-coverage';
import { WhyUsSection } from '@/widgets/why-us';
import { ProcessSection } from '@/widgets/process';
import { PartnersSection } from '@/widgets/partners';
import { CtaSection } from '@/widgets/cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Us - 3가지 핵심 가치 */}
      <AboutSection />
      
      {/* 전략 및 상품 - 서비스 영역 */}
      <div id="services">
        <ServicesSection />
      </div>
      
      {/* 전략 및 상품 - 매체 커버리지 */}
      <div id="media">
        <MediaCoverageSection />
      </div>
      
      {/* 차별성 - 애드잇이 핏!한 이유 */}
      <WhyUsSection />
      
      {/* 프로세스 - 진행 프로세스 */}
      <ProcessSection />
      
      {/* 파트너스 - 클라이언트 & 집행사례 */}
      <div id="clients">
        <PartnersSection />
      </div>
      
      {/* CTA - 고객 문의 */}
      <div id="contact">
        <CtaSection />
      </div>
    </main>
  );
}
