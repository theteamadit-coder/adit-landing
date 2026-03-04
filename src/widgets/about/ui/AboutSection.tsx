'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface AboutItem {
  icon: string;
  title: string;
  description: string;
}

const aboutItems: AboutItem[] = [
  {
    icon: '',
    title: '경험 많은 전문 마케터',
    description: '전략부터 실행까지 책임집니다. 성과에 집중하는 전문가와 함께하세요.',
  },
  {
    icon: '',
    title: '결과로 보여드립니다',
    description: '저희는 대표님의 성공적인 마케팅을 위해 존재합니다.',
  },
  {
    icon: '',
    title: '정직을 바탕으로',
    description: '신뢰와 성과를 동시에! 투명하고 정직한 마케팅 파트너입니다.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="about-section" className="relative py-24 md:py-32 overflow-hidden">
      {/* 배경 이미지 — 실크 웨이브 텍스처 */}
      <div className="absolute inset-0">
        <Image
          src="/asset/background/sec6-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          className="text-left md:text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 rounded-full bg-primary/20 text-primary font-medium border border-primary/50 mb-6">
            직방 · 호갱노노 공식 광고 대행사
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6 break-keep">
            정직을 바탕으로 <span className="text-primary">신뢰와 성과</span>를 동시에!
          </h2>
          <p className="text-xl text-gray-600 break-keep">
            대한민국 20~70세 부동산 관심층의 절반이 사용하는 플랫폼
          </p>
        </motion.div>

        {/* 3가지 핵심 가치 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* 배경 그라데이션 */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-left md:text-center">
                {/* 타이틀 */}
                <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4 group-hover:text-primary transition-colors duration-300 break-keep">
                  {item.title}
                </h3>

                {/* 설명 */}
                <p className="text-gray-600 leading-relaxed break-keep">{item.description}</p>
              </div>

              {/* 하단 강조선 */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
