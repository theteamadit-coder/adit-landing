'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 인트로 동안 스크롤 비활성화
    document.body.style.overflow = 'hidden';

    // 애니메이션 완료 후 처리 (5초 후)
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 배경 */}
          <div className="absolute inset-0 bg-black" />

          {/* 왼쪽 절반 - 직방 이미지 */}
          <motion.div
            className="absolute left-0 top-0 w-1/2 h-full bg-black flex items-center justify-center overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ 
              exit: { 
                duration: 0.8, 
                ease: [0.43, 0.13, 0.23, 0.96] 
              } 
            }}
          >
            <motion.div
              className="relative w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
              initial={{ x: '-150%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              <Image
                src="/asset/직방.png"
                alt="직방"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* 오른쪽 절반 - 호갱노노 이미지 */}
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full bg-black flex items-center justify-center overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              exit: { 
                duration: 0.8, 
                ease: [0.43, 0.13, 0.23, 0.96] 
              } 
            }}
          >
            <motion.div
              className="relative w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
              initial={{ x: '150%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              <Image
                src="/asset/호갱노노.png"
                alt="호갱노노"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>


          {/* 중앙 로고 */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.8 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              opacity: { duration: 1, delay: 2 },
              filter: { duration: 1, delay: 2 },
              scale: { duration: 1, delay: 2 },
              exit: { duration: 0.5 }
            }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/asset/logo.png"
                alt="ADIT Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            
            {/* 로고 하단 텍스트 */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                애드잇
              </h1>
              <p className="text-base md:text-lg text-primary font-semibold mb-2">
                직방 · 호갱노노 공식 광고 대행사
              </p>
              <p className="text-sm md:text-base text-gray-400">
                분양 광고의 새로운 기준
              </p>
            </motion.div>
          </motion.div>

          {/* 빛 효과 */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ duration: 1.5, delay: 2.5 }}
            exit={{ opacity: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
