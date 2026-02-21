'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

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

export default function CasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const displayedCases = showAll ? executionCases : executionCases.slice(0, 12);

  return (
    <section
      ref={ref}
      id="cases"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
      style={{
        backgroundImage: 'url(/asset/bg/GgKi8bBR3AxhELUhW2403hT-DIiconbvUE9T1lTs71S5R3xh62XzeVm_SdHeV4F1BHpEt0Ydi5oxRB9JTmlwfpFzoxPrfBHs3mNgUfcIflg.jpeg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '320px 320px',
      }}
    >
      <div className="container relative z-10 mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          className="text-left md:text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 break-keep">
            <span className="text-primary">집행사례</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 break-keep">
            애드잇과 함께한 <strong className="text-white">성공적인 프로젝트</strong>들을 확인하세요
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
              transition={{ duration: 0.4, delay: 0.3 + i * 0.03 }}
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
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl text-lg font-bold transition-all shadow-2xl"
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
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={() => {
                setShowAll(false);
                const section = document.getElementById('cases');
                if (section) {
                  const offsetPosition = section.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="bg-gray-700 hover:bg-gray-600 text-white px-12 py-4 rounded-xl text-lg font-bold transition-all shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              접기
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
