'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const partnerImages = [
  '아트보드 2.png',
  '아트보드 2 사본.png',
  '아트보드 2 사본 2.png',
  '아트보드 2 사본 3.png',
  '아트보드 2 사본 4.png',
  '아트보드 2 사본 5.png',
  '아트보드 2 사본 6.png',
  '아트보드 2 사본 7.png',
  '아트보드 2 사본 8.png',
  '아트보드 2 사본 9.png',
  '아트보드 2 사본 10.png',
  '아트보드 2 사본 11.png',
  '아트보드 2 사본 12.png',
  '아트보드 11.png',
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const firstRow = [...partnerImages, ...partnerImages, ...partnerImages];
  const secondRow = [...partnerImages, ...partnerImages, ...partnerImages];

  return (
    <section
      ref={ref}
      id="clients"
      className="relative py-24 md:py-32 bg-linear-to-br from-background via-primary/5 to-blue-950/20 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-left md:text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 break-keep">
            <span className="text-primary">애드잇</span>과 함께하는
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-300 break-keep">
            클라이언트 &amp; 파트너
          </p>
        </motion.div>

        {/* 무한 슬라이드 캐러셀 - 첫 번째 줄 (왼쪽으로) */}
        <div className="relative mb-8 overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1920] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' },
            }}
          >
            {firstRow.map((img, i) => (
              <div
                key={i}
                className="shrink-0 w-40 h-24 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-full">
                  <Image src={`/asset/partner/${img}`} alt={`Partner ${i + 1}`} fill className="object-contain" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 무한 슬라이드 캐러셀 - 두 번째 줄 (오른쪽으로) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [-1920, 0] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' },
            }}
          >
            {secondRow.map((img, i) => (
              <div
                key={i}
                className="shrink-0 w-40 h-24 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-full">
                  <Image src={`/asset/partner/${img}`} alt={`Partner ${i + 1}`} fill className="object-contain" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
