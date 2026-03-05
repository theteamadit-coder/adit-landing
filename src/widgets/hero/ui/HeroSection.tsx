'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/asset/직방&호갱노노 상품소개서_2026.01Q.pdf';
    link.download = '직방&호갱노노 상품소개서_2026.01Q.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 — 실크 웨이브 텍스처 */}
      <div className="absolute inset-y-0 left-[-25%] right-[-25%] md:left-0 md:right-0">
        <Image
          src="/asset/background/sec6-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32">
        <motion.div
          className="max-w-5xl mx-auto text-left md:text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 메인 헤드라인 */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-heading leading-tight break-keep"
            variants={itemVariants}
          >
            <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              성과로 증명하는
            </span>
            <br />
            분양 마케팅!
          </motion.h1>

          {/* 서브 헤드라인 */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-8 font-light break-keep"
            variants={itemVariants}
          >
            빅데이터로 움직이는 광고 솔루션!
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto break-keep"
            variants={itemVariants}
          >
            애드잇은 빅데이터를 기반으로 한 타겟형 마케팅 전략으로 광고효과를 극대화합니다.
          </motion.p>

          <motion.div
            className="w-32 h-1 bg-linear-to-r from-transparent via-primary to-transparent mx-auto my-12"
            variants={itemVariants}
          ></motion.div>

          {/* 핵심 메시지 */}
          <motion.div className="max-w-4xl mx-auto mb-12" variants={itemVariants}>
            <p className="text-xl md:text-2xl text-heading font-semibold leading-relaxed mb-6 break-keep">
              불확실한 광고에 고민하셨나요?
              <br />
              <span className="text-primary">잘 되는 분양! 이유는 분명합니다.</span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed break-keep">
              성과 중심 마케팅, 정직하고 실행력 있는 광고 파트너
              <br />
              <span className="text-heading font-semibold">애드잇</span>과 함께하세요.
            </p>
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              무료 컨설팅 신청하기
            </motion.button>
            <motion.button
              onClick={handleDownload}
              className="bg-white border-2 border-gray-200 hover:border-primary/50 hover:bg-gray-50 text-gray-700 px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              상품소개서
            </motion.button>
          </motion.div>

          {/* 핵심 키워드 */}
          <motion.div className="pt-8" variants={itemVariants}>
            <div className="inline-flex gap-4 px-8 py-4 rounded-full bg-gray-100 border border-gray-300">
              <span className="text-primary font-bold">타깃</span>
              <span className="text-gray-600">·</span>
              <span className="text-primary font-bold">타이밍</span>
              <span className="text-gray-600">·</span>
              <span className="text-primary font-bold">효율</span>
            </div>
          </motion.div>

          {/* 스크롤 인디케이터 */}
          <motion.div
            className="pt-12 text-gray-600 text-sm animate-bounce"
            variants={itemVariants}
          >
            ↓ 자세히보기
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
