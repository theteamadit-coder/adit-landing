'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// 파트너 이미지 목록
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

// 집행사례 목록
const executionCases = [
  { name: '가야 롯데캐슬 스카이엘', image: '가야 롯데캐슬 스카이엘.jpg' },
  { name: '검단동부센트레빌 에듀시티', image: '검단동부센트레빌 에듀시티.png' },
  { name: '광명 퍼스트 스위첸', image: '광명 퍼스트 스위첸.jpg' },
  { name: '광진 에떼르넬 비욘드', image: '광진 에떼르넬 비욘드.jpg' },
  { name: '김포 해링턴 플레이스', image: '김포 해링턴 플레이스.png' },
  { name: '동작이안', image: '동작이안.png' },
  { name: '동천역 트리너스', image: '동천역 트리너스.jpg' },
  { name: '두산위브더제니스 센트럴 천안', image: '두산위브더제니스 센트럴 천안.jpg' },
  { name: '라포르 미아더 퍼스트', image: '라포르 미아더 퍼스트.png' },
  { name: '문수로 코아루 에듀스카이', image: '문수로 코아루 에듀스카이.jpg' },
  { name: '베네스트 클러스터원 부발역', image: '베네스트 클러스터원 부발역.jpg' },
  { name: '부산 두산위브더제니스 오션시티', image: '부산 두산위브더제니스 오션시티.png' },
  { name: '씨티오씨엘8단지', image: '씨티오씨엘8단지.jpg' },
  { name: '안성공도센트럴카운티', image: '안성공도센트럴카운티.jpg' },
  { name: '엘리프 검단포레듀', image: '엘리프 검단포레듀.jpg' },
  { name: '영종도 디에트르 라메르', image: '영종도 디에트르 라메르.jpg' },
  { name: '왕숙 진접 메르디앙 더퍼스트', image: '왕숙 진접 메르디앙 더퍼스트.png' },
  { name: '울산 이안문수로', image: '울산 이안문수로.jpg' },
  { name: '인하대 수자인 로이센트', image: '인하대 수자인 로이센트.png' },
  { name: '진월더리브라포레', image: '진월더리브라포레.png' },
  { name: '천안 아이파트 시티 2단지', image: '천안 아이파트 시티 2단지.png' },
  { name: '청량리 범양레우스', image: '청량리 범양레우스.png' },
  { name: '청량리역 요진와이시티', image: '청량리역 요진와이시티.jpg' },
  { name: '탑석푸르지오 파크7', image: '탑석푸르지오 파크7.jpg' },
  { name: '판교 디오르나인', image: '판교 디오르나인.png' },
  { name: '평촌 롯데캐슬 르씨엘', image: '평촌 롯데캐슬 르씨엘.jpg' },
  { name: '평택브레인시티 한신더휴', image: '평택브레인시티 한신더휴.jpg' },
  { name: '해링턴 스퀘어 과천', image: '해링턴 스퀘어 과천.jpg' },
  { name: '화성 남양뉴타운 우미린 에듀하이', image: '화성 남양뉴타운 우미린 에듀하이.jpg' },
  { name: '힐스테이트 회룡역 파크뷰', image: '힐스테이트 회룡역 파크뷰.jpg' },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showAll, setShowAll] = useState(false);

  // 이미지를 3배 복제해서 무한 루프 효과
  const firstRow = [...partnerImages, ...partnerImages, ...partnerImages];
  const secondRow = [...partnerImages, ...partnerImages, ...partnerImages];

  // 처음에는 12개만 표시, 더보기 클릭 시 전체 표시
  const displayedCases = showAll ? executionCases : executionCases.slice(0, 12);

  return (
    <section
      ref={ref}
      id="clients"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
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

          {/* 무한 슬라이드 캐러셀 - 첫 번째 줄 (왼쪽으로) */}
          <div className="relative mb-8 overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {firstRow.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-24 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/asset/partner/${img}`}
                      alt={`Partner ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 무한 슬라이드 캐러셀 - 두 번째 줄 (오른쪽으로) */}
          <div className="relative mb-12 overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {secondRow.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-24 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/asset/partner/${img}`}
                      alt={`Partner ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="text-left md:text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-gray-400 break-keep">
              그 외 <span className="text-primary font-semibold">100+ 클라이언트</span>와 함께하고
              있습니다
            </p>
          </motion.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-20"></div>

        {/* 집행사례 */}
        <div id="cases">
          <motion.div
            className="text-left md:text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 break-keep">
              <span className="text-primary">집행사례</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 break-keep">
              애드잇과 함께한 <strong className="text-white">성공적인 프로젝트</strong>들을
              확인하세요
            </p>
          </motion.div>

          {/* 사례 그리드 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {displayedCases.map((caseItem, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.03 }}
              >
                <div className="aspect-4/3 bg-card rounded-xl overflow-hidden relative shadow-md group-hover:shadow-primary/20 group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={`/asset/집행사례 리스트/${caseItem.image}`}
                    alt={caseItem.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-semibold break-keep leading-snug">
                      {caseItem.name}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 font-medium text-center mt-2 group-hover:text-primary transition-colors duration-300 break-keep">
                  {caseItem.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          {!showAll && (
            <motion.div
              className="text-left md:text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                onClick={() => setShowAll(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                더보기
              </motion.button>
            </motion.div>
          )}

          {/* 접기 버튼 */}
          {showAll && (
            <motion.div
              className="text-left md:text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                onClick={() => {
                  setShowAll(false);
                  // 스크롤을 집행사례 섹션 시작으로 이동
                  const section = document.querySelector('#clients');
                  if (section) {
                    const headerOffset = 100;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                접기
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
