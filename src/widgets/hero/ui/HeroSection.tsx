'use client';

import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/asset/직방&호갱노노 상품소개서_2026.01Q.pdf';
    link.download = '직방&호갱노노 상품소개서_2026.01Q.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-overlay-darker overflow-hidden bg-[center_center] sm:bg-center"
      style={{
        backgroundImage: 'url(/asset/bg/photo-1486406146926-c627a92ad1ab.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container relative z-10 mx-auto px-4 py-32">
        <motion.div 
          className="max-w-5xl mx-auto text-left md:text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 메인 헤드라인 */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight break-keep"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              성과로 증명하는
            </span>
            <br />
            분양 마케팅!
          </motion.h1>
          
          {/* 서브 헤드라인 */}
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-8 font-light break-keep"
            variants={itemVariants}
          >
            빅데이터로 움직이는 광고 솔루션!
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto break-keep"
            variants={itemVariants}
          >
            애드잇은 빅데이터를 기반으로 한 타겟형 마케팅 전략으로 광고효과를 극대화합니다.
          </motion.p>

          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-12"
            variants={itemVariants}
          ></motion.div>

          {/* 핵심 메시지 */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed mb-6 break-keep">
              불확실한 광고에 고민하셨나요?<br />
              <span className="text-primary">잘 되는 분양! 이유는 분명합니다.</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed break-keep">
              성과 중심 마케팅, 정직하고 실행력 있는 광고 파트너<br />
              <span className="text-white font-semibold">애드잇</span>과 함께하세요.
            </p>
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              무료 컨설팅 신청하기
            </motion.button>
            <motion.button 
              onClick={handleDownload}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              상품소개서 다운로드
            </motion.button>
          </motion.div>

          {/* 핵심 키워드 */}
          <motion.div 
            className="pt-8"
            variants={itemVariants}
          >
            <div className="inline-flex gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-primary font-bold">타깃</span>
              <span className="text-gray-500">·</span>
              <span className="text-primary font-bold">타이밍</span>
              <span className="text-gray-500">·</span>
              <span className="text-primary font-bold">효율</span>
            </div>
          </motion.div>

          {/* 스크롤 인디케이터 */}
          <motion.div 
            className="pt-12 text-gray-400 text-sm animate-bounce"
            variants={itemVariants}
          >
            ↓ 자세히보기
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
