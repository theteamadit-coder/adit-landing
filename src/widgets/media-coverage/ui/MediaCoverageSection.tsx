'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface MediaPlatform {
  name: string;
  category: string;
  icon: string;
  description: string;
  difficulty: '쉬움' | '보통' | '어려움';
  responseSpeed: '빠름' | '보통' | '느림';
  features: string[];
}

const mediaPlatforms: MediaPlatform[] = [
  {
    name: '삼성카드',
    category: '카드사',
    icon: '',
    description: '도급 순위 50위권 이내 일반분양 아파트',
    difficulty: '보통',
    responseSpeed: '빠름',
    features: [
      '발송 8일 전 신청 가능',
      '정밀 타겟팅',
      '높은 도달률'
    ]
  },
  {
    name: 'KB국민카드',
    category: '카드사',
    icon: '',
    description: '도급 순위 50위권 이내 일반분양 아파트',
    difficulty: '어려움',
    responseSpeed: '보통',
    features: [
      '발송 2주 전 신청',
      '오피스텔/상가 제외',
      '프리미엄 타겟층'
    ]
  },
  {
    name: 'SKT',
    category: '통신사',
    icon: '',
    description: '도급 순위 50위권 이내 일반분양/민간임대',
    difficulty: '보통',
    responseSpeed: '빠름',
    features: [
      '발송 1주 전 신청',
      '통신사 빅데이터',
      '위치 기반 타겟팅'
    ]
  },
  {
    name: '호갱노노',
    category: '앱',
    icon: '',
    description: '제한 없음',
    difficulty: '쉬움',
    responseSpeed: '빠름',
    features: [
      '발송 3일 전 신청',
      '부동산 관심 고객',
      '높은 전환율'
    ]
  },
  {
    name: '직방',
    category: '앱',
    icon: '',
    description: '제한 없음',
    difficulty: '보통',
    responseSpeed: '빠름',
    features: [
      '발송 3일 전 신청',
      '실거주 예정자',
      '채널톡 연동'
    ]
  },
  {
    name: '엘포인트',
    category: '멤버십',
    icon: '',
    description: '도급 순위 50위권 이내 일반분양/민간임대',
    difficulty: '어려움',
    responseSpeed: '보통',
    features: [
      '영업일+10일 편성',
      '지역주택조합 제외',
      '프리미엄 회원'
    ]
  }
];

export default function MediaCoverageSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const categories = ['전체', '카드사', '통신사', '앱', '멤버십'];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filteredPlatforms = selectedCategory === '전체' 
    ? mediaPlatforms 
    : mediaPlatforms.filter(platform => platform.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case '쉬움': return 'text-green-600';
      case '보통': return 'text-amber-600';
      case '어려움': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getSpeedColor = (speed: string) => {
    switch(speed) {
      case '빠름': return 'text-green-600';
      case '보통': return 'text-amber-600';
      case '느림': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section
      ref={ref}
      id="media"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/asset/background/woman-working.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* 헤더 */}
        <motion.div 
          className="text-left md:text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 rounded-full bg-white/20 text-white font-medium border border-white/40 mb-6">
            누가, 언제, 어떤 단지를 다시 보는가
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 break-keep">
            직방은 그 <span className="text-primary/90">타이밍을 알고</span> 있습니다
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 break-keep">
            <span className="text-white font-semibold">&apos;관심 → 탐색 → 비교 → 재고려&apos;</span>까지,<br />
            실제 행동 흐름을 분석해 시점별 맞춤 광고가 가능한 유일한 플랫폼입니다
          </p>
        </motion.div>

        {/* 카테고리 필터 */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md shadow-primary/30 border-2 border-primary'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-primary border border-gray-200'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* 매체 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredPlatforms.map((platform, index) => (
            <motion.div
              key={`${platform.name}-${index}`}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/40 hover:shadow-md transition-all duration-500 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* 이름 */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors duration-300 break-keep">
                  {platform.name}
                </h3>
                <span className="text-sm text-primary">
                  {platform.category}
                </span>
              </div>

              {/* 설명 */}
              <p className="text-gray-600 text-sm mb-4 break-keep">
                {platform.description}
              </p>

              {/* 난이도 & 응답속도 */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-600 mb-1">문안 검수 난이도</div>
                  <div className={`text-sm font-semibold ${getDifficultyColor(platform.difficulty)}`}>
                    {platform.difficulty}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">매체 피드백 속도</div>
                  <div className={`text-sm font-semibold ${getSpeedColor(platform.responseSpeed)}`}>
                    {platform.responseSpeed}
                  </div>
                </div>
              </div>

              {/* 특징 */}
              <ul className="space-y-2">
                {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* 하단 강조선 */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* 하단 메시지 */}
        <motion.div 
          className="text-left md:text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-blue-50 border border-blue-200">
            <p className="text-lg text-heading">
              <span className="font-bold text-primary">초정밀 타겟팅</span>으로 일반 광고 대비 <span className="font-bold text-primary">전환률 3배 증가</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
