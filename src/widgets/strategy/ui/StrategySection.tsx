export default function StrategySection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Meta Marketing</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            애드잇은 Meta를 다르게 씁니다!
          </p>
        </div>

        {/* 메인 강조 박스 */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 mb-16 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            광고의 시작은 노출이다, 그 중심에 Meta
          </h3>
          <p className="text-xl md:text-2xl mb-8">
            압도적 이용자 수 - <strong>Meta광고는 선택이 아닌 필수 입니다.</strong>
          </p>
          <div className="w-full h-px bg-white/30 my-8"></div>
          <p className="text-2xl md:text-3xl font-bold mb-4">
            광고의 품격, 애드잇은 Meta를 다르게 씁니다.
          </p>
          <p className="text-lg md:text-xl">
            누구나 하는 Meta 광고, 애드잇은 다릅니다
            <br />
            <strong>광고비를 계약으로 바꾸는 정밀 타겟 솔루션</strong>
          </p>
        </div>

        {/* 성과 강조 */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-50 rounded-2xl p-12 border-4 border-blue-600">
            <p className="text-6xl md:text-7xl font-bold text-blue-600 mb-4">79%</p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">결과당 비용,</p>
            <p className="text-xl md:text-2xl text-gray-700">동종대비 절감!</p>
          </div>
        </div>

        {/* 서비스 카드 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 숏폼 콘텐츠 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-full aspect-video bg-gray-300 rounded-lg mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">01. 숏폼 콘텐츠</h3>
            <p className="text-gray-700 leading-relaxed">
              메타 플랫폼에 최적화된 간결한 영상 콘텐츠로 고객의 시선을 사로잡고, 
              타겟에게 정확히 도달하는 고효율 숏폼 광고를 제공합니다.
            </p>
          </div>

          {/* 이미지 슬라이드 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-full aspect-video bg-gray-300 rounded-lg mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">02. 이미지 슬라이드</h3>
            <p className="text-gray-700 leading-relaxed">
              애드잇은 메타 플랫폼 내 이미지 슬라이드 형식을 활용해, 
              타겟 맞춤형 메시지를 단계적으로 전달하는 고효율 시각 광고를 기획·운영합니다.
            </p>
          </div>
        </div>

        {/* 우수 캠페인 사례 */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold">
            / 우수캠페인 사례
          </div>
        </div>

        {/* 3단 구조 전략 카드 */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 카드 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              실수요자 중심 정밀 타겟팅
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              분양 성과는 노출 수보다 <strong>누구에게 보이느냐</strong>가 핵심입니다.
              지역, 연령, 소득, 주거 형태, 관심 이력 데이터를 기반으로 전환 가능성이
              높은 타겟에게만 광고를 노출합니다.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 실수요 중심 타겟팅으로 광고비 절감</li>
              <li>• 문의 대비 계약 전환율 향상</li>
            </ul>
          </div>

          {/* 카드 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              현장 특화 콘텐츠 & 메시지 전략
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              모든 현장에 같은 문구는 통하지 않습니다. 입지, 상품 경쟁력, 분양 단계에
              맞춰 고객의 의사결정을 자극하는 맞춤형 콘텐츠를 설계해 효과를 극대화
              합니다.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 현장 특성에 맞춘 메시지 전략 수립</li>
              <li>• 관심 → 문의 → 방문으로 이어지는 전환 구조</li>
            </ul>
          </div>

          {/* 카드 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              데이터 기반 성과 분석
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              광고는 집행 이후가 더 중요합니다. 애드잇은 캠페인 종료 후 모든 데이터를
              정밀하게 분석해, 성과가 검증된 요소는 강화하고 비효율적인 부분은 즉시
              개선합니다.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 차별화된 프리미엄 리포트 제공</li>
              <li>• 광고종료 후에도 지속적인 지원</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
