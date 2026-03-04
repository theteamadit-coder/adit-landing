'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image'; // sec3-bg 배경용

interface MainReason {
  icon: string;
  title: string;
  description: string;
}

interface Point {
  number: string;
  title: string;
  description: string;
  color: string;
}

const mainReasons: MainReason[] = [
  {
    icon: '',
    title: '실수요자 중심 정밀 타겟팅',
    description:
      '분양 성과는 노출 수보다 누구에게 보이느냐가 핵심입니다. 지역, 연령, 소득, 주거 형태, 관심 이력 데이터를 기반으로 전환 가능성이 높은 타겟에게만 광고를 노출합니다. • 실수요 중심 타겟팅으로 광고비 절감 • 문의 대비 계약 전환율 향상',
  },
  {
    icon: '',
    title: '현장 특화 콘텐츠 & 메시지 전략',
    description:
      '모든 현장에 같은 문구는 통하지 않습니다. 입지, 상품 경쟁력, 분양 단계에 맞춰 고객의 의사결정을 자극하는 맞춤형 콘텐츠를 설계해 효과를 극대화 합니다. • 현장 특성에 맞춘 메시지 전략 수립 • 관심 → 문의 → 방문으로 이어지는 전환 구조 설계',
  },
  {
    icon: '',
    title: '데이터 기반 성과 분석',
    description:
      '광고는 집행 이후가 더 중요합니다. 애드잇은 캠페인 종료 후 모든 데이터를 정밀하게 분석해, 성과가 검증된 요소는 강화하고 비효율적인 부분은 즉시 개선합니다. • 차별화된 프리미엄 리포트 제공 • 광고종료 후에도 지속적인 지원',
  },
];

const points: Point[] = [
  {
    number: '01',
    title: '비용 절감 성과 향상',
    description:
      '애드잇은 고객 중심의 높은 비용대비 성과를 추구합니다. 불필요한 지출을 줄이고 더 높은 성과를 만드는 광고 구조의 설계로 비용은 업계 최저로, 성과는 업계 최고로 보여드리겠습니다.',
    color: '',
  },
  {
    number: '02',
    title: '빅데이터 기반의 정밀 분석',
    description:
      '애드잇은 빅데이터를 활용하여 시장과 소비자 행동을 정밀하게 분석합니다. 이를 바탕으로 디테일한 타겟팅 전략을 수립해 성과 중심의 최적화된 마케팅 캠페인을 제공해드립니다.',
    color: '',
  },
  {
    number: '03',
    title: '정직과 신뢰의 프리미엄 서비스',
    description:
      '광고가 정확히 실행되었는지 신뢰하기 어려웠던 경험이 있으신가요? 애드잇은 정직과 신뢰를 기반으로 캠페인 실행부터 차별화된 성과 분석까지, 모든 과정을 투명하게 관리하고 지속적인 지원 및 프리미엄 서비스를 약속드리겠습니다.',
    color: '',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="why-us-section" className="relative py-24 md:py-32 overflow-hidden">
      {/* 배경 이미지 — 콘크리트 텍스처 */}
      <div className="absolute inset-0">
        <Image src="/asset/background/sec3-bg.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          className="text-left md:text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 rounded-full bg-primary/15 text-primary font-medium border border-primary/40 mb-6">
            분양은 한 번의 광고로 끝나지 않습니다
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6 break-keep">
            시기마다 <span className="text-primary">전략이 달라야</span> 합니다
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed break-keep">
            <span className="text-heading font-semibold">
              사전 마케팅(빌드업) → 본 마케팅(컨버전) → 사후 마케팅(클로징)
            </span>
            <br />
            전략적인 유입부터 실제 전환까지 전 과정을 설계합니다
          </p>
        </motion.div>

        {/* 메인 강점 그리드 (상단 3개) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {mainReasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative p-8 md:p-10 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/40 hover:shadow-md transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* 타이틀 */}
              <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4 group-hover:text-primary transition-colors duration-300 break-keep">
                {reason.title}
              </h3>

              {/* 설명 */}
              <p className="text-gray-600 leading-relaxed text-lg break-keep">
                {reason.description}
              </p>

              {/* 하단 강조선 */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Point 섹션 (하단 3개 - 미니멀한 레이아웃) */}
        <div className="max-w-6xl mx-auto space-y-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/40 hover:shadow-md transition-all duration-500"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6 p-8 md:p-10">
                {/* 넘버 - 왼쪽 accent 라인 고정 */}
                <div className="shrink-0 flex items-start">
                  <div className="border-l-4 border-primary/30 group-hover:border-primary pl-4 transition-colors duration-500">
                    <span className="text-6xl md:text-7xl font-black text-gray-300 group-hover:text-primary/50 transition-colors duration-500">
                      {point.number}
                    </span>
                  </div>
                </div>

                {/* 콘텐츠 */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4 group-hover:text-primary transition-colors duration-300 break-keep">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg break-keep">
                    {point.description}
                  </p>
                </div>
              </div>

              {/* 하단 액센트 라인 */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* 하단 메시지 */}
        <motion.div
          className="mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="p-8 md:p-12 rounded-2xl bg-primary/5 border border-primary/15 text-center">
            <p className="text-xl md:text-2xl text-heading font-semibold mb-4 break-keep">
              &quot;모든 사람에게 노출되는 광고는,
            </p>
            <p className="text-2xl md:text-3xl text-primary font-bold mb-6 break-keep">
              결국 아무에게도 도달하지 않습니다.&quot;
            </p>
            <div className="w-32 h-0.5 bg-primary/30 mx-auto my-6" />
            <p className="text-lg text-gray-600 break-keep leading-relaxed">
              광고는 <span className="text-heading font-bold">집행이 아니라 설계</span>입니다.
              <br />
              누구에게, 언제, 얼마나 보여줄지를 정교하게 설계할 때<br />
              비로소 광고는 <span className="text-primary font-bold">비용이 아닌 전략적 투자</span>
              가 됩니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
