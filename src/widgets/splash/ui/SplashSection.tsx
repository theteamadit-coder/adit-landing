'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function SplashSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToContent = () => {
    const el = document.getElementById('about-section');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="splash-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* 왼쪽 절반 - 직방 */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative w-72 h-72 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px]"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <Image
            src="/asset/직방.png"
            alt="직방"
            fill
            className="object-contain brightness-110"
            priority
          />
        </motion.div>
      </div>

      {/* 오른쪽 절반 - 호갱노노 */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative w-72 h-72 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px]"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <Image
            src="/asset/호갱노노.png"
            alt="호갱노노"
            fill
            className="object-contain brightness-110"
            priority
          />
        </motion.div>
      </div>


      {/* 글로우 — 외곽 대형 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gray-400/10 blur-[100px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      />
      {/* 글로우 — 중형 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-80 rounded-full bg-white/10 blur-[60px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
        transition={{ duration: 1.2, delay: 0.45 }}
      />
      {/* 글로우 — 중앙 코어 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/15 blur-[40px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2 }}
        transition={{ duration: 1.0, delay: 0.6 }}
      />

      {/* 중앙 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* ADIT 로고 */}
        <motion.div
          className="relative w-40 h-40 md:w-56 md:h-56 mb-8"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(12px)' }}
          animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.8, filter: 'blur(12px)' }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <Image
            src="/asset/logo.png"
            alt="ADIT Logo"
            fill
            className="object-contain brightness-200 drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* 메인 텍스트 */}
        <motion.p
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          직방 · 호갱노노 공식 대행사
        </motion.p>

        {/* 서브 텍스트 */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mt-3 font-light tracking-wide"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          분양 광고의 새로운 기준
        </motion.p>

        {/* 스크롤 유도 */}
        <motion.button
          onClick={scrollToContent}
          className="mt-16 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-10 bg-linear-to-b from-gray-500 to-transparent group-hover:from-gray-300"
          />
        </motion.button>
      </div>

      {/* 하단 그라데이션 페이드 */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
