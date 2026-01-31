'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: '상담 및 분석',
    description: '전문가와의 1:1 상담을 통해 마케팅 니즈와 목표를 명확히 파악하고, 현장의 특성과 시장 흐름을 종합적으로 분석합니다. 이를 바탕으로 최적화된 마케팅 방향과 전략을 도출합니다.'
  },
  {
    step: '02',
    title: '데이터 기반 전략 수립',
    description: '빅데이터를 활용해 시장 흐름과 소비자 행동을 정밀하게 분석하고 연령, 지역, 관심사, 행동 패턴 등 다양한 데이터를 종합적으로 검토해 타겟팅 전략을 수립합니다.'
  },
  {
    step: '03',
    title: '실행 및 모니터링',
    description: '제안된 전략을 기반으로 성과 중심의 최적화된 마케팅 캠페인을 실행하고, 집행 이후에도 모든 주요 성과 지표를 면밀히 추적·관리합니다.'
  },
  {
    step: '04',
    title: '성과 분석 및 프리미엄 리포트',
    description: '캠페인 운영 과정에서 획득한 모든 데이터를 종합적으로 분석해, 성과 흐름과 개선 포인트를 명확히 도출합니다. 이를 바탕으로 실행 결과를 한눈에 확인할 수 있는 차별화된 프리미엄 성과 리포트를 제공합니다.'
  }
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <motion.div 
          className="text-left md:text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 break-keep">
            성과를 만드는 마케팅은<br />
            <span className="text-primary">과정부터 다릅니다</span>
          </h2>
          <p className="text-xl text-gray-400 break-keep">
            체계적인 마케팅 프로세스를 확인해보세요
          </p>
        </motion.div>

        {/* 프로세스 타임라인 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* 연결선 (데스크톱에서만) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent -translate-x-4 z-0" />
                )}

                <motion.div 
                  className="relative z-10 p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 h-full"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* 스텝 번호 */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>

                  {/* 타이틀 */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 break-keep">
                    {process.title}
                  </h3>

                  {/* 설명 */}
                  <p className="text-gray-400 leading-relaxed text-sm break-keep">
                    {process.description}
                  </p>

                  {/* 하단 강조선 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-left md:text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-6 break-keep">
            각 프로젝트의 특성에 맞춰 프로세스를 유연하게 조정합니다
          </p>
          <motion.button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            프로세스 상담하기
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
