'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const clients = [
  '현대건설', 'GS건설', '대림산업', 'DL이앤씨', 
  '포스코이앤씨', '롯데건설', '삼성물산', 'HDC현대산업개발',
  '호반건설', '대우건설', '코오롱글로벌', '한화건설'
];

const cases = [
  '[2024] 서울 강남 래미안 아파트',
  '[2024] 판교 테크노밸리 오피스텔',
  '[2023] 인천 청라 힐스테이트',
  '[2023] 수원 광교 푸르지오',
  '[2023] 용인 수지 자이',
  '[2023] 부산 해운대 센텀',
  '[2022] 대구 수성구 더샵',
  '[2022] 광주 첨단지구 e편한세상',
  '[2022] 세종시 나성동 아이파크',
  '[2022] 대전 둔산동 롯데캐슬',
  '[2021] 천안 아산 신세계백화점',
  '[2021] 창원 상남동 힐스테이트'
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="clients" className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* 클라이언트 & 파트너 */}
        <div className="mb-24">
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
              클라이언트 & 파트너
            </p>
          </motion.div>

          {/* 파트너 로고 그리드 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {clients.map((client, i) => (
              <motion.div 
                key={i} 
                className="group aspect-[3/2] bg-card rounded-xl hover:bg-card/80 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer flex items-center justify-center p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-400 group-hover:text-primary text-lg font-semibold transition-colors">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-left md:text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-gray-400 break-keep">
              그 외 <span className="text-primary font-semibold">100+ 클라이언트</span>와 함께하고 있습니다
            </p>
          </motion.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-20"></div>

        {/* 집행사례 */}
        <div>
          <motion.div 
            className="text-left md:text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-block bg-primary/20 text-primary border border-primary/30 px-8 py-4 rounded-full text-xl font-bold mb-8 backdrop-blur-sm">
              집행사례
            </div>
            <p className="text-2xl text-gray-300 break-keep">
              애드잇과 함께한 <strong className="text-white">성공적인 프로젝트</strong>들을 확인하세요
            </p>
          </motion.div>

          {/* 사례 그리드 */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {cases.map((caseItem, i) => (
              <motion.div 
                key={i} 
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-[3/4] bg-card border border-border rounded-xl mb-3 overflow-hidden hover:border-primary/50 transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-card to-card/50 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                        분양 완료
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-300 font-medium text-center group-hover:text-primary transition-colors">
                  {caseItem}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <motion.div 
            className="text-left md:text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              더 많은 사례 보기
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
