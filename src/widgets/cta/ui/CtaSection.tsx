'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function CtaSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    content: '',
    agree: false,
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('정상적으로 접수되었습니다.');
    setFormData({
      name: '',
      phone: '',
      content: '',
      agree: false,
    });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* 배경 이미지 — 팀 사진 */}
      <div className="absolute inset-0">
        <Image
          src="/asset/background/team-people.jpg"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* 헤더 */}
        <motion.div
          className="text-left md:text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6 break-keep">
            지금 바로 <span className="text-primary">무료 상담</span>을 시작하세요
          </h2>
          <p className="text-xl text-gray-600 break-keep">
            담당자가 확인 후 신속하게 답변 드리겠습니다
          </p>
        </motion.div>

        {/* 문의 폼 */}
        <motion.div
          className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 성명 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                성명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-heading placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="성명을 입력하세요"
              />
            </motion.div>

            {/* 연락처 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-heading placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="010-0000-0000"
              />
            </motion.div>

            {/* 문의내용 (선택) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
                문의내용 <span className="text-gray-600">(선택)</span>
              </label>
              <textarea
                id="content"
                rows={5}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-heading placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="문의하실 내용이 있으시면 입력해주세요"
              />
            </motion.div>

            {/* 개인정보 동의 */}
            <motion.div
              className="bg-white rounded-lg p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-start mb-4">
                <input
                  type="checkbox"
                  id="agree"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="agree" className="ml-3 text-sm font-semibold text-gray-700">
                  개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="max-h-40 overflow-y-auto text-xs text-gray-600 leading-relaxed bg-gray-50 p-4 rounded border border-gray-200">
                <p className="font-semibold mb-2 text-gray-700">개인정보 수집 및 이용 동의</p>
                <p className="mb-2">
                  회사는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한
                  고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
                  처리지침을 수립, 공개합니다.
                </p>
                <p className="mb-2">
                  <strong className="text-gray-700">1. 수집하는 개인정보 항목:</strong> 성명,
                  연락처, 문의내용
                </p>
                <p className="mb-2">
                  <strong className="text-gray-700">2. 개인정보의 수집 및 이용목적:</strong> 문의
                  접수 및 상담, 서비스 제공
                </p>
                <p>
                  <strong className="text-gray-700">3. 개인정보의 보유 및 이용기간:</strong> 문의
                  처리 완료 후 1년간 보관
                </p>
              </div>
            </motion.div>

            {/* 제출 버튼 */}
            <motion.button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-2xl font-black transition-all transform hover:scale-[1.02] shadow-2xl shadow-primary/30"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              무료 컨설팅 신청하기
            </motion.button>
          </form>
        </motion.div>

        {/* 연락처 정보 */}
        <motion.div
          className="mt-12 text-left md:text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-lg text-gray-600 mb-2">
            전화 문의:{' '}
            <a href="tel:02-6949-5032" className="text-primary font-semibold hover:underline">
              02-6949-5032
            </a>
          </p>
          <p className="text-lg text-gray-600">
            이메일:{' '}
            <a
              href="mailto:team@ad-it.co.kr"
              className="text-primary font-semibold hover:underline"
            >
              team@ad-it.co.kr
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
