'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: '',
    title: '프리미엄 단지마커',
    subtitle: 'Hero Product',
    description: '앱 지도 메인 화면에 주변 단지 대비 압도적인 주목도로 최우선 노출',
    features: [
      '지도 검색 시 프리미엄 마커 노출',
      '시·군·구 단위 타겟팅',
      '팝업배너 + 단지 상단 배너',
      '프리미엄 조감도 & 액션버튼'
    ]
  },
  {
    icon: '',
    title: '분양상담사 PRO',
    subtitle: '리드 확보 전문',
    description: '단지 상세 화면에 분양상담사가 즉시 연결되어 빠른 고객 응대 실현',
    features: [
      '다이렉트 문의 인입',
      '최대 4개 매물 노출',
      '신규분양 매물 최상단',
      '상담 전환율 극대화'
    ]
  },
  {
    icon: '',
    title: '채널톡',
    subtitle: '정밀 타겟 메시지',
    description: '직방/호갱노노 공식 카카오톡 채널로 신뢰도 높은 메시지 발송',
    features: [
      '일반형: 200원/건',
      '반응형: 알림설정 유저 타겟',
      '서베이: 시장조사 & 데이터 수집',
      '비즈: 전국 공인중개사 DB'
    ]
  },
  {
    icon: '',
    title: '앱푸시',
    subtitle: '즉시 전환 유도',
    description: '현장 오픈, 1순위 공지 등 주요 분양일정에 맞춰 관심유저에게 직접 알림',
    features: [
      '기본형: 100원/건',
      '이미지형: 200원/건',
      '반응형: 알림받는 유저 타겟',
      '예상 CTR 4.0%'
    ]
  },
  {
    icon: '',
    title: '원데이 브랜드 패키지',
    subtitle: '프리미엄 솔루션',
    description: '스플래시 + 메인 팝업 배너로 브랜드 주목도와 노출량 극대화',
    features: [
      '멀티 지면 통합 운영',
      '유저당 하루 1회 이상 고정 노출',
      '높은 CTR & 유입 견인',
      '직방+호갱노노: 500만원'
    ]
  },
  {
    icon: '',
    title: '분양 정보 스페셜 DA',
    subtitle: '압도적 주목도',
    description: '분양 탭 메인 페이지 상단에 고정 노출되어 분양 전환 메시지 전달 극대화',
    features: [
      '분양 탭 상단 고정 노출',
      '5개 배너 상단 노출',
      '관심 유저 타겟팅',
      '1주: 250만원'
    ]
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-background" id="services">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <motion.div 
          className="text-left md:text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 break-keep">
            분양 현장 <span className="text-primary">시기에 맞춘</span><br />
            스마트 광고 솔루션
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8 break-keep">
            직방과 호갱노노의 강력한 광고 상품으로 분양 성과를 극대화합니다
          </p>
          
          {/* 3단계 전략 태그 */}
          <div className="flex flex-wrap justify-center gap-4">
            {['사전 마케팅 (빌드업)', '본 마케팅 (컨버전)', '사후 마케팅 (클로징)'].map((tag, i) => (
              <motion.div
                key={i}
                className={`px-6 py-3 rounded-full font-semibold ${
                  i === 0 ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  i === 1 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 서비스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer ${
                hoveredIndex === index ? 'scale-105 shadow-2xl shadow-primary/20' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* 배경 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* 타이틀 */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 break-keep">
                  {service.title}
                </h3>

                {/* 서브타이틀 */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                  {service.subtitle}
                </div>

                {/* 설명 */}
                <p className="text-gray-400 mb-6 leading-relaxed break-keep">
                  {service.description}
                </p>

                {/* 특징 리스트 */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 하단 강조선 */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* 하단 CTA */}
        <motion.div 
          className="text-left md:text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            서비스 상담 신청하기
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
